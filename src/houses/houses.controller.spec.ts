import { Test, TestingModule } from '@nestjs/testing';

import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';

describe('Houses Controller', () => {
  let housesController: HousesController;

  beforeEach(async () => {
    const houses: TestingModule = await Test.createTestingModule({
      controllers: [HousesController],
      providers: [HousesService]
    }).compile();

    housesController = houses.get<HousesController>(HousesController);
  });

  describe('Houses list', () => {
    it('Should return a list with all of Game of Thrones houses', () => {
      expect(housesController.getHouses()).toMatchObject(['Targaryen', 'Stark', 'Lannister'])
    });
  });
});