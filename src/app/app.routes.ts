import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        /* data: {
            label: 'Home'
        } */
    },
    {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.module')
            .then(m => m.FlightBookingModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
