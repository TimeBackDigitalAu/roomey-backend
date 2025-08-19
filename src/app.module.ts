import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { ApiModule } from './api/api.module';
import { appConfigSchema } from './config/app-config';
import { auth } from './lib/auth/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: (env) => appConfigSchema.parse(env),
    }),
    ApiModule,
    AuthModule.forRoot(auth),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
