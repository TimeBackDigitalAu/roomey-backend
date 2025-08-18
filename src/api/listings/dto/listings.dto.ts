import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

// Base listing schema with common fields
const baseListingSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().max(2000, 'Description must be less than 2000 characters').optional(),
  price: z
    .number()
    .positive('Price must be positive')
    .max(1000000, 'Price must be less than 1,000,000'),
  currency_code: z.enum(['USD', 'EUR', 'GBP', 'CAD', 'AUD']).default('USD'),
  status: z.enum(['active', 'inactive', 'draft', 'archived']).default('active'),
  latitude: z
    .number()
    .min(-90, 'Latitude must be between -90 and 90')
    .max(90, 'Latitude must be between -90 and 90')
    .optional(),
  longitude: z
    .number()
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180, 'Longitude must be between -180 and 180')
    .optional(),
  address: z.string().max(500, 'Address must be less than 500 characters').optional(),
});

// Create listing schema
export const CreateListingSchema = baseListingSchema.extend({
  // Additional validation for create operation
  title: baseListingSchema.shape.title.min(3, 'Title must be at least 3 characters'),
  price: baseListingSchema.shape.price.min(1, 'Price must be at least 1'),
});

// Update listing schema - all fields optional
export const UpdateListingSchema = baseListingSchema.partial().extend({
  // Additional validation for update operation
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(200, 'Title must be less than 200 characters')
    .optional(),
  price: z
    .number()
    .positive('Price must be positive')
    .max(1000000, 'Price must be less than 1,000,000')
    .optional(),
});

// Search listings schema
export const SearchListingsSchema = z.object({
  query: z.string().optional(),
  location: z.string().optional(),
  min_price: z.coerce.number().min(0, 'Min price must be non-negative').optional(),
  max_price: z.coerce.number().min(0, 'Max price must be non-negative').optional(),
  bedrooms: z.coerce.number().min(0, 'Bedrooms must be non-negative').optional(),
  bathrooms: z.coerce.number().min(0, 'Bathrooms must be non-negative').optional(),
  property_type: z.enum(['apartment', 'house', 'condo', 'townhouse', 'studio']).optional(),
  amenities: z.array(z.string()).optional(),
  available_from: z.coerce.date().optional(),
  available_until: z.coerce.date().optional(),
  furnished: z.coerce.boolean().optional(),
  parking: z.coerce.boolean().optional(),
  pet_friendly: z.coerce.boolean().optional(),
  smoking_allowed: z.coerce.boolean().optional(),
  currency_code: z.enum(['USD', 'EUR', 'GBP', 'CAD', 'AUD']).default('USD'),
  status: z.enum(['active', 'inactive', 'draft', 'archived']).default('active'),
  // Pagination and sorting
  limit: z.number().min(1, 'Limit must be at least 1').max(100, 'Limit cannot exceed 100'),
  offset: z.number().min(0, 'Offset must be non-negative'),
  sort_by: z
    .enum(['price', 'created_at', 'updated_at', 'bedrooms', 'bathrooms'])
    .default('created_at'),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
  // Geospatial search
  latitude: z.coerce.number().min(-90, 'Latitude must be between -90 and 90').max(90).optional(),
  longitude: z.coerce
    .number()
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180)
    .optional(),
  radius_km: z.coerce
    .number()
    .min(0.1, 'Radius must be at least 0.1 km')
    .max(100, 'Radius cannot exceed 100 km')
    .optional(),
});

// Nearby listings schema
export const NearbyListingsSchema = z.object({
  lat: z
    .number()
    .min(-90, 'Latitude must be between -90 and 90')
    .max(90, 'Latitude must be between -90 and 90'),
  lon: z
    .number()
    .min(-180, 'Longitude must be between -180 and 180')
    .max(180, 'Longitude must be between -180 and 180'),
  radius: z
    .number()
    .min(0.1, 'Radius must be at least 0.1 km')
    .max(100, 'Radius must be less than 100 km')
    .default(10),
  limit: z
    .number()
    .min(1, 'Limit must be at least 1')
    .max(50, 'Limit must be less than 50')
    .default(20),
});

