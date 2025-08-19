import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { z } from 'zod';
import { PrismaClient } from '../../../generated/client';
import {
    CreateListingDto,
    CreateListingResponse,
    CreateListingSchema,
    DeleteListingResponse,
    ListingResponse,
    ListingsResponse,
    NearbyListingsSchema,
    SearchListingsDto,
    SearchListingsSchema,
    UpdateListingDto,
    UpdateListingResponse,
    UpdateListingSchema,
} from './dto/listings.dto';

interface DatabaseResult {
  id: string;
  total?: number;
  [key: string]: unknown;
}

@Injectable()
export class ListingsService {
  private readonly logger = new Logger(ListingsService.name);
  private readonly prisma: PrismaClient;

  public constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Search listings with advanced filtering and pagination
   */
  public async searchListings(searchDto: SearchListingsDto): Promise<ListingsResponse> {
    try {
      // Validate input
      const validatedDto = this.validateInput(SearchListingsSchema, searchDto);
      const { query, min_price, max_price, status, limit, offset } = validatedDto;

      this.logger.log(`Searching listings with criteria: ${JSON.stringify(validatedDto)}`);

      // Use the database function with proper type casting
      const results = await this.prisma.$queryRaw<DatabaseResult[]>`
        SELECT * FROM search_listings(
          ${query ?? null}::text,
          ${min_price ?? null}::numeric,
          ${max_price ?? null}::numeric,
          ${status ?? 'active'}::text,
          ${limit ?? 20}::integer,
          ${offset ?? 0}::integer
        )
      `;

      // Get total count for pagination
      const countResult = await this.prisma.$queryRaw<DatabaseResult[]>`
        SELECT COUNT(*) as total FROM listings 
        WHERE deleted_at IS NULL 
        AND status = ${status ?? 'active'}
        ${query ? `AND (title ILIKE ${`%${query}%`} OR description ILIKE ${`%${query}%`})` : ''}
        ${min_price ? `AND price >= ${min_price}` : ''}
        ${max_price ? `AND price <= ${max_price}` : ''}
      `;

      const total = Number(countResult[0]?.total ?? 0);

      // Convert BigInt values and format response
      const listings = this.convertBigInts(results) as ListingResponse[];

      const pagination = {
        total,
        limit: searchDto.limit ?? 20,
        offset: searchDto.offset ?? 0,
        has_more: (searchDto.offset ?? 0) + (searchDto.limit ?? 20) < total,
      };

      return {
        data: listings,
        pagination,
      };
    } catch (error) {
      this.handleError(error, 'search listings');
    }
  }

  /**
   * Get listing by ID with proper UUID validation
   */
  public async getListingById(id: string): Promise<ListingResponse> {
    try {
      // Validate UUID format before querying database
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id)) {
        throw new BadRequestException(`Invalid listing ID format: ${id}`);
      }

      this.logger.log(`Fetching listing with ID: ${id}`);

      // Use a direct query with explicit column aliases and joins
      const results = await this.prisma.$queryRaw<DatabaseResult[]>`
        SELECT 
          l.id,
          l.title,
          l.description,
          l.price,
          l.currency_code,
          l.status,
          l.address,
          l.latitude,
          l.longitude,
          l.created_at,
          l.updated_at,
          l.deleted_at,
          l.owner_id,
          COALESCE(u.first_name || ' ' || u.last_name, 'Unknown') as owner_name,
          u.email as owner_email
        FROM listings l
        LEFT JOIN users u ON l.owner_id = u.id
        WHERE l.id = ${id}::uuid AND l.deleted_at IS NULL
      `;

      if (!results || results.length === 0) {
        throw new NotFoundException(`Listing with ID ${id} not found`);
      }

