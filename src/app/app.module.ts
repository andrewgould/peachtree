import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BbUIModule } from 'bb-ui/bb-ui.module';
import { AppComponent } from './app.component';
import { TextfieldModule } from './components/textfield/textfield.module';
import { ModalModule } from './components/modal/modal.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BbUIModule,
    HttpClientModule,
    ModalModule,
    StoreModule.forRoot({
      app: appReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ReactiveFormsModule,
    TextfieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
