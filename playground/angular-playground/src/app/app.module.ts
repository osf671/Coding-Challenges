
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { Playground1Component } from './playground1/playground1.component';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    Playground1Component,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
