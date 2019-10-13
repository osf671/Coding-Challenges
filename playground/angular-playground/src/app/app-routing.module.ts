import { UserDetailComponent } from './user-detail/user-detail.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { UserGridComponent } from './user-page/user-grid/user-grid.component';
import { UserCardComponent } from './user-page/user-card/user-card.component';

const routes: Routes = [
  {
    path: "playground",
    component: PlaygroundComponent
  },
  {
    path: "users",
    component: UserGridComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'cards',
    component: UserCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