// Response schemas
export const ListingResponseSchema = baseListingSchema.extend({
  id: z.string().uuid(),
  owner_id: z.string().uuid(),
  owner_name: z.string().optional(),
  owner_email: z.string().email().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});

export const ListingsResponseSchema = z.object({
  data: z.array(ListingResponseSchema),
  pagination: z.object({
    total: z.number(),
    limit: z.number(),
    offset: z.number(),
    has_more: z.boolean(),
  }),
});

export const CreateListingResponseSchema = ListingResponseSchema;
export const UpdateListingResponseSchema = z.object({
  message: z.string(),
  listing: ListingResponseSchema,
});

export const DeleteListingResponseSchema = z.object({
  message: z.string(),
  deleted_at: z.date(),
});

// TypeScript types derived from schemas
export type CreateListingDto = z.infer<typeof CreateListingSchema>;
export type UpdateListingDto = z.infer<typeof UpdateListingSchema>;
export type SearchListingsDto = z.infer<typeof SearchListingsSchema>;
export type NearbyListingsDto = z.infer<typeof NearbyListingsSchema>;
export type ListingResponse = z.infer<typeof ListingResponseSchema>;
export type ListingsResponse = z.infer<typeof ListingsResponseSchema>;
export type CreateListingResponse = z.infer<typeof CreateListingResponseSchema>;
export type UpdateListingResponse = z.infer<typeof UpdateListingResponseSchema>;
export type DeleteListingResponse = z.infer<typeof DeleteListingResponseSchema>;

// Swagger DTOs for backward compatibility
export class CreateListingDtoSwagger {
  @ApiProperty({
    description: 'Listing title',
    required: true,
    example: 'Cozy 2BR Apartment',
    minLength: 3,
    maxLength: 200,
  })
  title!: string;

  @ApiProperty({
    description: 'Listing description',
    required: false,
    example: 'Beautiful apartment in downtown area',
    maxLength: 2000,
  })
  description?: string;

  @ApiProperty({
    description: 'Monthly rent price',
    required: true,
    example: 2500.0,
    minimum: 1,
    maximum: 1000000,
  })
  price!: number;

  @ApiProperty({
    description: 'Currency code',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
    default: 'USD',
  })
  currency_code?: string = 'USD';

  @ApiProperty({
    description: 'Listing status',
    enum: ['active', 'inactive', 'draft', 'archived'],
    default: 'active',
  })
  status?: string = 'active';

  @ApiProperty({
    description: 'Latitude',
    required: false,
    example: 40.7128,
    minimum: -90,
    maximum: 90,
  })
  latitude?: number;

  @ApiProperty({
    description: 'Longitude',
    required: false,
    example: -74.006,
    minimum: -180,
    maximum: 180,
  })
  longitude?: number;

  @ApiProperty({
    description: 'Address',
    required: false,
    example: '123 Main St, New York, NY',
    maxLength: 500,
  })
  address?: string;
}

export class UpdateListingDtoSwagger {
  @ApiProperty({
    description: 'Listing title',
    required: false,
    example: 'Updated Title',
    minLength: 3,
    maxLength: 200,
  })
  title?: string;

  @ApiProperty({
    description: 'Listing description',
    required: false,
    example: 'Updated description',
    maxLength: 2000,
  })
  description?: string;

  @ApiProperty({
    description: 'Listing price',
    required: false,
    example: 2600.0,
    minimum: 1,
    maximum: 1000000,
  })
  price?: number;

  @ApiProperty({
    description: 'Listing status',
    enum: ['active', 'inactive', 'draft', 'archived'],
    required: false,
  })
  status?: string;

  @ApiProperty({
    description: 'Latitude',
    required: false,
    example: 40.7128,
    minimum: -90,
    maximum: 90,
  })
  latitude?: number;

  @ApiProperty({
    description: 'Longitude',
    required: false,
    example: -74.006,
    minimum: -180,
    maximum: 180,
  })
  longitude?: number;

