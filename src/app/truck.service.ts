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
    this.messageService.add('TruckService: fetched trucks');
    return of(TRUCKS);
  }
  getTruck(id: number): Observable<Truck> {
    // TODO: send the message _after_ fetching the truck
    this.messageService.add(`TruckService: fetched truck id=${id}`);
    return of(TRUCKS.find(truck => truck.id === id));
  }
  }

