import { Component, Directive, HostListener } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private dataService: DataService) { }

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
      console.log(selectedCoin)
    } else {
      this.dataSource.data = [];
    }
  }

}
