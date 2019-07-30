import { Test, TestingModule } from '@nestjs/testing';

import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

describe('Characters Controller', () => {
  let charactersController: CharactersController;

  beforeEach(async () => {
    const characters: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [CharactersService]
    }).compile();

    charactersController = characters.get<CharactersController>(CharactersController);
  });

  describe('Characters list', () => {
    it('Should return a list with all of house characters', () => {
      expect(charactersController.findOne('1')).toMatchObject([
        {"id": 1, "name": "Daenerys Targaryen"}, {"id": 2, "name": "Aemon"}, {"id": 3, "name": "Aemma Arryn"}
      ])
    });
  });
});