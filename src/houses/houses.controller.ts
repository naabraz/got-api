import { Controller, Get } from '@nestjs/common';

import { HousesService } from './houses.service';

@Controller()
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Get('houses')
  getHouses(): Array<string> {
    return this.housesService.getHouses();
  }
}