import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {UpdateUserComponent} from "./module/user/update-user/update-user.component";

const routes: Routes = [
  {path: '',
  component: LoginComponent},
  {
  path:'user',
    loadChildren :() => import('./module/user/user.module').then(module => module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
