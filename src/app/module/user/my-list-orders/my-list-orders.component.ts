import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order.service";
import swal from "sweetalert";
import {UserService} from "../../../service/user.service";
import {ReportService} from "../../../service/report.service";

@Component({
  selector: 'app-my-list-orders',
  templateUrl: './my-list-orders.component.html',
  styleUrls: ['./my-list-orders.component.css']
})
export class MyListOrdersComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  renterOrders: Order[] = [];
  providerOrders: Order[] = [];
  content?: string;

  constructor(private orderService: OrderService,
              private userService: UserService,
              private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.orderService.findAllOrderByRenter(this.idU).subscribe(res => {
      this.renterOrders = res
      for (let i = 0; i < this.renterOrders.length; i++) {
        this.reportService.getAllByOrder(this.renterOrders[i].id).subscribe(reports => {
          console.log(this.renterOrders[i].id)
          console.log(reports)
          this.renterOrders[i].reports = reports;
        })
      }
    })

    this.orderService.findAllOrderByProvider(this.idU).subscribe(res => {
      this.providerOrders = res
      for (let i = 0; i < this.providerOrders.length; i++) {
        this.reportService.getAllByOrder(this.providerOrders[i].id).subscribe(reports => {
          console.log(this.providerOrders[i].id)
          console.log(reports)
          this.providerOrders[i].reports = reports;
        })
      }
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

  sendReport(orderId: any) {

    let report = {
      content : this.content,
      order: {
        id: orderId
      },
      status: {
        id: 1
      }
    }
    console.log(report)
    // @ts-ignore
    this.reportService.sendReport(report).subscribe(() => {
      swal("Completed!", "Your complaint has been submitted. Please wait for admin to confirm!", "success")
        // , {timer: 2000})
        // .then(() => {
        //   window.location.href = 'http://localhost:4200/myListOrders'
        // })

    })
  }

}
