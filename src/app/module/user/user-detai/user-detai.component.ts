import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import swal from "sweetalert";

@Component({
  selector: 'app-user-detai',
  templateUrl: './user-detai.component.html',
  styleUrls: ['./user-detai.component.css']
})
export class UserDetaiComponent implements OnInit {

  iUser = localStorage.getItem("USERID")

  // @ts-ignore
  user?: User
  price?: string;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.userService.getUserProfile(this.iUser).subscribe(result => {
      this.user = result
      console.log(result)
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
