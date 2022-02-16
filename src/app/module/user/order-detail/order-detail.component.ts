import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order?: Order;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadAll() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.orderService.getOne(id).subscribe(res => {
        console.log(res)
        this.order = res
      })
    })
  }
}
