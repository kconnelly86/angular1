import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})

export class TrucksComponent implements OnInit {

selectedTruck: Truck; 

trucks: Truck[];

  constructor(private truckService: TruckService) { }

  ngOnInit() {
     this.getTrucks();
  }
onSelect(truck: Truck): void {
  this.selectedTruck = truck;
}
getTrucks(): void {
  this.trucks = this.truckService.getTrucks();
}
}
