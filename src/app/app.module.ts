import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { AbstractFlightService } from './flight-search/abstract-flight.service';
import { DefaultFlightService } from './flight-search/default-flight.service';
import { StaticDataFlightService } from './flight-search/static-data-flight.service';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent
   ],
   providers: [
      { provide: AbstractFlightService, useClass: DefaultFlightService }
      /* { provide: AbstractFlightService, useClass: StaticDataFlightService } */
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
