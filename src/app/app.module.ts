import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppCounterServesis} from './servesis/app-counter.servesis';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppCounterServesis
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
