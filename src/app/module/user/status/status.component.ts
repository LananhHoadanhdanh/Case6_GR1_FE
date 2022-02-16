import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {Order} from "../../../model/order";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  orders : Order[] = []
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.status().subscribe(result => {
      this.orders= result
    })
  }
}
