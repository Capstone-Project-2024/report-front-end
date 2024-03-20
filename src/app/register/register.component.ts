import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class registerComponent {
  username: string;
  password: string;
  firstname: string;
  lastname: string;

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required]);
}
