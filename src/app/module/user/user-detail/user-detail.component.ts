import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import swal from "sweetalert";

@Component({
  selector: 'app-user-detai',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  iUser = localStorage.getItem("USERID");
  currentUser?: User;

  user?: User;
  price?: string;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,) {
  }

  ngOnInit(): void {
    this.loadAll()
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
