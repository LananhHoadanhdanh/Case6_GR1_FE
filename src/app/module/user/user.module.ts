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
import { UserDetailComponent } from './user-detail/user-detail.component';
import { List6UserVipComponent } from './list6-user-vip/list6-user-vip.component';
import { List8FemaleAnd4MaleComponent } from './list8-female-and4-male/list8-female-and4-male.component';
import { List12UserSuitableForGenderComponent } from './list12-user-suitable-for-gender/list12-user-suitable-for-gender.component';
import { ImageComponent } from './image/image.component';
import {NgxPaginationModule} from "ngx-pagination";
import { MyListOrdersComponent } from './my-list-orders/my-list-orders.component';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { ServiceProvider12Component } from './service-provider12/service-provider12.component';
import { StatusComponent } from './status/status.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    HomepageComponent,
    List12NewServiceProviderComponent,
    UpdatePriceUserComponent,
    UpdateUserComponent,
    UpdateServiceComponent,
    HighestViews6Component,
    UserDetailComponent,
    List6UserVipComponent,
    ImageComponent,
    List12UserSuitableForGenderComponent,
    List8FemaleAnd4MaleComponent,
    MyListOrdersComponent,
    SearchComponent,
    OrderComponent,
    SearchComponent,
    ServiceProvider12Component,
    StatusComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSliderModule
  ]
})
export class UserModule { }
