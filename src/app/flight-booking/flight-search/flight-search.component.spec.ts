import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FlightSearchComponent } from './flight-search.component';
import { SharedModule } from '../../shared/shared.module';
import { FlightBookingModule } from '../flight-booking.module';
import { CoreModule } from 'src/app/core/core.module';
import { AbstractFlightService } from '../services/abstract-flight.service';
import { DefaultFlightService } from '../services/default-flight.service';
import { By } from '@angular/platform-browser';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        FlightBookingModule,
        SharedModule
      ],
      providers: [{
        provide: AbstractFlightService,
        useClass: DefaultFlightService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should not have any flights loaded initially', () => { 
    expect(component.flights.length).toBe(0);
  });

  it('should have a disabled search button w/o params', fakeAsync(() => {
    tick();
  
    // Get input field for from
    const from = fixture
      .debugElement
      .query(By.css('input[name=from]'))
      .nativeElement;
  
    from.value = '';
    from.dispatchEvent(new Event('input'));
  
    // Get input field for to
    const to = fixture
      .debugElement
      .query(By.css('input[name=to]'))
      .nativeElement;
  
    to.value = '';
    to.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
    tick();
      
    // Get disabled
    const disabled = fixture
      .debugElement
      .query(By.css('button'))
      .properties['disabled'];
    
    expect(disabled).toBeTruthy();  
  }));
});
