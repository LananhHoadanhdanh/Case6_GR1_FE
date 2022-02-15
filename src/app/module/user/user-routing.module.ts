import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {UpdateServiceComponent} from "./update-service/update-service.component";
import {HighestViews6Component} from "./highest-views6/highest-views6.component";
import {UpdatePriceUserComponent} from "./update-price-user/update-price-user.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {ServiceProvider12Component} from "./service-provider12/service-provider12.component";
import {MyListOrdersComponent} from "./my-list-orders/my-list-orders.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  }, {
    path: 'detail/:id',
    component: UserDetailComponent
  }, {
    path: 'update',
    component: UpdateUserComponent
  }, {
    path: 'service',
    component: UpdateServiceComponent
  }, {
    path: "highestViews",
    component: HighestViews6Component
  }, {
    path: 'updatePrice',
    component: UpdatePriceUserComponent
  }, {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'myListOrders',
    component: MyListOrdersComponent
  }, {
    path:'profile',
    component:ServiceProvider12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
