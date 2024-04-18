import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api3',
  templateUrl: './api3.component.html',
  styleUrls: ['./api3.component.css']
})
export class API3Component {
  marketData: any[] = [];
  stockPrice: any[] = [];

  tickerSymbol: string = '';
  currentSymbol: string = '';

  searchControl = new FormControl();
  filteredMarketData!: Observable<any[]>;

  constructor(private dataService: DataService) { };

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
        console.log(this.stockPrice);
      },
      error: (err) => console.error(err)
    });
  }
}
