import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import type { Prisma } from "../../../generated/client";
import { PrismaService } from "../../prisma/prisma.service";

export interface ProfileData {
  firstName?: string;
  lastName?: string;
  bio?: string;
  avatar?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  preferences?: {
    notifications?: boolean;
    marketing?: boolean;
    language?: string;
    timezone?: string;
  };
  socialLinks?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

@Injectable()
export class ProfileService {
  public constructor(private readonly prisma: PrismaService) {}

  public async createProfile(
    userId: string,
    profileData: ProfileData
  ): Promise<{
    id: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    bio?: string | undefined;
    avatar?: string | null | undefined;
    phoneNumber: string | null;
    dateOfBirth?: Date | undefined;
    address?: ProfileData["address"] | undefined;
    preferences?: ProfileData["preferences"] | undefined;
    socialLinks?: ProfileData["socialLinks"] | undefined;
    isOnboarded: boolean | null;
    createdAt: Date;
    updatedAt: Date;
  }> {
    // Check if profile already exists
    const existingProfile = await this.prisma.user_table.findUnique({
      where: { id: userId },
    });

    if (!existingProfile) {
      throw new NotFoundException("User not found");
    }

    // Update user with profile information
    const updatedUser = await this.prisma.user_table.update({
      where: { id: userId },
      data: {
        user_name:
          `${profileData.firstName ?? ""} ${profileData.lastName ?? ""}`.trim(),
        user_phone_number: profileData.phoneNumber ?? null,
        user_updated_at: new Date(),
        user_is_onboarded: true,
      },
    });

    return {
      id: updatedUser.id,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      bio: profileData.bio,
      avatar: profileData.avatar,
      phoneNumber: updatedUser.user_phone_number,
      dateOfBirth: profileData.dateOfBirth,
      address: profileData.address,
      preferences: profileData.preferences,
      socialLinks: profileData.socialLinks,
      isOnboarded: updatedUser.user_is_onboarded,
      createdAt: updatedUser.user_created_at,
      updatedAt: updatedUser.user_updated_at,
    };
  }

  public async getProfile(
    userId: string,
    requestingUserId: string,
    requestingUserRole: string
  ): Promise<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    avatar: string | null;
    isOnboarded: boolean | null;
    createdAt: Date;
    updatedAt: Date;
  }> {
    // Users can only access their own profile, admins can access any profile
    if (userId !== requestingUserId && requestingUserRole !== "admin") {
      throw new UnauthorizedException("Access denied");
    }

    type UserSelected = {
      id: string;
      user_name: string | null;
      user_email: string;
      user_phone_number: string | null;
      user_image: string | null;
      user_is_onboarded: boolean | null;
      user_created_at: Date;
      user_updated_at: Date;
    };

    const user = (await this.prisma.user_table.findUnique({
      where: { id: userId },
      select: {
        id: true,
        user_name: true,
        user_email: true,
        user_phone_number: true,
        user_image: true,
        user_is_onboarded: true,
        user_created_at: true,
        user_updated_at: true,
      },
    })) as UserSelected | null;

    if (!user) {
      throw new NotFoundException("Profile not found");
    }

    const { first, last } = this.splitNameSafely(user.user_name);

    return {
      id: user.id,
      firstName: first,
      lastName: last,
      email: user.user_email,
      phoneNumber: user.user_phone_number,
      avatar: user.user_image,
      isOnboarded: user.user_is_onboarded,
      createdAt: user.user_created_at,
      updatedAt: user.user_updated_at,
    };
  }

