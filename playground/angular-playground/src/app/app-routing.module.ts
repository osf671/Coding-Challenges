import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { TonysComponentComponent } from "./tonys-component/tonys-component.component";
import { UserGridComponent } from "./user-page/user-grid/user-grid.component";

const routes: Routes = [
  {
    // www.ellaynaWebsite.com/playground
    path: "playground",
    component: PlaygroundComponent
  },
  {
    path: "tonys-home",
    component: TonysComponentComponent
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
