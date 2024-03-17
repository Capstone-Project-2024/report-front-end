import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrl: './api2.component.css'
})
export class API2Component {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
