import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BbUIModule } from 'bb-ui/bb-ui.module';
import { AppComponent } from './app.component';
import { TextfieldModule } from './components/textfield/textfield.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BbUIModule, TextfieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
