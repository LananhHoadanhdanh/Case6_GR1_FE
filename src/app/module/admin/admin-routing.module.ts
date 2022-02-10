import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [
  {
    path: "management",
    component: AdminComponent
  },
  {
    path: "users",
    component: ListUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
