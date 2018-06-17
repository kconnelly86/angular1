import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrucksComponent} from './trucks/trucks.component';

const routes: Routes = [
  { path: 'trucks', component: TrucksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
