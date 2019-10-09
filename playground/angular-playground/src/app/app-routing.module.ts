import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { UserGridComponent } from './user-page/user-grid/user-grid.component';

const routes: Routes = [
  {
    path: "playground",
    component: PlaygroundComponent
  },
  {
    path: "users",
    component: UserGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
