import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

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

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.makeTransfer = this.fb.group({
      transferFrom: this.transferFrom,
      transferTo: this.transferTo,
      transferAmount: this.transferAmount,
    });
  }
}
