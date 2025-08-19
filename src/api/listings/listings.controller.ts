import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import {
  CreateListingDto,
  CreateListingResponse,
  CreateListingResponseSwagger,
  CreateListingSchema,
  DeleteListingResponse,
  DeleteListingResponseSwagger,
  ListingResponse,
  ListingResponseSwagger,
  ListingsResponse,
  SearchListingsDto,
  SearchListingsSchema,
  UpdateListingDto,
  UpdateListingResponse,
  UpdateListingResponseSwagger,
  UpdateListingSchema,
} from './dto/listings.dto';
import { ListingsService } from './listings.service';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  public constructor(private readonly listingsService: ListingsService) {}

  @Get('search')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Search listings',
    description: 'Search for listings based on various criteria',
  })
  @ApiQuery({
    name: 'query',
    required: false,
    description: 'Search query string',
    example: 'studio apartment downtown',
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
    description: 'Minimum price',
    example: 500,
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
    description: 'Maximum price',
    example: 2000,
  })
  @ApiQuery({
    name: 'propertyType',
    required: false,
    description: 'Type of property',
    example: 'apartment',
  })
  @ApiQuery({
    name: 'bedrooms',
    required: false,
    description: 'Number of bedrooms',
    example: 2,
  })
  @ApiQuery({
    name: 'bathrooms',
    required: false,
    description: 'Number of bathrooms',
    example: 1,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of results per page',
    example: 20,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listings found successfully',
    type: ListingResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid search parameters',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async searchListings(
    @Query(new ZodValidationPipe(SearchListingsSchema))
    searchDto: SearchListingsDto
  ): Promise<ListingsResponse> {
    return this.listingsService.searchListings(searchDto);
  }

  @Get('nearby')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Find listings nearby',
    description:
      'Find listings within a specified radius from given coordinates',
  })
  @ApiQuery({
    name: 'lat',
    required: true,
    description: 'Latitude',
    example: 40.7128,
  })
  @ApiQuery({
    name: 'lon',
    required: true,
    description: 'Longitude',
    example: -74.006,
  })
  @ApiQuery({
    name: 'radius',
    required: false,
    description: 'Search radius in kilometers',
    example: 10,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Maximum number of results',
    example: 20,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Nearby listings found successfully',
    type: [ListingResponseSwagger],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid coordinates or parameters',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async findNearby(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
    @Query('radius') radius = 10,
    @Query('limit') limit = 20
  ): Promise<ListingResponse[]> {
    return this.listingsService.findNearby(lat, lon, radius, limit);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get listing by ID',
    description: 'Retrieve a specific listing by its unique identifier',
  })
  @ApiParam({
    name: 'id',
    description: 'Listing UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listing found successfully',
    type: ListingResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid listing ID format',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Listing not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async getListing(@Param('id') id: string): Promise<ListingResponse> {
    return this.listingsService.getListingById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create new listing',
    description: 'Create a new property listing',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Listing created successfully',
    type: CreateListingResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async createListing(
    @Body(new ZodValidationPipe(CreateListingSchema))
    createDto: CreateListingDto
  ): Promise<CreateListingResponse> {
    return this.listingsService.createListing(createDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update listing',
    description: 'Update an existing property listing',
  })
  @ApiParam({
    name: 'id',
    description: 'Listing UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listing updated successfully',
    type: UpdateListingResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Listing not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async updateListing(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateListingSchema))
    updateDto: UpdateListingDto
  ): Promise<UpdateListingResponse> {
    return this.listingsService.updateListing(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete listing',
    description: 'Soft delete a property listing',
  })
  @ApiParam({
    name: 'id',
    description: 'Listing UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listing deleted successfully',
    type: DeleteListingResponseSwagger,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid listing ID format',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Listing not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public async deleteListing(
    @Param('id') id: string
  ): Promise<DeleteListingResponse> {
    return this.listingsService.deleteListing(id);
  }

  @Get('health/check')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Service health check',
    description: 'Check the health status of the listings service',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Service is healthy',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'healthy' },
        timestamp: { type: 'string', format: 'date-time' },
        service: { type: 'string', example: 'listings' },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Service is unhealthy',
  })
  public async healthCheck(): Promise<{
    status: string;
    timestamp: string;
    service: string;
  }> {
    const result = await this.listingsService.healthCheck();
    return {
      ...result,
      timestamp: result.timestamp.toISOString(),
    };
  }
}
