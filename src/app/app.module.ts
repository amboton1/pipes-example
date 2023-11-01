import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { FormatAmountPipe } from './format-amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    FormatDatePipe,
    FormatAmountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
