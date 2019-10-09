import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatRadioModule
} from "@angular/material";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { TonysComponentComponent } from "./tonys-component/tonys-component.component";
import { UserPageModule } from "./user-page/user-page.module";
import { UserCardComponent } from "./user-page/user-card/user-card.component";


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    LandingPageComponent,
    TonysComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    UserPageModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
