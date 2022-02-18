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
  providerOrders: Order[] = []
  idR: any;
  messages: Message[] = []
  messPro: Message[] = []
  messRe: Message[] = []
  messPull: Message[] = []
  time!: boolean

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private userService: UserService, private service: SerProvidedService, private orderService: OrderService, private messSer: MessageServcieService) {
  }

  messForm = new FormGroup({
    content: new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.orderService.findAllOrderByProvider(this.idU).subscribe(res => {
      this.providerOrders = res;
    })
    this.getOne()
    this.getAll()
  }

  getMess(idPro: any) {
    this.messSer.getMess(this.idU, idPro).subscribe(res => {
      this.messRe = res;
    })
    // this.messSer.getMess(idPro, this.idU).subscribe(res => {
    //   this.messPull = res;
    // })
  }

  id(id: any) {
    this.idR = id;
    this.getMess(id);
  }

  getAll() {
    this.messSer.getAllByIdRent(this.idU).subscribe(res => {
      this.messages = res;
    })
  }

  getOne() {
    this.messSer.getOneByIdRent(this.idU).subscribe(res => {
      this.messPro = res;
    })
  }

  sent() {
    const mes = {
      idPro: {
        id: this.idU
      },
      idUs: {
        id: this.idR
      },
      content: this.messForm.value?.content
    }
    // @ts-ignore
    this.mess = mes;
    this.messSer.save(this.mess).subscribe(res => {
      this.id(this.idR);
      // @ts-ignore
      // this.time = setInterval(() => {
      //   this.id(this.idR);
      // }, 650);
    })
  }
}
