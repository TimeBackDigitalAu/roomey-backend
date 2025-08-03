import { Controller, Post, Session } from "@nestjs/common";
import { UserSession } from "@thallesp/nestjs-better-auth";

@Controller("auth")
export class AuthController {
  @Post("get-session")
  getSession(@Session() session: UserSession) {
    return session;
  }
}
