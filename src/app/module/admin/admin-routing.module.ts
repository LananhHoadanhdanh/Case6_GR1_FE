import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {AllOrderListComponent} from "./all-order-list/all-order-list.component";
import {CompleteOrderComponent} from "./complete-order/complete-order.component";
import {ListReportComponent} from "./list-report/list-report.component";

const routes: Routes = [
  {
    path: "notification",
    component: AdminComponent
  },
  {
    path: "completed-orders",
    component: CompleteOrderComponent
  },
  {
    path: "orders",
    component: AllOrderListComponent
  },
  {
    path: "report",
    component: ListReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
