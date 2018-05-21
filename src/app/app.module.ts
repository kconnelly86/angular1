import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TrucksComponent,
    TruckDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
