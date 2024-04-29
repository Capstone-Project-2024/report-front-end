import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AptServiceService } from '../apt-service.service';

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

  constructor(private http: HttpClient, public loginService: AptServiceService) {}

  onLogin(): void {
    this.http.post('/api/login', { username: this.username, password: this.password }).subscribe(response => {
      console.log(response, "login successful");
      //console.log("User: ", this.username, "Pass: ", this.password);
      this.loginService.logginupdate(true);
      this.loginService.updateUsrName(this.username);
      alert("Success: You Have Been Logged In!");
    })   
  }

}
