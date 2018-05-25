import { Injectable } from '@angular/core';
import { Truck } from './truck';
import { TRUCKS } from './mock-trucks';

@Injectable()

export class TruckService {

  constructor() { }
  getTrucks(): Truck[] {
    return TRUCKS;
  }
}
