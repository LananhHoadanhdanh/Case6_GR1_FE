import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";
import swal from "sweetalert";

@Component({
  selector: 'app-all-order-list',
  templateUrl: './all-order-list.component.html',
  styleUrls: ['./all-order-list.component.css']
})
export class AllOrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.orderService.getAll().subscribe(res => {
      this.orders = res
      console.log(res)
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
