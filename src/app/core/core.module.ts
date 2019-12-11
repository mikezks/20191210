import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AbstractFlightService } from '../flight-booking/services/abstract-flight.service';
import { DefaultFlightService } from '../flight-booking/services/default-flight.service';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
     { provide: AbstractFlightService, useClass: DefaultFlightService }
     /* { provide: AbstractFlightService, useClass: StaticDataFlightService }  */
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
