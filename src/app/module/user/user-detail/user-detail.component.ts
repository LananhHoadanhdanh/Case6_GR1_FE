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

  iUser = localStorage.getItem("USERID")

  // @ts-ignore
  user?: User
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
  }

  updatePrice() {
    // @ts-ignore
    this.userService.updatePrice(this.iUser, this.price).subscribe(() => {
      swal("Completed!", "", "success");
      window.location.href = 'http://localhost:4200/detail/' + this.iUser;
    })
  }
}
