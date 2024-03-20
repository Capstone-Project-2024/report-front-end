import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  onRegister(): void {
    if (this.user.password === this.confirmPassword) {
      this.http.post('/api/register', this.user).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Redirect to login or other actions
        },
        error: (error) => {
          console.error('Registration failed', error);
        }
      });
    } else {
      console.error('Passwords do not match');
      // Handle passwords not matching case
    }
  }
}
