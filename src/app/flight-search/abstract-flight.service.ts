import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { HttpClient } from '@angular/common/http';

@Injectable(/* {
  providedIn: 'root',
  useClass: DefaultFlightService,
  deps: [HttpClient]
} */)
export abstract class AbstractFlightService {

  flights: Flight[];

  abstract find(from: string, to: string): Observable<Flight[]>;

}