  public async updateProfile(
    userId: string,
    profileData: ProfileData,
    requestingUserId: string,
    requestingUserRole: string
  ): Promise<{
    id: string;
    firstName: string;
    lastName: string;
    bio?: string | undefined;
    avatar: string | null;
    phoneNumber: string | null;
    dateOfBirth?: Date | undefined;
    address?: ProfileData["address"] | undefined;
    preferences?: ProfileData["preferences"] | undefined;
    socialLinks?: ProfileData["socialLinks"] | undefined;
    isOnboarded: boolean | null;
    createdAt: Date;
    updatedAt: Date;
  }> {
    // Users can only update their own profile, admins can update any profile
    if (userId !== requestingUserId && requestingUserRole !== "admin") {
      throw new UnauthorizedException("Access denied");
    }

    type UserNameOnly = { user_name: string | null };
    const user = (await this.prisma.user_table.findUnique({
      where: { id: userId },
      select: { user_name: true },
    })) as UserNameOnly | null;

    if (!user) {
      throw new NotFoundException("Profile not found");
    }

    // Prepare update data
    const updateData: Prisma.user_tableUpdateInput = {
      user_updated_at: new Date(),
    };

    if (profileData.firstName || profileData.lastName) {
      const { first: currentFirst, last: currentLast } = this.splitNameSafely(
        user.user_name
      );
      const firstName = profileData.firstName ?? currentFirst;
      const lastName = profileData.lastName ?? currentLast;
      updateData.user_name = `${firstName} ${lastName}`.trim();
    }

    if (profileData.phoneNumber !== undefined) {
      updateData.user_phone_number = profileData.phoneNumber;
    }

    if (profileData.avatar !== undefined) {
      updateData.user_image = profileData.avatar;
    }

    type UserSelected = {
      id: string;
      user_name: string | null;
      user_phone_number: string | null;
      user_image: string | null;
      user_is_onboarded: boolean | null;
      user_created_at: Date;
      user_updated_at: Date;
    };

    const updatedUser = (await this.prisma.user_table.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        user_name: true,
        user_phone_number: true,
        user_image: true,
        user_is_onboarded: true,
        user_created_at: true,
        user_updated_at: true,
      },
    })) as UserSelected;

    const { first: updatedFirst, last: updatedLast } = this.splitNameSafely(
      updatedUser.user_name
    );

    return {
      id: updatedUser.id,
      firstName: profileData.firstName ?? updatedFirst,
      lastName: profileData.lastName ?? updatedLast,
      bio: profileData.bio,
      avatar: updatedUser.user_image,
      phoneNumber: updatedUser.user_phone_number,
      dateOfBirth: profileData.dateOfBirth,
      address: profileData.address,
      preferences: profileData.preferences,
      socialLinks: profileData.socialLinks,
      isOnboarded: updatedUser.user_is_onboarded,
      createdAt: updatedUser.user_created_at,
      updatedAt: updatedUser.user_updated_at,
    };
  }

  public async deleteProfile(
    userId: string,
    requestingUserId: string,
    requestingUserRole: string
  ): Promise<{ id: string; message: string; deletedAt: Date }> {
    // Users can only delete their own profile, admins can delete any profile
    if (userId !== requestingUserId && requestingUserRole !== "admin") {
      throw new UnauthorizedException("Access denied");
    }

    const user = await this.prisma.user_table.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException("Profile not found");
    }

    // Soft delete by setting banned status
    const deletedUser = await this.prisma.user_table.update({
      where: { id: userId },
      data: {
        user_banned: true,
        user_ban_reason: "Profile deleted by user",
        user_updated_at: new Date(),
      },
    });

    return {
      id: deletedUser.id,
      message: "Profile deleted successfully",
      deletedAt: deletedUser.user_updated_at,
    };
  }

  public async getAllProfiles(
    requestingUserId: string,
    requestingUserRole: string
  ): Promise<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string | null;
      avatar: string | null;
      role: string | null;
      isOnboarded: boolean | null;
      isBanned: boolean | null;
      createdAt: Date;
      updatedAt: Date;
    }>
  > {
    // Only admins can access all profiles
    if (requestingUserRole !== "admin") {
      throw new UnauthorizedException("Admin access required");
    }

    const users = await this.prisma.user_table.findMany({
      select: {
        id: true,
        user_name: true,
        user_email: true,
        user_phone_number: true,
        user_image: true,
        user_role: true,
        user_is_onboarded: true,
        user_banned: true,
        user_created_at: true,
        user_updated_at: true,
      },
      orderBy: { user_created_at: "desc" },
    });

    return users.map((user) => {
      const { first, last } = this.splitNameSafely(user.user_name);
      return {
        id: user.id,
        firstName: first,
        lastName: last,
        email: user.user_email,
        phoneNumber: user.user_phone_number,
        avatar: user.user_image,
        role: user.user_role,
        isOnboarded: user.user_is_onboarded,
        isBanned: user.user_banned,
        createdAt: user.user_created_at,
        updatedAt: user.user_updated_at,
      };
    });
  }

  public async searchProfiles(
    searchTerm: string,
    requestingUserId: string,
    requestingUserRole: string
  ): Promise<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string | null;
      avatar: string | null;
      role: string | null;
      isOnboarded: boolean | null;
      isBanned: boolean | null;
      createdAt: Date;
      updatedAt: Date;
    }>
  > {
    // Only admins can search profiles
    if (requestingUserRole !== "admin") {
      throw new UnauthorizedException("Admin access required");
    }

    const users = await this.prisma.user_table.findMany({
      where: {
        OR: [
          { user_name: { contains: searchTerm, mode: "insensitive" } },
          { user_email: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        user_name: true,
        user_email: true,
        user_phone_number: true,
        user_image: true,
        user_role: true,
        user_is_onboarded: true,
        user_banned: true,
        user_created_at: true,
        user_updated_at: true,
      },
      orderBy: { user_created_at: "desc" },
    });

    return users.map((user) => {
      const { first, last } = this.splitNameSafely(user.user_name);
      return {
        id: user.id,
        firstName: first,
        lastName: last,
        email: user.user_email,
        phoneNumber: user.user_phone_number,
        avatar: user.user_image,
        role: user.user_role,
        isOnboarded: user.user_is_onboarded,
        isBanned: user.user_banned,
        createdAt: user.user_created_at,
        updatedAt: user.user_updated_at,
      };
    });
  }

  private splitNameSafely(fullName: string | null): {
    first: string;
    last: string;
  } {
    if (!fullName) {
      return { first: "", last: "" };
    }
    const parts = fullName.trim().split(" ");
    const first = parts[0] ?? "";
    const last = parts.slice(1).join(" ") ?? "";
    return { first, last };
  }
}
