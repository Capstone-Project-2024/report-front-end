import { Component, Directive, HostListener } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';

import { CoinloreHistory } from '../history/coinloreHistory.model';
import { AptServiceService } from '../apt-service.service';

@Component({
  selector: 'app-coinlore',
  templateUrl: './coinlore.component.html',
  styleUrls: ['./coinlore.component.css']
})

export class coinloreComponent {
  coinData: any[] = [];

  currentCoinSymbol: string = '';
  selectedCoinDetails: any = null;

  displayedColumns: string[] = ['rank', 'name', 'symbol', 'price_usd', 'csupply', 'msupply', 'market_cap_usd', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'tsupply'];

  dataSource = new MatTableDataSource<any>([]);

  constructor(private dataService: DataService, public coinService: AptServiceService) { }

  ngOnInit() {
    this.fetchCryptoData();
  }

  fetchCryptoData() {
    this.dataService.getCryptoApiData().subscribe({
      next: (data) => {
        this.coinData = data.data;
        this.currentCoinSymbol = 'ALL_COINS';
        this.onCryptoSelect();
        this.dataSource = new MatTableDataSource<any>(this.coinData);

        const coin: CoinloreHistory= {rank: data.rank, name: data.name, 
          symbol: data.symbol, price_usd: data.price_usd, 
          csupply: data.csupply, msupply: data.msupply, 
          market_cap_usd: data.market_cap_usd, percent_change_1h: data.percent_change_1h, 
          percent_change_24h: data.percent_change_24h, percent_change_7d: data.percent_change_7d, 
          tsupply:  data.tsupply};
          
          // this.coinService.addCoin(data.rank, data.name, data.symbol,data.price_usd, data.csupply, 
          // data.msupply, data.market_cap_usd, data.percent_change_1h, data.percent_change_24h, data.percent_change_7d, data.tsupply);
          // console.log("Coin Testing", data.old_currency,data.old_amount, data.new_currency, data.new_amount);
          // console.log("Type Check: ", typeof data.rank);
          const newData = [...this.dataSource.data];
          this.dataSource.data = newData;
    
      },
      error: (err) => console.error(err)
    })
  }

  onCryptoSelect() {
    if (this.currentCoinSymbol === 'ALL_COINS') {
      this.dataSource.data = this.coinData;
    } else if (this.currentCoinSymbol) {
      const selectedCoin = this.coinData.find(coin => coin.symbol === this.currentCoinSymbol);
      this.dataSource.data = selectedCoin ? [selectedCoin] : [];
      // console.log("ElseIf:" ,selectedCoin)

      //Coinlore History
      this.coinService.addCoin( selectedCoin.rank, selectedCoin.name, selectedCoin.symbol,selectedCoin.price_usd, selectedCoin.csupply, 
        selectedCoin.msupply, selectedCoin.market_cap_usd, selectedCoin.percent_change_1h, selectedCoin.percent_change_24h, selectedCoin.percent_change_7d, selectedCoin.tsupply);
        // console.log("Coin Testing", selectedCoin.rank, selectedCoin.name, selectedCoin.symbol,selectedCoin.price_usd, selectedCoin.csupply, selectedCoin.msupply, selectedCoin.market_cap_usd, selectedCoin.percent_change_1h, selectedCoin.percent_change_24h, selectedCoin.percent_change_7d, selectedCoin.tsupply);
        // console.log("Type Check: ", typeof selectedCoin.csupply);
    } else {
      this.dataSource.data = [];
    }
  }

}
