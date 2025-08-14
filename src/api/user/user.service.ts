import { Injectable } from "@nestjs/common";
import { auth } from "src/lib/auth/auth";
import { prisma } from "src/lib/prisma/prisma";
import { OnboardingDto } from "./dto/user.schema";

@Injectable()
export class UserService {
  async onboarding(onboardDto: OnboardingDto, userId: string) {
    const user = await prisma.user_table.update({
      where: {
        id: userId,
      },
      data: {
        user_role: onboardDto.role,
        user_is_onboarded: true,
        user_image: onboardDto.profilePhoto,
        user_profile_table: {
          connect: {
            user_profile_user_id: userId,
            user_profile_allow_marketing: onboardDto.allowMarketing,
            user_profile_allow_verification: onboardDto.allowVerification,
          },
        },
      },
      select: {
        user_account_tables: {
          select: {
            user_account_account_id: true,
            user_account_provider_id: true,
          },
        },
      },
    });

    await auth.api.refreshToken({
      query: {
        userId,
      },
      body: {
        providerId: user.user_account_tables[0].user_account_provider_id,
        accountId: user.user_account_tables[0].user_account_account_id,
        userId: userId,
      },
    });
    return user;
  }
}
