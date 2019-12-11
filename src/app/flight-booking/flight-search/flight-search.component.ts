import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { AbstractFlightService } from '../services/abstract-flight.service';
import { Observable, timer, of } from 'rxjs';
import { tap, share, delay, startWith, map, debounceTime, observeOn, shareReplay } from 'rxjs/operators';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Graz';
  to = 'Hamburg';
  selectedFlight: Flight;

  basket: object = {
    "2": true,
    "5": true
  };

  //flights: Flight[] = [];
  /* showTimer: boolean;

  passengers = [{
    id: 2,
    firstname: 'Peter',
    lastname: 'Huber'
  }];

  passengers$: Observable<any>;

  timer$: Observable<number>;
 */
  get flights() {
    return this.flightService.flights;
  }

  constructor(private flightService: AbstractFlightService) { }

  ngOnInit() {
    /* this.passengers$ = of(this.passengers);
    this.timer$ = timer(0, 5000)
      .pipe(
        tap(console.log),
        //share()
        shareReplay(1)
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
