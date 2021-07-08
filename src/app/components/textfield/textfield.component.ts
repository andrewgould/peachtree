import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  selector: 'app-textfield',
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() disabled = false;
  @Input() helperTextLeft = '';
  @Input() helperTextRight = '';
  @Input() value: string = '';
  @Input() formControl: FormControl;
  @Input() name = '';
  @Input() type = 'text';
  @Input() placeholder = '';

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
