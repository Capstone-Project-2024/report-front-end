import { Component, Input } from '@angular/core';
import { CurrHistory } from '../../history/CurrencyHistory.model';
import { AptServiceService } from '../../apt-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showFiller = false;
  image ="../../assets/CapstoneBackground.png";
  constructor(public logginService: AptServiceService){}
  Loggingout(){
    this.logginService.logginupdate(false);
  }
}
