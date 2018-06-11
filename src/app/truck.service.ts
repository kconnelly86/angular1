import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Truck } from './truck';
import { TRUCKS } from './mock-trucks';
import { of } from 'rxjs/observable/of';

@Injectable()

export class TruckService {

  constructor() { }
  getTrucks(): Observable<Truck[]> {
    return of(TRUCKS);
  }
  }