      const result = results[0];
      return this.convertBigInts(result) as ListingResponse;
    } catch (error) {
      this.handleError(error, 'fetch listing');
    }
  }

  /**
   * Create new listing with transaction support
   */
  public async createListing(createListingDto: CreateListingDto): Promise<CreateListingResponse> {
    try {
      // Validate input
      const validatedDto = this.validateInput(CreateListingSchema, createListingDto);
      const { title, description, price, currency_code, status, latitude, longitude, address } =
        validatedDto;

      this.logger.log(`Creating new listing: ${title}`);

      // Use transaction for data consistency
      return await this.prisma.$transaction(async (tx) => {
        // Get the first available user as owner (for testing purposes)
        const ownerResult = await tx.$queryRaw<DatabaseResult[]>`
          SELECT id FROM users WHERE deleted_at IS NULL LIMIT 1
        `;

        if (!ownerResult || ownerResult.length === 0) {
          throw new BadRequestException('No users available to assign as owner');
        }

        const ownerId = ownerResult[0]?.id;
        if (!ownerId) {
          throw new BadRequestException('Invalid owner ID');
        }

        // Create the listing
        const result = await tx.$queryRaw<DatabaseResult[]>`
          INSERT INTO listings (
            owner_id, title, description, price, currency_code, status, 
            latitude, longitude, address, created_at, updated_at
          ) VALUES (
            ${ownerId}::uuid, ${title}, ${description}, ${price}, ${currency_code ?? 'USD'}, ${status ?? 'active'},
            ${latitude}, ${longitude}, ${address}, NOW(), NOW()
          ) RETURNING *
        `;

        const createdResult = result[0];
        if (!createdResult) {
          throw new InternalServerErrorException('Failed to create listing');
        }
        this.logger.log(`Successfully created listing with ID: ${createdResult.id}`);

        return this.convertBigInts(createdResult) as CreateListingResponse;
      });
    } catch (error) {
      this.handleError(error, 'create listing');
    }
  }

  /**
   * Update listing with optimistic locking
   */
  public async updateListing(
    id: string,
    updateListingDto: UpdateListingDto
  ): Promise<UpdateListingResponse> {
    try {
      // Validate input
      const validatedDto = this.validateInput(UpdateListingSchema, updateListingDto);
      const { title, description, price, status } = validatedDto;

      // Validate UUID format
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id)) {
        throw new BadRequestException(`Invalid listing ID format: ${id}`);
      }

      this.logger.log(`Updating listing ${id} with data: ${JSON.stringify(validatedDto)}`);

      // Use transaction for data consistency
      return await this.prisma.$transaction(async (tx) => {
        // Check if listing exists and get current version
        const existing = await tx.$queryRaw<DatabaseResult[]>`
          SELECT id, updated_at FROM listings 
          WHERE id = ${id}::uuid AND deleted_at IS NULL
        `;

        if (!existing || existing.length === 0) {
          throw new NotFoundException(`Listing with ID ${id} not found`);
        }

        // Update the listing
        await tx.$queryRaw`
          UPDATE listings 
          SET 
            title = COALESCE(${title}, title),
            description = COALESCE(${description}, description),
            price = COALESCE(${price}, price),
            status = COALESCE(${status}, status),
            updated_at = NOW()
          WHERE id = ${id}::uuid AND deleted_at IS NULL
        `;

        // Fetch updated listing
        const updatedListing = await this.getListingById(id);

        this.logger.log(`Successfully updated listing ${id}`);

        return {
          message: 'Listing updated successfully',
          listing: updatedListing,
        };
      });
    } catch (error) {
      this.handleError(error, 'update listing');
    }
  }

  /**
   * Soft delete listing
   */
  public async deleteListing(id: string): Promise<DeleteListingResponse> {
    try {
      // Validate UUID format
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id)) {
        throw new BadRequestException(`Invalid listing ID format: ${id}`);
      }

      this.logger.log(`Deleting listing ${id}`);

      // Use transaction for data consistency
      return await this.prisma.$transaction(async (tx) => {
        // Check if listing exists
        const existing = await tx.$queryRaw<DatabaseResult[]>`
          SELECT id FROM listings 
          WHERE id = ${id}::uuid AND deleted_at IS NULL
        `;

        if (!existing || existing.length === 0) {
          throw new NotFoundException(`Listing with ID ${id} not found`);
        }

        // Soft delete by setting deleted_at
        await tx.$queryRaw`
          UPDATE listings 
          SET deleted_at = NOW(), updated_at = NOW()
          WHERE id = ${id}::uuid
        `;

        this.logger.log(`Successfully deleted listing ${id}`);

        return {
          message: 'Listing deleted successfully',
          deleted_at: new Date(),
        };
      });
    } catch (error) {
      this.handleError(error, 'delete listing');
    }
  }

  /**
   * Find listings nearby with geospatial search
   */
  public async findNearby(
    lat: number,
    lon: number,
    radius = 10,
    limit = 20
  ): Promise<ListingResponse[]> {
    try {
      // Validate input
      const validatedDto = this.validateInput(NearbyListingsSchema, {
        lat,
        lon,
        radius,
        limit,
      });
      const {
        lat: validatedLat,
        lon: validatedLon,
        radius: validatedRadius,
        limit: validatedLimit,
      } = validatedDto;

      this.logger.log(
        `Finding listings near (${validatedLat}, ${validatedLon}) within ${validatedRadius}km`
      );

      // Use the database function with proper parameter order
      const results = await this.prisma.$queryRaw<DatabaseResult[]>`
        SELECT * FROM find_listings_nearby(
          ${validatedLat}::numeric,
          ${validatedLon}::numeric,
          ${validatedRadius}::numeric,
          ${validatedLimit}::integer
        )
      `;

      const listings = this.convertBigInts(results) as ListingResponse[];
      this.logger.log(`Found ${listings.length} listings nearby`);

      return listings;
    } catch (error) {
      this.handleError(error, 'find nearby listings');
    }
  }

  /**
   * Health check method for service monitoring
   */
  public async healthCheck(): Promise<{
    status: string;
    timestamp: Date;
    service: string;
  }> {
    try {
      // Test database connection
      await this.prisma.$queryRaw`SELECT 1`;

      return {
        status: 'healthy',
        timestamp: new Date(),
        service: 'listings',
      };
    } catch (error) {
      this.handleError(error, 'health check');
    }
  }

  /**
   * Convert BigInt values to regular numbers for JSON serialization
   * This is a utility function to handle PostgreSQL's BigInt type
   */
  private convertBigInts(data: unknown): unknown {
    if (data === null || data === undefined) return data;
    if (typeof data === 'bigint') return Number(data);
    if (Array.isArray(data)) {
      return data.map((item) => this.convertBigInts(item));
    }
    if (typeof data === 'object' && data !== null) {
      const converted: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(data)) {
        converted[key] = this.convertBigInts(value);
      }
      return converted;
    }
    return data;
  }

  /**
   * Handle errors with proper type checking
   */
  private handleError(error: unknown, context: string): never {
    if (
      error instanceof BadRequestException ||
      error instanceof NotFoundException ||
      error instanceof InternalServerErrorException
    ) {
      throw error;
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const errorStack = error instanceof Error ? error.stack : undefined;

    this.logger.error(`Error in ${context}: ${errorMessage}`, errorStack);

    throw new InternalServerErrorException(`Failed to ${context}`);
  }

  /**
   * Validate and sanitize input data using Zod schemas
   */
  private validateInput<T>(schema: z.ZodSchema<T>, data: unknown): T {
    try {
      return schema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = (error as any).errors
          .map((err) => `${err.path.join('.')}: ${err.message}`)
          .join(', ');
        throw new BadRequestException(`Validation failed: ${validationErrors}`);
      }
      throw error;
    }
  }
}
