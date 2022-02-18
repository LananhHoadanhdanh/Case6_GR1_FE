import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {ActiveService} from "../../../model/active-service";
import {ServiceProvided} from "../../../model/service-provided";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {SerProvidedService} from "../../../service/ser-provided.service";
import swal from "sweetalert";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderStatus} from "../../../model/order-status";
import {OrderService} from "../../../service/order.service";
import {Order} from "../../../model/order";
import {MessageServcieService} from "../../../service/message-servcie.service";
import {Message} from "../../../model/message";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  iUser = localStorage.getItem("USERID");
  currentUser?: User;
  newOrder?: Order;
  user?: User;
  price?: string;
  actSerData: ActiveService[] = []
  servicesPro: ServiceProvided[] = []
  servicesFree: ServiceProvided[] = []
  servicesEx: ServiceProvided[] = []
  // @ts-ignore
  servicesTime: ServiceProvided
  // @ts-ignore
  timeRent: number
  mess!: Message

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private service: SerProvidedService, private orderService: OrderService,private messSer: MessageServcieService) {
  }

  timeForm = new FormGroup({
    staTime: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.loadAll()
  }
  sent() {
    const mes = {
      idPro: {
        id: this.iUser
      },
      idUs: {
        id: this.user?.id
      },
      content: this.timeForm.value?.content
    }
    // @ts-ignore
    this.mess = mes;
    this.messSer.save(this.mess).subscribe(res => {
    })
  }

  save() {
    const order = {
      startTime: this.timeForm.value.staTime,
      timeRent: this.timeRent,
      status: {
        id: 1
      },
      provider: {
        id: this.user?.id
      },
      renter: {
        id: this.iUser
      }
    }
    this.sent()
    this.newOrder = order;
    this.orderService.saveOrder(this.newOrder).subscribe(res => {
      if (res==1) {
        swal("Successful rental rental (please wait for order confirmation)", "", "success", {timer: 2000})
          .then(() => {
            window.location.href = 'http://localhost:4200/detail/' + this.user?.id
          });
      } else {
        if (res==2){
          swal("Leasing time is less than the minimum lease time or small start time current time","","warning")
        }else {
          swal("Your rental time has been coincided with the service provider's schedule","","warning")
        }
      }
    })
  }


  loadAll() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.userService.getUserProfile(id).subscribe(res => {
        console.log(res)
        this.user = res
        this.price = res.price
      })
      // @ts-ignore
      this.service.getAllActService(id).subscribe(ser => {
        this.actSerData = ser;
        this.service.getAll().subscribe(services => {
          for (let i = 0; i < services.length; i++) {
            for (let j = 0; j < this.actSerData.length; j++) {
              if (this.actSerData[j].idService == services[i].id) {
                this.servicesPro.push({
                  id: services[i].id,
                  name: services[i].name,
                  category: services[i].category
                })
              }
            }
          }
          for (let i = 0; i < this.servicesPro.length; i++) {
            if (this.servicesPro[i].category == '1') {
              this.servicesFree.push(this.servicesPro[i])
            }
            if (this.servicesPro[i].category == '2') {
              this.servicesEx.push(this.servicesPro[i])
            }
            if (this.servicesPro[i].category == '0') {
              this.servicesTime = this.servicesPro[i]
              console.log(this.servicesPro[i])
            }
          }
        })
      })
    })

    this.userService.getUserProfile(this.iUser).subscribe(res => {
      this.currentUser = res
    })
  }

  updatePrice() {
    // @ts-ignore
    this.userService.updatePrice(this.iUser, this.price).subscribe(() => {
      swal("Completed!", "", "success");
      window.location.href = 'http://localhost:4200/detail/' + this.iUser;
    })
  }

  browseAccount(id: string | undefined) {
    this.userService.browseAccount(id).subscribe(() => {
      swal("OK!", "", "success");
      this.loadAll();
    })
  }

  lockAccount(id: string | undefined) {
    this.userService.lockAccount(id).subscribe(() => {
      swal("Locked!", "", "success");
      this.loadAll();
    })
  }

  updateVipAccount(id: string | undefined) {
    this.userService.updateVipAccount(id).subscribe(() => {
      swal("VIP!", "", "success");
      this.loadAll();
    })
  }

  pauseAccount(id: string | undefined) {
    this.userService.pauseAccount(id).subscribe(() => {
      swal("DONE!", "", "success");
      this.loadAll();
    })
  }
}
