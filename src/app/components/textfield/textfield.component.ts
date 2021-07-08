import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  selector: 'app-textfield',
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() helperTextLeft = '';
  @Input() helperTextRight = '';

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
