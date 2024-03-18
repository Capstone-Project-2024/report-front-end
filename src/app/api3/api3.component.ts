import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-api3',
  templateUrl: './api3.component.html',
  styleUrl: './api3.component.css'
})
export class API3Component {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
