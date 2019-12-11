import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable(/* {
  providedIn: 'root',
  useClass: DefaultFlightService,
  deps: [HttpClient]
} */)
export abstract class AbstractFlightService {

  flights: Flight[];

  abstract find(from: string, to: string): Observable<Flight[]>;

}
