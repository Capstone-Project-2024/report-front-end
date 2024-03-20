import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  onLogin(): void {
    this.http.post('/api/login', { username: this.username, password: this.password }).subscribe(response => {
      console.log(response, "login successful");
    })
  }

}
