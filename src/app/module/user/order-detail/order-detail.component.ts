import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../model/order";
import {User} from "../../../model/user";
import {OrderService} from "../../../service/order.service";
import {ActivatedRoute} from "@angular/router";
import firebase from "firebase/compat";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  order?: Order;
  currentUser?: User;

  @Input() orderId?: string;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  loadAll() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.userService.getUserProfile(id).subscribe(res => {
        console.log(res)
        this.order = res
      })
    })
    this.userService.getUserProfile(this.idU).subscribe(res => {
      this.currentUser = res;
    })

  }
}
