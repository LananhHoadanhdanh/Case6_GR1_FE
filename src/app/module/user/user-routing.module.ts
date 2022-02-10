import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UpdateServiceComponent} from "./update-service/update-service.component";

const routes: Routes = [
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'update',
    component:UpdateUserComponent
  },{
    path:'service',
    component:UpdateServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
