import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HousesController } from './houses/houses.controller';
import { HousesService } from './houses/houses.service'; 

@Module({
  imports: [],
  controllers: [AppController, HousesController],
  providers: [AppService, HousesService],
})
export class AppModule {}
