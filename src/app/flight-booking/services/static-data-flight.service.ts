import { Injectable } from '@angular/core';
import { AbstractFlightService } from './abstract-flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticDataFlightService implements AbstractFlightService {
  flights: Flight[] = [];

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 9999,
        from: 'Graz',
        to: 'Hamburg',
        date: (new Date()).toISOString(),
        delayed: false
      }
    ])
    .pipe(
      tap(flights => this.flights = flights)
    );
  }
}
