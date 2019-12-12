import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from 'src/app/shared/validation/validate-city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [1],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]
      ],
      to: [
        'Hamburg',
        validateCityWithParams([
          'Wien',
          'Berlin'
        ])
      ],
      date: [ (new Date()).toISOString() ]
    });

    this.route.paramMap
    .subscribe(
      params => {
        this.id = +params.get('id');
        this.editForm.get('id').setValue(this.id);
      }
    );

    this.editForm.patchValue({
      from: 'Wien',
      to: 'Berlin'
    });

    this.editForm.valueChanges
      .subscribe(console.log);
  }

  save(): void {
    console.log('form value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }


}
