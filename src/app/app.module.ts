import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbstractFlightService } from './flight-booking/services/abstract-flight.service';
import { StaticDataFlightService } from './flight-booking/services/static-data-flight.service';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightBookingModule,
      SharedModule      
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent
   ],
   providers: [
      /* { provide: AbstractFlightService, useClass: DefaultFlightService } */
      { provide: AbstractFlightService, useClass: StaticDataFlightService } 
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
