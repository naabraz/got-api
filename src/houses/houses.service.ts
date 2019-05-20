import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  getHouses(): Array<Object> {
    return [
      { id: 1, name: 'Targaryen'}, 
      { id: 2, name: 'Stark' }, 
      { id: 3, name: 'Lannister'}
    ]
  }
}