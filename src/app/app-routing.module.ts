import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostTestComponent } from './post/post-test/post-test.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { API1Component } from './api1/api1.component';


const routes: Routes = [
  {path:"", component:PostTestComponent},
  {path:"input", component:InputComponent },
  {path:"contactus", component:FormComponent},
  {path:"price", component:PricingComponent},
  {path:"login", component:LoginComponent},
  {path:"api1", component:API1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
