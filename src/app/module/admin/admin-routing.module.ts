import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {AllOrderListComponent} from "./all-order-list/all-order-list.component";

const routes: Routes = [
  {
    path: "notification",
    component: AdminComponent
  },
  {
    path: "users",
    component: ListUserComponent
  },
  {
    path: "orders",
    component: AllOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
