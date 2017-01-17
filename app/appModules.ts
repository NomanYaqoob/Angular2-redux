import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReduxStoreModule } from "../store"
import { NgReduxModule } from 'ng2-redux';

@NgModule({
  imports: [BrowserModule, NgReduxModule, ReduxStoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
