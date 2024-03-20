import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTestComponent } from './post/post-test/post-test.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { coinloreComponent } from './coinlore/coinlore.component';
import { API2Component } from './api2/api2.component';
import { API3Component } from './api3/api3.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:PostTestComponent},
  {path:"register", component:RegisterComponent },
  {path:"contactus", component:FormComponent},
  {path:"price", component:PricingComponent},
  {path:"login", component:LoginComponent},
  {path:"coinlore", component:coinloreComponent},
  {path:"api2", component:API2Component},
  {path:"api3", component:API3Component},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
