import { Component, OnInit, Input } from '@angular/core';
import { Truck } from '../truck';
@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {
  @Input() truck: Truck;
  constructor() { }

  ngOnInit() {
  }

}
