import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {UpdateUserComponent} from "./update-user/update-user.component";
import { UpdateServiceComponent } from './update-service/update-service.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomepageComponent,
    UpdateUserComponent,
    UpdateServiceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
