import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AptServiceService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string = '';
  loginSuccess = false;

  constructor(private http: HttpClient, public loginService: AptServiceService) {}

  onLogin(): void {
    this.http.post('/api/login', { username: this.username, password: this.password })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = "Incorrect login information. Please try again.";
          return throwError(() => new Error('Login failed'));
        })
      )
      .subscribe({
        next: (response) => {
          console.log("Login successful", response);
          this.loginSuccess = true;
          this.loginService.logginupdate(true);
          this.loginService.updateUsrName(this.username);
          this.errorMessage = '';
        },
        error: (error) => {
          console.error("Login error: ", error);
          this.loginSuccess = false;
        }
      });
  }
}
