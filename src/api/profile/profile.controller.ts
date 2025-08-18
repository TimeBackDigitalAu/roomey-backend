import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  Request,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ProfileData, ProfileService } from "./profile.service";

@ApiTags("profiles")
@Controller("profiles")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({ summary: "Create user profile" })
  @ApiResponse({ status: 201, description: "Profile created successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async createProfile(@Request() req: any, @Body() profileData: ProfileData) {
    return this.profileService.createProfile(req.user.userId, profileData);
  }

  // Health check - must come before parameterized routes
  @Get("health")
  @ApiOperation({ summary: "Profile service health check" })
  @ApiResponse({ status: 200, description: "Profile service is healthy" })
  healthCheck() {
    return {
      status: "ok",
      service: "profile",
      timestamp: new Date().toISOString(),
    };
  }

  // Admin endpoints - must come before parameterized routes
  @Get("all")
  @ApiOperation({ summary: "Get all profiles (Admin only)" })
  @ApiResponse({ status: 200, description: "Profiles retrieved successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 403, description: "Admin access required" })
  async getAllProfiles(@Request() req: any) {
    return this.profileService.getAllProfiles(req.user.userId, req.user.role);
  }

  @Get("search")
  @ApiOperation({ summary: "Search profiles (Admin only)" })
  @ApiQuery({ name: "q", description: "Search term" })
  @ApiResponse({ status: 200, description: "Profiles found successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 403, description: "Admin access required" })
  async searchProfiles(@Query("q") searchTerm: string, @Request() req: any) {
    if (!searchTerm) {
      return this.profileService.getAllProfiles(req.user.userId, req.user.role);
    }

    return this.profileService.searchProfiles(
      searchTerm,
      req.user.userId,
      req.user.role
    );
  }

  @Get("me")
  @ApiOperation({ summary: "Get current user profile" })
  @ApiResponse({ status: 200, description: "Profile retrieved successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async getMyProfile(@Request() req: any) {
    return this.profileService.getProfile(
      req.user.userId,
      req.user.userId,
      req.user.role
    );
  }

  @Get(":userId")
  @ApiOperation({ summary: "Get user profile by ID" })
  @ApiParam({ name: "userId", description: "User ID" })
  @ApiResponse({ status: 200, description: "Profile retrieved successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 403, description: "Access denied" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async getProfile(
    @Param("userId", ParseUUIDPipe) userId: string,
    @Request() req: any
  ) {
    return this.profileService.getProfile(
      userId,
      req.user.userId,
      req.user.role
    );
  }

  @Put("me")
  @ApiOperation({ summary: "Update current user profile" })
  @ApiResponse({ status: 200, description: "Profile updated successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async updateMyProfile(@Request() req: any, @Body() profileData: ProfileData) {
    return this.profileService.updateProfile(
      req.user.userId,
      profileData,
      req.user.userId,
      req.user.role
    );
  }

  @Put(":userId")
  @ApiOperation({ summary: "Update user profile by ID (Admin only)" })
  @ApiParam({ name: "userId", description: "User ID" })
  @ApiResponse({ status: 200, description: "Profile updated successfully" })
  @ApiResponse({ status: 400, description: "Bad request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 403, description: "Access denied" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async updateProfile(
    @Param("userId", ParseUUIDPipe) userId: string,
    @Body() profileData: ProfileData,
    @Request() req: any
  ) {
    return this.profileService.updateProfile(
      userId,
      profileData,
      req.user.userId,
      req.user.role
    );
  }

  @Delete("me")
  @ApiOperation({ summary: "Delete current user profile" })
  @ApiResponse({ status: 200, description: "Profile deleted successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async deleteMyProfile(@Request() req: any) {
    return this.profileService.deleteProfile(
      req.user.userId,
      req.user.userId,
      req.user.role
    );
  }

  @Delete(":userId")
  @ApiOperation({ summary: "Delete user profile by ID (Admin only)" })
  @ApiParam({ name: "userId", description: "User ID" })
  @ApiResponse({ status: 200, description: "Profile deleted successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  @ApiResponse({ status: 403, description: "Access denied" })
  @ApiResponse({ status: 404, description: "Profile not found" })
  async deleteProfile(
    @Param("userId", ParseUUIDPipe) userId: string,
    @Request() req: any
  ) {
    return this.profileService.deleteProfile(
      userId,
      req.user.userId,
      req.user.role
    );
  }
}
