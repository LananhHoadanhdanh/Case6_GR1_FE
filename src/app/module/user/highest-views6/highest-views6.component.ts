import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat";
import User = firebase.User;
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-highest-views6',
  templateUrl: './highest-views6.component.html',
  styleUrls: ['./highest-views6.component.css']
})
export class HighestViews6Component implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.getAllUserByView().subscribe(res => {
      // @ts-ignore
      this.users = res;
      console.log("6 high")
      console.log(res)
    })
  }
}
