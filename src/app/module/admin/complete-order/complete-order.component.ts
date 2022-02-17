import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";
import swal from "sweetalert";
import {ReportService} from "../../../service/report.service";

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.css']
})
export class CompleteOrderComponent implements OnInit {

  orders : Order[] = []
  constructor(private orderService : OrderService,
              private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.orderService.getCompletedOrder().subscribe(result => {
      this.orders= result;
      for (let i = 0; i < this.orders.length; i++) {
        this.reportService.getAllByOrder(this.orders[i].id).subscribe(reports => {
          console.log(this.orders[i].id)
          console.log(reports)
          this.orders[i].reports = reports;
        })
      }
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
