import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";
import swal from "sweetalert";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-my-list-orders',
  templateUrl: './my-list-orders.component.html',
  styleUrls: ['./my-list-orders.component.css']
})
export class MyListOrdersComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  renterOrders: Order[] = [];
  providerOrders: Order[] = [];

  constructor(private orderService: OrderService,
              private userService: UserService) { }

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

  changeStatusToReceived(id:any) {
    this.orderService.changeStatus(id, 2).subscribe(() => {
      swal("Received!", "", "success");
      this.loadAll()
    })
  }

  changeStatusToCompleted(id:any, providerId: any) {
    this.orderService.changeStatus(id, 3).subscribe(() => {
      this.userService.increaseRentCount(providerId).subscribe(() => {
        swal("Completed!", "", "success");
        this.loadAll()
      })
    })
  }

  deleteOrder(id: any) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'Delete'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.orderService.deleteOrder(id).subscribe(() => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            this.loadAll()
          })
        } else {
          // swal("Your imaginary file is safe!");
        }
      });
  }


}
