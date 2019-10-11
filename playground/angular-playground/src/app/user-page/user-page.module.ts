import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatSliderModule, MatButtonModule} from '@angular/material';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPhotoComponent } from './user-photo/user-photo.component';

@NgModule({
  declarations: [UserGridComponent, UserCardComponent, UserProfileComponent, UserPhotoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule
  ]
})
export class UserPageModule { }
