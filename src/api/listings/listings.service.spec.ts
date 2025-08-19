import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { ZodError } from "zod";
import { PrismaClient } from "../../../generated/client";
import { ListingsService } from "./listings.service";

// Mock PrismaClient
const mockPrismaClient = {
  $queryRaw: jest.fn(),
  $transaction: jest.fn(),
};

describe("ListingsService", () => {
  let service: ListingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListingsService,
        {
          provide: PrismaClient,
          useValue: mockPrismaClient,
        },
      ],
    }).compile();

    service = module.get<ListingsService>(ListingsService);

    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("searchListings", () => {
    it("should search listings with filters and return paginated results", async () => {
      const searchDto = {
        search_term: "apartment",
        min_price: 1000,
        max_price: 5000,
        status: "active" as const,
        currency_code: "USD" as const,
        limit: 20,
        offset: 0,
        sort_by: "price" as const,
        sort_order: "asc" as const,
      };

      const mockResults = [
        {
          id: "1",
          title: "Apartment 1",
          price: 1500,
          status: "active",
        },
        {
          id: "2",
          title: "Apartment 2",
          price: 2500,
          status: "active",
        },
      ];

      const mockCountResult = [{ total: "2" }];

      mockPrismaClient.$queryRaw
        .mockResolvedValueOnce(mockResults) // search_listings function call
        .mockResolvedValueOnce(mockCountResult); // count query

      const result: unknown = await service.searchListings(searchDto);

      expect(result).toEqual({
        data: mockResults,
        pagination: {
          total: 2,
          limit: 20,
          offset: 0,
          has_more: false,
        },
      });

      expect(mockPrismaClient.$queryRaw).toHaveBeenCalledTimes(2);
    });

    it("should handle empty search results", async () => {
      const searchDto = {
        search_term: "nonexistent",
        status: "active" as const,
        currency_code: "USD" as const,
        limit: 20,
        offset: 0,
        sort_by: "created_at" as const,
        sort_order: "desc" as const,
      };

      mockPrismaClient.$queryRaw
        .mockResolvedValueOnce([]) // search_listings function call
        .mockResolvedValueOnce([{ total: "0" }]); // count query

      const result: unknown = await service.searchListings(searchDto);

      expect(result).toEqual({
        data: [],
        pagination: {
          total: 0,
          limit: 20,
          offset: 0,
          has_more: false,
        },
      });
    });

    it("should throw BadRequestException for validation errors", async () => {
      const invalidDto = { min_price: "invalid" };

      // Mock the validation to throw a ZodError
      jest
        .spyOn(
          service as unknown as { validateInput: jest.Mock },
          "validateInput"
        )
        .mockImplementation(() => {
          throw new ZodError([
            {
              code: "invalid_type",
              expected: "number",
              path: ["min_price"],
              message: "Expected number, received string",
            },
          ]);
        });

      await expect(
        service.searchListings(
          invalidDto as unknown as Parameters<typeof service.searchListings>[0]
        )
      ).rejects.toThrow(BadRequestException);
    });

    it("should handle database errors gracefully", async () => {
      const searchDto = {
        search_term: "test",
        status: "active" as const,
        currency_code: "USD" as const,
        limit: 20,
        offset: 0,
        sort_by: "created_at" as const,
        sort_order: "desc" as const,
      };

      mockPrismaClient.$queryRaw.mockRejectedValueOnce(
        new Error("Database connection failed")
      );

      await expect(service.searchListings(searchDto)).rejects.toThrow(
        InternalServerErrorException
      );
    });
  });

  describe("getListingById", () => {
    it("should return listing when valid UUID is provided", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";
      const mockListing = {
        id: validId,
        title: "Test Listing",
        price: 2500,
        currency_code: "USD",
        status: "active",
        owner_id: "owner-1",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        owner_email: "owner@example.com",
      };

      mockPrismaClient.$queryRaw.mockResolvedValueOnce([mockListing]);

      const result: unknown = await service.getListingById(validId);

      expect(result).toEqual(mockListing);
      expect(mockPrismaClient.$queryRaw).toHaveBeenCalledWith(
        expect.stringContaining("SELECT")
      );
    });

    it("should throw BadRequestException for invalid UUID format", async () => {
      const invalidId = "invalid-uuid";

      await expect(service.getListingById(invalidId)).rejects.toThrow(
        BadRequestException
      );
      expect(mockPrismaClient.$queryRaw).not.toHaveBeenCalled();
    });

    it("should throw NotFoundException when listing does not exist", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";

      mockPrismaClient.$queryRaw.mockResolvedValueOnce([]);

      await expect(service.getListingById(validId)).rejects.toThrow(
        NotFoundException
      );
    });
  });

  describe("createListing", () => {
    it("should create listing successfully with valid data", async () => {
      const createDto = {
        title: "Beautiful 2BR Apartment",
        description: "Modern apartment in downtown",
        price: 2500,
        currency_code: "USD" as const,
        status: "active" as const,
        latitude: 40.7128,
        longitude: -74.006,
        address: "123 Main St, New York, NY",
      };

      const mockOwner = { id: "owner-1", email: "owner@example.com" };
      const mockCreatedListing = {
        id: "listing-1",
        title: "Beautiful 2BR Apartment",
        description: "Modern apartment in downtown",
        price: 2500,
        currency_code: "USD",
        status: "active",
        latitude: 40.7128,
        longitude: -74.006,
        address: "123 Main St, New York, NY",
        owner_id: "owner-1",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        owner_email: "owner@example.com",
      };

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest
              .fn()
              .mockResolvedValueOnce([mockOwner])
              .mockResolvedValueOnce([mockCreatedListing]),
          });
        }
      );

      const result: unknown = await service.createListing(createDto);

      expect(result).toEqual(mockCreatedListing);
      expect(mockPrismaClient.$transaction).toHaveBeenCalled();
    });

    it("should throw BadRequestException when no users are available", async () => {
      const createDto = {
        title: "Test",
        price: 1000,
        currency_code: "USD" as const,
        status: "active" as const,
      };

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest.fn().mockResolvedValueOnce([]),
          });
        }
      );

      await expect(service.createListing(createDto)).rejects.toThrow(
        BadRequestException
      );
    });

    it("should throw BadRequestException for validation errors", async () => {
      const invalidDto = { title: "A", price: -100 };

      // Mock the validation to throw a ZodError
      jest
        .spyOn(
          service as unknown as { validateInput: jest.Mock },
          "validateInput"
        )
        .mockImplementation(() => {
          throw new ZodError([
            {
              code: "invalid_type",
              expected: "string",
              path: ["title"],
              message: "String must contain at least 3 character(s)",
            },
            {
              code: "invalid_type",
              expected: "number",
              path: ["price"],
              message: "Number must be greater than 0",
            },
          ]);
        });

      await expect(
        service.createListing(
          invalidDto as unknown as Parameters<typeof service.createListing>[0]
        )
      ).rejects.toThrow(BadRequestException);
    });

    it("should handle database errors gracefully", async () => {
      const createDto = {
        title: "Test",
        price: 1000,
        currency_code: "USD" as const,
        status: "active" as const,
      };

      mockPrismaClient.$transaction.mockRejectedValueOnce(
        new Error("Database error")
      );

      await expect(service.createListing(createDto)).rejects.toThrow(
        InternalServerErrorException
      );
    });
  });

  describe("updateListing", () => {
    it("should update listing successfully with valid data", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";
      const updateDto = {
        title: "Updated Title",
        price: 3500,
      };

      const mockExisting = { id: validId, updated_at: new Date() };
      const mockUpdatedListing = {
        id: validId,
        title: "Updated Title",
        price: 3500,
        currency_code: "USD" as const,
        status: "active" as const,
        owner_id: "owner-1",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        owner_email: "owner@example.com",
      };

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest
              .fn()
              .mockResolvedValueOnce([mockExisting])
              .mockResolvedValueOnce(undefined),
          });
        }
      );

      // Mock getListingById for the final fetch
      jest
        .spyOn(service, "getListingById")
        .mockResolvedValue(mockUpdatedListing);

      const result: unknown = await service.updateListing(validId, updateDto);

      expect(result).toEqual({
        message: "Listing updated successfully",
        listing: mockUpdatedListing,
      });
    });

    it("should throw BadRequestException for invalid UUID format", async () => {
      const invalidId = "invalid-uuid";
      const updateDto = { title: "Updated" };

      await expect(service.updateListing(invalidId, updateDto)).rejects.toThrow(
        BadRequestException
      );
    });

    it("should throw NotFoundException when listing does not exist", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";
      const updateDto = { title: "Updated" };

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest.fn().mockResolvedValueOnce([]),
          });
        }
      );

      await expect(service.updateListing(validId, updateDto)).rejects.toThrow(
        NotFoundException
      );
    });

    it("should throw BadRequestException for validation errors", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";
      const invalidDto = { title: "A", price: -100 };

      await expect(service.updateListing(validId, invalidDto)).rejects.toThrow(
        BadRequestException
      );
    });
  });

  describe("deleteListing", () => {
    it("should delete listing successfully with valid UUID", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";
      const mockExisting = { id: validId };

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest
              .fn()
              .mockResolvedValueOnce([mockExisting])
              .mockResolvedValueOnce(undefined),
          });
        }
      );

      await service
        .deleteListing(validId)
        .then((result: { message: string; deleted_at: Date }) => {
          expect(result.message).toBe("Listing deleted successfully");
          expect(result.deleted_at).toBeInstanceOf(Date);
        });
    });

    it("should throw BadRequestException for invalid UUID format", async () => {
      const invalidId = "invalid-uuid";

      await expect(service.deleteListing(invalidId)).rejects.toThrow(
        BadRequestException
      );
    });

    it("should throw NotFoundException when listing does not exist", async () => {
      const validId = "123e4567-e89b-12d3-a456-426614174000";

      mockPrismaClient.$transaction.mockImplementation(
        async (
          callback: (prisma: { $queryRaw: jest.Mock }) => Promise<unknown>
        ) => {
          return callback({
            $queryRaw: jest.fn().mockResolvedValueOnce([]),
          });
        }
      );

      await expect(service.deleteListing(validId)).rejects.toThrow(
        NotFoundException
      );
    });
  });

  describe("findNearby", () => {
    it("should find nearby listings successfully", async () => {
      const lat = 40.7128;
      const lon = -74.006;
      const radius = 10;
      const limit = 20;

      const mockResults = [
        { id: "1", title: "Nearby Apartment", distance: 2.5 },
        { id: "2", title: "Another Nearby", distance: 5.1 },
      ];

      mockPrismaClient.$queryRaw.mockResolvedValueOnce(mockResults);

      const result: unknown = await service.findNearby(lat, lon, radius, limit);

      expect(result).toEqual(mockResults);
      expect(mockPrismaClient.$queryRaw).toHaveBeenCalledWith(
        expect.stringContaining("find_listings_nearby")
      );
    });

    it("should throw BadRequestException for invalid coordinates", async () => {
      const invalidLat = 200; // Invalid latitude
      const lon = -74.006;

      await expect(service.findNearby(invalidLat, lon)).rejects.toThrow(
        BadRequestException
      );
    });

    it("should handle database errors gracefully", async () => {
      const lat = 40.7128;
      const lon = -74.006;

      mockPrismaClient.$queryRaw.mockRejectedValueOnce(
        new Error("Database error")
      );

      await expect(service.findNearby(lat, lon)).rejects.toThrow(
        InternalServerErrorException
      );
    });
  });

  describe("healthCheck", () => {
    it("should return healthy status when database is accessible", async () => {
      mockPrismaClient.$queryRaw.mockResolvedValueOnce([{ "1": 1 }]);

      await service
        .healthCheck()
        .then(
          (result: { status: string; timestamp: Date; service: string }) => {
            expect(result.status).toBe("healthy");
            expect(result.timestamp).toBeInstanceOf(Date);
            expect(result.service).toBe("listings");
          }
        );
    });

    it("should throw InternalServerErrorException when database is not accessible", async () => {
      mockPrismaClient.$queryRaw.mockRejectedValueOnce(
        new Error("Connection failed")
      );

      await expect(service.healthCheck()).rejects.toThrow(
        InternalServerErrorException
      );
    });
  });

  describe("convertBigInts", () => {
    it("should convert BigInt values to numbers", () => {
      const dataWithBigInt = {
        id: "123",
        price: BigInt(2500),
        nested: {
          count: BigInt(100),
          array: [BigInt(1), BigInt(2), BigInt(3)],
        },
      };

      const result = (
        service as unknown as { convertBigInts: (data: unknown) => unknown }
      ).convertBigInts(dataWithBigInt);

      expect((result as { price: number }).price).toBe(2500);
      expect((result as { nested: { count: number } }).nested.count).toBe(100);
      expect((result as { nested: { array: number[] } }).nested.array).toEqual([
        1, 2, 3,
      ]);
    });

    it("should handle null and undefined values", () => {
      const data = {
        id: "123",
        price: null,
        description: undefined,
      };

      const result = (
        service as unknown as { convertBigInts: (data: unknown) => unknown }
      ).convertBigInts(data);

      expect((result as { price: null }).price).toBeNull();
      expect(
        (result as { description: undefined }).description
      ).toBeUndefined();
    });

    it("should handle arrays with BigInt values", () => {
      const data = [BigInt(100), BigInt(200), BigInt(300)];

      const result = (
        service as unknown as { convertBigInts: (data: unknown) => unknown }
      ).convertBigInts(data);

      expect(result as number[]).toEqual([100, 200, 300]);
    });
  });

  describe("validateInput", () => {
    it("should validate input successfully with valid schema", () => {
      const schema = { parse: jest.fn().mockReturnValue({ valid: true }) };
      const data = { test: "data" };

      const result = (
        service as unknown as {
          validateInput: (schema: unknown, data: unknown) => unknown;
        }
      ).validateInput(schema, data);

      expect(result).toEqual({ valid: true });
      expect(schema.parse).toHaveBeenCalledWith(data);
    });

    it("should throw BadRequestException for validation errors", () => {
      const schema = {
        parse: jest.fn().mockImplementation(() => {
          throw new ZodError([
            {
              code: "invalid_type",
              expected: "string",
              path: ["field"],
              message: "Expected string, received number",
            },
          ]);
        }),
      };
      const data = { field: 123 };

      expect(() =>
        (
          service as unknown as {
            validateInput: (schema: unknown, data: unknown) => unknown;
          }
        ).validateInput(schema, data)
      ).toThrow(BadRequestException);
    });
  });
});
