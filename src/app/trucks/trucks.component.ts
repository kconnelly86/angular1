import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})

export class TrucksComponent implements OnInit {

trucks: Truck[];

  constructor(private truckService: TruckService) { }

  ngOnInit() {
     this.getTrucks();
  }
getTrucks(): void {
  this.truckService.getTrucks()
      .subscribe(trucks => this.trucks = trucks);
} 
}
