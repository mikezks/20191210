import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { AbstractFlightService } from './abstract-flight.service';
import { Observable, of, timer, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Graz';
  to = 'Hamburg';
  selectedFlight: Flight;
  //flights: Flight[] = [];

  passengers = [{
    id: 2,
    firstname: 'Peter',
    lastname: 'Huber'
  }];

  passengers$: Observable<any>;

  timer$: Observable<number>;

  get flights() {
    return this.flightService.flights;
  }

  constructor(private flightService: AbstractFlightService) { }

  ngOnInit() {
    /* this.passengers$ = of(this.passengers);
    this.timer$ = timer(0, 1000)
      .pipe(
        tap(console.log)
      ); */
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        //flights => this.flights = flights,
        //err => console.error('Error on loading flights', err)        
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = 
      this.selectedFlight === flight ?
      null :
      flight;
  }
}
