import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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

  makeTransfer: FormGroup;
  transferFrom = new FormControl(
    { value: 'My Personal Account: $55824.76', disabled: true },
    Validators.required
  );
  transferTo = new FormControl('', Validators.required);
  transferAmount = new FormControl('', Validators.required);

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.makeTransfer = this.fb.group({
      transferFrom: [
        { value: 'My Personal Account: $55824.76', disabled: true },
        [Validators.required],
      ],
      transferTo: [null, [Validators.required]],
      transferAmount: [
        null,
        [Validators.required, Validators.pattern(/^[0-9]{4}$/)],
      ],
    });
  }
}
