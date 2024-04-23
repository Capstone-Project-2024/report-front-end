import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-Currency',
  templateUrl: './Currency.component.html',
  styleUrl: './Currency.component.css'
})

export class CurrencyComponent {
  currencyData: any [] = [];

  currencyDict = [
    {id: "United States Dollar (USD)", currency:"USD"},
    {id: "Euro (EUR)", currency:"EUR"},
    {id: "Canadian Dollar (CAD)", currency:"CAD"},
    {id: "Japanese Yen (JPY)", currency:"JPY"},
    {id: "Chinese Yuan (CNY)", currency:"CNY"},
    {id: "British Pound (GBP)", currency:"GBP"},
    {id: "Swiss Franc (CHF)", currency:"CHF"},
    {id: "New Zealand Dollar (NZD)", currency:"NZD"},
    {id: "Australian Dollar (AUD)", currency:"AUD"},
    {id: "South Korean Won (KRW)", currency:"KRW"},
    {id: "Polish Zloty (PLN)", currency:"PLN"},
    {id: "Danish Krone (DKK)", currency:"DKK"},
    {id: "Turkish New Lira (TRY)", currency:"TRY"},
    {id: "Hong Kong Dollar (HKD)", currency:"HKD"}
  ]

  current_currency: string;
  wanted_currency: string;
  starting_currency: string;
  currency_amount: string;

  displayedResponse: string[] = ['old_currency', 'old_amount',  'new_currency', 'new_amount' ];

  dataSource = new MatTableDataSource<any>([]);

  constructor(private dataService: DataService) { }

   fetchCurrencyData() {
    console.log("Fetching currency data...");
    this.dataService.getExchangeData().subscribe({
      next: (data) => {
        if (data) {
        }
      },
      error: (err) => {
        console.error("Error fetching currency data:", err);
      }
    });
  }

  onCurrencySelect(){
    if (this.current_currency === '') {
      this.dataSource.data = this.currencyDict;
    } else if (this.current_currency){
      const selectedCurrency = this.currencyDict.find(currency => currency.currency === this.current_currency);
      if (selectedCurrency) {
        const newData = [...this.dataSource.data, selectedCurrency];
        this.dataSource.data = newData;
      }
    }
  }
  onExchange() {
    const requestData = {
      wanted_Currency: this.wanted_currency,
      starting_currency: this.starting_currency,
      currency_Amount: this.currency_amount
    };

    console.log("Request Data:", requestData);

    this.dataService.postExchangeData(requestData).subscribe(response => {
      console.log("Currency Exchange API call successful:", response);
      if (response && response.old_currency) {
        const exchangeData = {
          old_currency: response.old_currency,
          old_amount: response.old_amount,
          new_currency: response.new_currency,
          new_amount: response.new_amount
        };
        const newData = [...this.dataSource.data, exchangeData];
        this.dataSource.data = newData;
      } else {
        console.error("Invalid response format:", response);
      }
    }, error => {
      console.error("Error occurred during currency exchange:", error);
    });
  }
}
