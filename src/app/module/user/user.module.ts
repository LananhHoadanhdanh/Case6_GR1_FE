import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {UpdateUserComponent} from "./update-user/update-user.component";
import { List12NewServiceProviderComponent } from './list12-new-service-provider/list12-new-service-provider.component';
import { UpdatePriceUserComponent } from './update-price-user/update-price-user.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HighestViews6Component } from './highest-views6/highest-views6.component';
import { UserDetaiComponent } from './user-detai/user-detai.component';
import { List6UserVipComponent } from './list6-user-vip/list6-user-vip.component';


@NgModule({
  declarations: [
    HomepageComponent,
    List12NewServiceProviderComponent,
    UpdatePriceUserComponent,
    UpdateUserComponent,
    UpdateServiceComponent,
    HighestViews6Component,
    UserDetaiComponent,
    List6UserVipComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
