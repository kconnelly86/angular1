import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Truck } from './truck';
import { TRUCKS } from './mock-trucks';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()

export class TruckService {

  constructor(private messageService: MessageService) { }
  getTrucks(): Observable<Truck[]> {
    return of(TRUCKS);
  }
  }

