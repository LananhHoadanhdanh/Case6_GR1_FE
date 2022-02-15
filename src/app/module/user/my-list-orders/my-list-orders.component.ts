import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";

@Component({
  selector: 'app-my-list-orders',
  templateUrl: './my-list-orders.component.html',
  styleUrls: ['./my-list-orders.component.css']
})
export class MyListOrdersComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  renterOrders: Order[] = [];
  providerOrders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.orderService.findAllOrderByRenter(this.idU).subscribe(res => {
      this.renterOrders = res
      console.log(res)
    })
    this.orderService.findAllOrderByProvider(this.idU).subscribe(res => {
      this.providerOrders = res
      console.log(res)
    })
  }
}
