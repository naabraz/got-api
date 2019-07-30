import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HousesController } from './houses/houses.controller';
import { HousesService } from './houses/houses.service'; 
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';

@Module({
  imports: [],
  controllers: [AppController, HousesController, CharactersController],
  providers: [AppService, HousesService, CharactersService],
})
export class AppModule {}
