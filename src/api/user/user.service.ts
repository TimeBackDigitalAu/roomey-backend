import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/client";
import { formatElapsedTime } from "src/lib/helper";
import { prisma } from "src/lib/prisma/prisma";
import { OnboardingDto, UserListDto } from "./dto/user.schema";

@Injectable()
export class UserService {
  async getUserList(query: UserListDto) {
    const {
      page,
      take,
      search,
      startDate,
      endDate,
      orderBy,
      orderByDirection,
    } = query;

    const offset = Number(page - 1) * Number(take);

    let where: Prisma.user_tableWhereInput = {};

    const filterMap: Record<string, () => Prisma.user_tableWhereInput> = {
      search: () => ({
        OR: [
          { user_first_name: { contains: search!, mode: "insensitive" } },
          { user_last_name: { contains: search!, mode: "insensitive" } },
          { user_email: { contains: search!, mode: "insensitive" } },
        ],
      }),
      dateRange: () => ({
        user_created_at: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      }),
    };

    Object.entries({
      search: !!search,
      dateRange: startDate && endDate,
    }).forEach(([key, shouldAdd]) => {
      if (shouldAdd) {
        where = { ...where, ...filterMap[key]() };
      }
    });

    const queryBuilder: Prisma.user_tableFindManyArgs = {
      skip: offset,
      take: Number(take),
      select: {
        id: true,
        user_name: true,
        user_email: true,
        user_created_at: true,
        user_role: true,
        user_last_login_at: true,
        user_is_active: true,
        user_ban_expires: true,
      },
      where,
      ...(orderBy && {
        orderBy: {
          [orderBy]:
            orderByDirection?.toLowerCase() === "desc" ? "desc" : "asc",
        },
      }),
    };

    const [userList, total] = await Promise.all([
      prisma.user_table.findMany(queryBuilder),
      prisma.user_table.count({ where }),
    ]);

    const formatteduserList = userList.map((user) => ({
      ...user,
      user_last_login_at: user.user_last_login_at
        ? formatElapsedTime(
            new Date().getTime() - new Date(user.user_last_login_at).getTime()
          )
        : "Inactive",
    }));

    return { data: formatteduserList, total };
  }

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
          create: {
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

    // await auth.api.refreshToken({
    //   query: {
    //     userId,
    //   },
    //   body: {
    //     providerId: user.user_account_tables[0].user_account_provider_id,
    //     accountId: user.user_account_tables[0].user_account_account_id,
    //     userId: userId,
    //   },
    // });
    return user;
  }
}
