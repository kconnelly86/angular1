import { Injectable } from '@angular/core';
import { Truck } from './truck';
import { TRUCKS } from './mock-trucks';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class TruckService {

  constructor() { }
  getTrucks(): Observable<Truck[]> {
    return of(TRUCKS);
  }
  }

