import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {UpdateUserComponent} from "./update-user/update-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { List12NewServiceProviderComponent } from './list12-new-service-provider/list12-new-service-provider.component';


@NgModule({
  declarations: [
    HomepageComponent,
    UpdateUserComponent,
    List12NewServiceProviderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserModule { }
