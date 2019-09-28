import { PlaygroundsService } from './playgrounds.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { Playground1Component } from './playground1/playground1.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    Playground1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlaygroundsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
