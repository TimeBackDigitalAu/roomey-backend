import { Module } from "@nestjs/common";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { ApiModule } from "./api/api.module";
import { auth } from "./lib/auth";

@Module({
  imports: [ApiModule, AuthModule.forRoot(auth)],
  controllers: [],
  providers: [],
})
export class AppModule {}
