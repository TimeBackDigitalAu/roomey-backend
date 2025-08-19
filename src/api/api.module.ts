import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { HealthModule } from './health/health.module';
import { ListingsModule } from './listings/listings.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, EmailModule, ListingsModule, ProfileModule, HealthModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
