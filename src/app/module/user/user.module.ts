import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {UpdateUserComponent} from "./update-user/update-user.component";
import { List12NewServiceProviderComponent } from './list12-new-service-provider/list12-new-service-provider.component';
import { UpdatePriceUserComponent } from './update-price-user/update-price-user.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomepageComponent,
    List12NewServiceProviderComponent,
    UpdatePriceUserComponent,
    UpdateUserComponent,
    UpdateServiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
