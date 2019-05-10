import { Module } from '@nestjs/common';

import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';

@Module({
  imports: [],
  controllers: [HousesController],
  providers: [HousesService]
})

export class HousesModule {}