import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CurrHistory } from './history/CurrencyHistory.model';
import { CoinloreHistory } from './history/coinloreHistory.model';
import { StockDataHistory } from './history/stockDataHistory.model';



@Injectable({
  providedIn: 'root'
})
export class AptServiceService {
  loggedin = false;
  user = ""; 

  coinHist: CoinloreHistory [] = [];
  currhist : CurrHistory [] = [];
  stockHist : StockDataHistory [] = [];

  constructor() { }

  private coinUpdate = new Subject<CoinloreHistory[]>()
  private currUpdate = new Subject<CurrHistory[]>()
  private stockUpdate = new Subject<StockDataHistory[]>()

  getCoin(){
    return this.coinHist;
  }

  getCurrs(){
    return this.currhist;
  }

  getStocks(){
    return this.stockHist;
  }

  getCoinUpdateListener(){
    return this.coinUpdate.asObservable();
  }
  
  getCurrUpdateListener(){
    return  this.currUpdate.asObservable();
  }
  
  getStockUpdateListener(){
    return this.stockUpdate.asObservable();
  }


  addCoin(rank: number, name: string, symbol: string, price_usd: string, csupply: string, msupply: string, market_cap_usd: string, percent_change_1h: string, percent_change_24h: string, percent_change_7d: number, tsupply: number){
    if (this.loggedin == true){
      const coin: CoinloreHistory= {rank: rank, name: name, symbol: symbol, price_usd: price_usd, csupply: csupply, msupply: msupply, market_cap_usd: market_cap_usd, percent_change_1h: percent_change_1h, percent_change_24h: percent_change_24h, percent_change_7d: percent_change_7d, tsupply:  tsupply};
      this.coinUpdate.next([...this.coinHist]);
      this.coinHist.push(coin)
    }else{
      console.log("Not Logged in")
    }
  }
  addStock( ticker: string, name: string, price: number){
    if(this.loggedin == true){
      const stock: StockDataHistory ={ticker: ticker, name: name, price: price};
      this.stockUpdate.next([...this.stockHist]);
      console.log("AddStock Test:", this.stockHist);
      this.stockHist.push(stock);
    }
    else{
      console.log("Not Logged in");
    }
  }

  addCurr( old_currency: string, old_amount: number, new_currency: string, new_amount: number ){
    if(this.loggedin == true){
      const curr: CurrHistory ={old_currency: old_currency, old_amount: old_amount, new_currency: new_currency, new_amount: new_amount };
      this.currUpdate.next([...this.currhist]);
      console.log("AddCurr Test:", this.currhist);
      this.currhist.push(curr);
    }
    else{
      console.log("Not Logged in");
    }
  }

  logginauth(){
    return this.loggedin
  }
  logginupdate(logginup: boolean){
    this.loggedin = logginup;
  }
  updateUsrName(usr:string){
    this.user = usr;
  }
  getUsrName(){
    return this.user;
  }
}
