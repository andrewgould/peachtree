import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './models/transaction.model';
import { showModal } from './app.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

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
    Validators.min(500),
    Validators.max(5000),
  ]);

  transactions$: Observable<Transaction[]>;
  showModal: boolean;
  subs: Subscription[];

  constructor(
    private readonly fb: FormBuilder,
    private transactionsService: TransactionsService,
    private store: Store<{ app: AppState }>
  ) {
    this.subs = [];
  }

  ngOnInit() {
    this.createForm();
    this.transactions$ = this.transactionsService.getTransactions();
    this.subs.push(
      this.store
        .select((store) => store.app.modalOpen)
        .subscribe((update) => {
          console.log(update);
          this.showModal = update;
        })
    );
  }

  createForm() {
    this.makeTransfer = this.fb.group({
      transferFrom: this.transferFrom,
      transferTo: this.transferTo,
      transferAmount: this.transferAmount,
    });
  }

  handleSubmit(event?): void {
    if (this.makeTransfer.errors || this.makeTransfer.status === 'INVALID') {
      return;
    }

    this.store.dispatch(
      showModal({
        data: {
          amount: this.transferAmount.value,
          destination: this.transferTo.value,
        },
      })
    );
  }
}
