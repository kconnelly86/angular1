import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TRUCKS } from '../mock-trucks';
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
trucks = TRUCKS;

selectedTruck: Truck;

  constructor() { }

  ngOnInit() {
  }
onSelect(truck: Truck): void {
  this.selectedTruck = truck;
}
}
