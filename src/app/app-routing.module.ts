import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './post/home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { coinloreComponent } from './coinlore/coinlore.component';
import { CurrencyComponent } from './Currency/Currency.component';
import { StockDataComponent } from './StockData/StockData.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", component:homeComponent},
  {path:"register", component:RegisterComponent },
  {path:"contactus", component:FormComponent},
  {path:"price", component:PricingComponent},
  {path:"login", component:LoginComponent},
  {path:"coinlore", component:coinloreComponent},
  {path:"currency", component:CurrencyComponent},
  {path:"stockdata", component:StockDataComponent},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
