import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {UpdateUserComponent} from "./update-user/update-user.component";
import { UpdatePriceUserComponent } from './update-price-user/update-price-user.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomepageComponent,
    UpdateUserComponent,
    UpdatePriceUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
