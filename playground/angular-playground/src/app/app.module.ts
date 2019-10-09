
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatSliderModule, MatButtonModule} from '@angular/material';
import { UserPageModule } from './user-page/user-page.module';

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    UserPageModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
