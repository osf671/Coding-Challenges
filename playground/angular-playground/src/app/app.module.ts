import { CommonModule } from '@angular/common';
import { UserPhotoComponent } from './user-page/user-photo/user-photo.component';
import { UserCardComponent } from './user-page/user-card/user-card.component';
import { UserGridComponent } from './user-page/user-grid/user-grid.component';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatSliderModule, MatButtonModule } from '@angular/material';
import { MessagesComponent } from './user-page/messages/messages.component';
import { UserProfileComponent } from './user-page/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    MessagesComponent,
    UserGridComponent,
    UserCardComponent,
    UserProfileComponent,
    UserPhotoComponent,
    DashboardComponent,
    UserDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    CommonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
