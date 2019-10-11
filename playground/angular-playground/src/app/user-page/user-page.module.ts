import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatSliderModule,
  MatCardModule,
  MatSlideToggleModule,
} from "@angular/material";
import { UserGridComponent } from "./user-grid/user-grid.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
  declarations: [UserGridComponent, UserCardComponent, ArticleComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    
  ],
  exports: [UserCardComponent]
})
export class UserPageModule {}
