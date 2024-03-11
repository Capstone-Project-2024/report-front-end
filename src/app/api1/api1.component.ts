import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css'
})
export class API1Component {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
