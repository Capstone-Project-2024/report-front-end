import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCryptoApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/crypto`)
  }

  getAccountData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/accounts`);
  }

  postExchangeData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/currencyExchange`, data);
  }

  getExchangeData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/currencyExchange`); 
  }
}