  @ApiProperty({
    description: 'Address',
    required: false,
    example: 'Updated Address',
    maxLength: 500,
  })
  address?: string;
}

export class SearchListingsDtoSwagger {
  @ApiProperty({
    description: 'Search term',
    required: false,
    example: 'apartment',
    maxLength: 100,
  })
  search_term?: string;

  @ApiProperty({
    description: 'Minimum price',
    required: false,
    example: 1000,
    minimum: 0,
  })
  min_price?: number;

  @ApiProperty({
    description: 'Maximum price',
    required: false,
    example: 5000,
    minimum: 0,
  })
  max_price?: number;

  @ApiProperty({
    description: 'Status filter',
    enum: ['active', 'inactive', 'draft', 'archived'],
    default: 'active',
  })
  status?: string = 'active';

  @ApiProperty({
    description: 'Limit results',
    default: 20,
    example: 20,
    minimum: 1,
    maximum: 100,
  })
  limit?: number = 20;

  @ApiProperty({
    description: 'Offset for pagination',
    default: 0,
    example: 0,
    minimum: 0,
  })
  offset?: number = 0;

  @ApiProperty({
    description: 'Sort by field',
    enum: ['price', 'created_at', 'updated_at', 'title'],
    default: 'created_at',
  })
  sort_by?: string = 'created_at';

  @ApiProperty({
    description: 'Sort order',
    enum: ['asc', 'desc'],
    default: 'desc',
  })
  sort_order?: string = 'desc';
}

// Swagger Response classes
export class ListingResponseSwagger {
  @ApiProperty({
    description: 'Unique listing identifier',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id!: string;

  @ApiProperty({
    description: 'Listing title',
    example: 'Cozy 2BR Apartment',
  })
  title!: string;

  @ApiProperty({
    description: 'Listing description',
    example: 'Beautiful apartment in downtown area',
  })
  description?: string;

  @ApiProperty({
    description: 'Monthly rent price',
    example: 2500.0,
  })
  price!: number;

  @ApiProperty({
    description: 'Currency code',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
  })
  currency_code!: string;

  @ApiProperty({
    description: 'Listing status',
    enum: ['active', 'inactive', 'draft', 'archived'],
  })
  status!: string;

  @ApiProperty({
    description: 'Latitude',
    example: 40.7128,
  })
  latitude?: number;

  @ApiProperty({
    description: 'Longitude',
    example: -74.006,
  })
  longitude?: number;

  @ApiProperty({
    description: 'Address',
    example: '123 Main St, New York, NY',
  })
  address?: string;

  @ApiProperty({
    description: 'Owner ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  owner_id!: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-01T00:00:00.000Z',
  })
  created_at!: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-01-01T00:00:00.000Z',
  })
  updated_at!: Date;

  @ApiProperty({
    description: 'Deletion timestamp',
    example: '2024-01-01T00:00:00.000Z',
  })
  deleted_at?: Date;

  @ApiProperty({
    description: 'Owner email',
    example: 'owner@example.com',
  })
  owner_email?: string;
}

export class ListingsResponseSwagger {
  @ApiProperty({
    description: 'Array of listings',
    type: [ListingResponseSwagger],
  })
  data!: ListingResponseSwagger[];

  @ApiProperty({
    description: 'Pagination information',
    type: 'object',
    additionalProperties: false,
  })
  pagination!: {
    total: number;
    limit: number;
    offset: number;
    has_more: boolean;
  };
}

export class CreateListingResponseSwagger extends ListingResponseSwagger {}

export class UpdateListingResponseSwagger {
  @ApiProperty({
    description: 'Updated listing information',
    type: ListingResponseSwagger,
  })
  listing!: ListingResponseSwagger;

  @ApiProperty({
    description: 'Update success message',
    example: 'Listing updated successfully',
  })
  message!: string;
}

export class DeleteListingResponseSwagger {
  @ApiProperty({
    description: 'Deletion success message',
    example: 'Listing deleted successfully',
  })
  message!: string;

  @ApiProperty({
    description: 'Deleted listing ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  listing_id!: string;
}
