import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextfieldComponent } from './textfield.component';

@NgModule({
  declarations: [TextfieldComponent],
  imports: [CommonModule, FormsModule],
  exports: [TextfieldComponent],
})
export class TextfieldModule {}
