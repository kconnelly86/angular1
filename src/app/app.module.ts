import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TrucksDetailComponent } from './trucks-detail/trucks-detail.component';
import { TruckService } from './truck.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    TrucksComponent,
    TrucksDetailComponent,
    MessagesComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    

  ],
  providers: [TruckService,MessagesComponent,MessageService],

  bootstrap: [AppComponent]
})
export class AppModule { }
