import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },{
    path:'update',
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
