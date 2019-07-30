import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getCharacters(id): Array<Object> {
    return this.getHouseCharacters(id);
  }

  getHouseCharacters(id): Array<Object> {
    const characters = {
      1: [
        { 
          id: 1, 
          name: 'Daenerys Targaryen'
        },
        { 
          id: 2, 
          name: 'Aemon'
        },
        {
          id: 3,
          name: 'Aemma Arryn'
        }
      ],
      2: [
        {
          id: 1,
          name: 'Brandon Snow'
        },
        {
          id: 2,
          name: 'Brandon Stark (the Builder)'
        },
        {
          id: 3,
          name: 'Arya Stark'
        }
      ]
    }

    return characters[id]
  }
}