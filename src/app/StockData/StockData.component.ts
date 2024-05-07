import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AptServiceService } from '../api.service';

@Component({
  selector: 'app-StockData',
  templateUrl: './StockData.component.html',
  styleUrls: ['./StockData.component.css']
})
export class StockDataComponent {
  marketData: any[] = [];
  stockPrice: any[] = [];

  tickerSymbol: string = '';
  currentSymbol: string = '';

  searchControl = new FormControl();
  filteredMarketData!: Observable<any[]>;

  dataSource = new MatTableDataSource<any>([]);

  displayedResponseStock: string[] = ['ticker', 'name',  'price'];

  constructor(private dataService: DataService, public stockService: AptServiceService) { };

  ngOnInit() {
    this.fetchMarketData();
    this.filteredMarketData = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterMarketData(value))
    );
  }

  filterMarketData(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.marketData.filter(option =>
      option.longName.toLowerCase().includes(filterValue) ||
      option.symbol.toLowerCase().includes(filterValue)
    );
  }

  fetchMarketData() {
    this.dataService.getMarketData().subscribe({
      next: (data) => {
        this.marketData = data;
      },
      error: (err) => console.error(err)
    })
  }

  onSymbolSelect(symbol: string): void {
    this.dataService.getStockPrice(symbol).subscribe({
      next: (stockPrice) => {
        this.stockPrice = stockPrice;
        const exchangeData = {
          ticker: stockPrice.ticker,
          name: stockPrice.name,
          price: stockPrice.price
        };  
        if(stockPrice.ticker != ""){
            
          const newData = [...this.dataSource.data, exchangeData];
          this.dataSource.data = newData;
        }
        //History Code
        this.stockService.addStock(stockPrice.ticker, stockPrice.name, stockPrice.price);
      },
      error: (err) => console.error(err)
    });
  }
}
