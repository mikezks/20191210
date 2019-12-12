import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
   imports: [
      BrowserModule,
      CoreModule,
      //FlightBookingModule,
      SharedModule,
      RouterModule.forRoot(ROUTES)
   ],
   declarations: [
      AppComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
