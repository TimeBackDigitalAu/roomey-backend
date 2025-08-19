import { Module } from '@nestjs/common';
import { TwilioService } from './twillio';

@Module({
  providers: [TwilioService],
  exports: [TwilioService],
})
export class TwilioModule {}
