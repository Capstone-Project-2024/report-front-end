import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Capstone-Project';
  accountData: any[] = [];
  cryptoData: any[] = [];
  coinSymbol: string = null;

  coinName: string = null;
  coinPriceUsd: string | null = null;
  circulatingSupply: string | null = null;
  maxSupply: string | null = null;
  marketCapUsd: string | null = null;
  percentHour: string | null = null;
  percentWeek: string | null = null;
  percentDay: string | null = null;
  totalSupply: string | null = null;
  coinRank: string | null = null;

  currentCoinSymbol: string = '';

  // image = "assets/CapstoneBackground.png";
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchCryptoData();

    this.dataService.getAccountData().subscribe({
      next: (data) => {
        //console.log(data),
        this.accountData = data
      },
      error: (error) => console.error('There was an error!', error)
    })
  }

  fetchCryptoData() {
    this.dataService.getCryptoApiData().subscribe({
      next: (data) => {
        const coinData = data.data.find(crypto => crypto.symbol.toUpperCase() === this.currentCoinSymbol.toUpperCase());
        if (coinData) {
          console.log(coinData);
          this.coinName = coinData.name;
          this.coinPriceUsd = coinData.price_usd;
          this.circulatingSupply = coinData.csupply;
          this.maxSupply = coinData.msupply;
          this.marketCapUsd = coinData.market_cap_usd;
          this.percentHour = coinData.percent_change_1h;
          this.percentWeek = coinData.percent_change_7d;
          this.percentDay = coinData.percent_change_24h;
          this.totalSupply = coinData.tsupply;
          this.coinRank = coinData.rank;

        } else {
          this.coinPriceUsd = 'Symbol not found';
        }
      }
    })
  }

}
