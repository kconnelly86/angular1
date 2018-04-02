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

truck: Truck = {
  id: 1,
  name: 'Central BBQ'
};
  constructor() { }

  ngOnInit() {
  }

}
