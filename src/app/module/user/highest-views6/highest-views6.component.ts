import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {ServiceProvided} from "../../../model/service-provided";

@Component({
  selector: 'app-highest-views6',
  templateUrl: './highest-views6.component.html',
  styleUrls: ['./highest-views6.component.css']
})
export class HighestViews6Component implements OnInit {
  users: User[] = []
  service0 : ServiceProvided[]= []
  service1 : ServiceProvided[]= []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.getAllUserByView().subscribe(res => {
      // @ts-ignore
      this.users = res;
      console.log(res)
      // @ts-ignore
      this.userService.getAllUserBySerProvided(this.users[0].id).subscribe(r=>{
        // @ts-ignore
        this.users[0].sss=r
        console.log("test")
        console.log(this.users[0].sss)
      })  // @ts-ignore
      this.userService.getAllUserBySerProvided(this.users[1].id).subscribe(r=>{
        // @ts-ignore

        this.users[1].sss=r
      })
    })
  }

  // @ts-ignore
}
