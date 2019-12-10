import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

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

  get flights() {
    return this.flightService.flights;
  }

  constructor(private flightService: FlightService) { }

  ngOnInit() {

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
