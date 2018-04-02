import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
truck: Truck = {
  id: 1,
  name: 'Central BBQ'
};
  constructor() { }

  ngOnInit() {
  }

}
