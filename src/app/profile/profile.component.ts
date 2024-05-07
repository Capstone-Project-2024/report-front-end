import { Component, OnInit, OnDestroy,} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { AptServiceService } from '../api.service';
import { CurrHistory } from '../history/CurrencyHistory.model';
import { CoinloreHistory } from '../history/coinloreHistory.model';
import { StockDataHistory } from '../history/stockDataHistory.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy{
  loggedin = false;
  usr = "";
  wanted_currency: string;
  starting_currency: string;
  currency_amount: string;

  rank: string; 
  symbol: string; 
  price_usd: string; 
  csupply: string;
  msupply: string; 
  market_cap_usd: string;
  percent_change_1h: string; 
  percent_change_24h: string;
  percent_change_7d: number; 
  tsupply: number;
  
  name: string;
  price: number;
  ticker: string;

  displayedResponseCoin: string[] = ['rank', 'name', 'symbol', 'price_usd', 'csupply', 'msupply', 'market_cap_usd', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'tsupply'];
  displayedResponseCurr: string[] = ['old_currency', 'old_amount',  'new_currency', 'new_amount' ];
  displayedResponseStock: string[] = ['ticker', 'name',  'price'];

  coinSource= new MatTableDataSource<any>([]);
  coinHist: CoinloreHistory [] = [];
  private coinSub: Subscription;

  currSource= new MatTableDataSource<any>([]);
  currhist: CurrHistory [] = [];
  private currSub: Subscription;

  stockSource = new MatTableDataSource<any>([]);
  stockHist: StockDataHistory [] = [];
  private stockSub: Subscription;

  constructor(public currService: AptServiceService, public coinService: AptServiceService, public stockService: AptServiceService){}

  ngOnInit(){
    this.coinHist = this.coinService.getCoin();
    this.coinSub = this.coinService.getCoinUpdateListener().subscribe((coinHist : CoinloreHistory[])=>{
      this. coinHist = coinHist;
    });
    this.loggedin = this.coinService.logginauth()
    this.usr = this.coinService.getUsrName();

    this.currhist = this.currService.getCurrs();
    this.currSub = this.currService.getCurrUpdateListener().subscribe((currhist : CurrHistory[])=>{
      this.currhist = currhist;
    });
    this.loggedin = this.currService.logginauth()
    this.usr = this.currService.getUsrName();

    this.stockHist = this.stockService.getStocks();
    this.stockSub = this.stockService.getStockUpdateListener().subscribe((stockHist : StockDataHistory[])=>{
      this.stockHist = stockHist;
    });
    this.loggedin = this.stockService.logginauth()
    this.usr = this.stockService.getUsrName(); 
    
  }
  ngOnDestroy(){
    this.coinSub.unsubscribe();
    this.currSub.unsubscribe();
    this.stockSub.unsubscribe();
    console.log("Destroy");
  }
    
  showData(){
  }
}
