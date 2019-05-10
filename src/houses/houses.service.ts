import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  getHouses(): Array<string> {
    return ['Targaryen', 'Stark', 'Lannister']
  }
}