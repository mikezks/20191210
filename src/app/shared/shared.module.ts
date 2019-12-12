import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule } from '@angular/forms';
import { CityValidatorDirective } from './validation/city-validator.directive';

@NgModule({
  declarations: [
    CityPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CityPipe,
    CityValidatorDirective,
    FormsModule
  ]
})
export class SharedModule { }
