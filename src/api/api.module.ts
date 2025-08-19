import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ImageModule } from "./image/image.module";
import { PlanModule } from "./plan/plan.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [AuthModule, ImageModule, UserModule, PlanModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
