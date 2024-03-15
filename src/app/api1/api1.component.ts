import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class API1Component {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  coinData: any[] = [];
  selectedCoinDetails: any = null;


  currentCoinSymbol: string = '';
  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchCryptoData();
  }

  fetchCryptoData() {
    this.dataService.getCryptoApiData().subscribe({
      next: (data) => {
        this.coinData = data;

        // const coinData = data.data.find(crypto => crypto.symbol.toUpperCase() === this.currentCoinSymbol.toUpperCase());
        // if (coinData) {
        //   console.log(coinData);
        //   return coinData;
        // } else {
          
        // }
      }
    })
  }

  onCryptoSelect() {
    this.selectedCoinDetails = this.coinData.find(crypto => 
      crypto.symbol === this.currentCoinSymbol)
  }

}
