import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../model/message";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {SerProvidedService} from "../../../service/ser-provided.service";
import {OrderService} from "../../../service/order.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageServcieService} from "../../../service/message-servcie.service";
import {Order} from "../../../model/order";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  mess!: Message
  idU = localStorage.getItem("USERID");
  // @Input() idUs: any = '';
  // @Input() renterOrders: any;
  providerOrders:Order[]=[]
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private service: SerProvidedService, private orderService: OrderService, private messSer: MessageServcieService) {
  }

  messForm = new FormGroup({
    content: new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.orderService.findAllOrderByProvider(this.idU).subscribe(res=>{
      this.providerOrders=res;
      console.log("sdasd")
      console.log(res)
    })
  }



  sent() {
    const mes = {
      idPro: {
        id: this.idU
      },
      idUs: {
        id: this?.providerOrders[0]?.renter?.id
      },
      content: this.messForm.value?.content
    }
    // @ts-ignore
    this.mess = mes;
    this.messSer.save(this.mess).subscribe(res => {
      console.log(res)
    })
  }
}
