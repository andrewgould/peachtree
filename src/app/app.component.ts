import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'peachtree';
  currencyRegex: RegExp =
    /^[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{2})?|(?:,[0-9]{3})*(?:\.[0-9]{2})?|(?:\.[0-9]{3})*(?:,[0-9]{2})?)$/;

  makeTransfer: FormGroup;
  transferFrom = new FormControl({
    value: 'My Personal Account: € 5824.76',
    disabled: true,
  });
  transferTo = new FormControl('', Validators.required);
  transferAmount = new FormControl('', [
    Validators.required,
    Validators.pattern(this.currencyRegex),
  ]);

  transactions$: Observable<Transaction[]>;

  constructor(
    private readonly fb: FormBuilder,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit() {
    this.createForm();
    this.transactions$ = this.transactionsService.getTransactions();
  }

  createForm() {
    this.makeTransfer = this.fb.group({
      transferFrom: this.transferFrom,
      transferTo: this.transferTo,
      transferAmount: this.transferAmount,
    });
  }
}
