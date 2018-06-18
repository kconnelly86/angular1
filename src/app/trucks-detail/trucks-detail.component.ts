import { Component, OnInit, Input } from '@angular/core';
import {Truck} from '../truck';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TruckService }  from '../truck.service';
@Component({
  selector: 'app-trucks-detail',
  templateUrl: './trucks-detail.component.html',
  styleUrls: ['./trucks-detail.component.css']
})
export class TrucksDetailComponent implements OnInit {
  @Input() truck: Truck;
  constructor(
    private route: ActivatedRoute,
    private truckService: TruckService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getTruck();
  }
 
  getTruck(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.truckService.getTruck(id)
      .subscribe(truck => this.truck = truck);
  }

}
