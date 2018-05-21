import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TrucksComponent,
    TrucksDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
