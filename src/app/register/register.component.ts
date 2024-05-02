import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      return; // Stops the function if form is invalid
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.registerForm.controls['confirmPassword'].setErrors({ mismatch: true });
      return;
    }

    this.http.post('/api/register', this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Redirect or other actions
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}