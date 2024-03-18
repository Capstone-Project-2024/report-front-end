import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTestComponent } from './post/post-test/post-test.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { API1Component } from './api1/api1.component';
import { API2Component } from './api2/api2.component';
import { API3Component } from './api3/api3.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:PostTestComponent},
  {path:"input", component:InputComponent },
  {path:"contactus", component:FormComponent},
  {path:"price", component:PricingComponent},
  {path:"login", component:LoginComponent},
  {path:"api1", component:API1Component},
  {path:"api2", component:API2Component},
  {path:"api3", component:API3Component},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
