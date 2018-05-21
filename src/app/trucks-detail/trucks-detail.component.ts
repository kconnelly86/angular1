import { Component, OnInit, Input } from '@angular/core';
import {Truck} from '../truck';
@Component({
  selector: 'app-trucks-detail',
  templateUrl: './trucks-detail.component.html',
  styleUrls: ['./trucks-detail.component.css']
})
export class TrucksDetailComponent implements OnInit {
  @Input() truck: Truck;
  constructor() { }

  ngOnInit() {
  }

}
