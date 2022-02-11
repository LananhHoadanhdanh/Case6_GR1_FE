import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UpdateServiceComponent} from "./update-service/update-service.component";
import {HighestViews6Component} from "./highest-views6/highest-views6.component";
import {UpdatePriceUserComponent} from "./update-price-user/update-price-user.component";
import {UserDetaiComponent} from "./user-detai/user-detai.component";

const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'detail/:id',
    component: UserDetaiComponent
  },
  {
    path:'update',
    component:UpdateUserComponent
  },{
    path:'service',
    component:UpdateServiceComponent
  },{
    path:'123',
    component:HighestViews6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
