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
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit',
        component: FlightEditComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
