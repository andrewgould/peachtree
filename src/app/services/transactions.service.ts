import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { mockData } from '../mocks/transactions.mocks';
import { Transaction, Transactions } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactionsUrl = '/api/transactions';
  private httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
  };

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<{ data: Transactions }>(this.transactionsUrl, this.httpOptions)
      .pipe(
        map((data: any) => data),
        catchError(() => of(mockData.data))
      );
  }
}
