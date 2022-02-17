import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import {ListUserComponent} from "./list-user/list-user.component";
import { AllOrderListComponent } from './all-order-list/all-order-list.component';
import { ListReportComponent } from './list-report/list-report.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListUserComponent,
    AllOrderListComponent,
    ListReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
