import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Session,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard, UserSession } from "@thallesp/nestjs-better-auth";
import { OnboardingGuard } from "src/guard/onboarding/onboarding.guard";
import { OnboardingDto, UserListDto } from "./dto/user.schema";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserList(@Query() query: UserListDto) {
    try {
      const userList = await this.userService.getUserList(query);
      return userList;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post("onboarding")
  @UseGuards(OnboardingGuard)
  async onboarding(
    @Body() onboardDto: OnboardingDto,
    @Session() session: UserSession
  ) {
    try {
      const user = await this.userService.onboarding(
        onboardDto,
        session.user.id
      );
      return { user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
