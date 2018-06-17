import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  trucks: Truck[] = [];
 
  constructor(private truckService: TruckService) { }
 
  ngOnInit() {
    this.getTrucks();
  }
 
  getTrucks(): void {
    this.truckService.getTrucks()
      .subscribe(trucks => this.trucks = trucks.slice(1, 5));
  }
}
