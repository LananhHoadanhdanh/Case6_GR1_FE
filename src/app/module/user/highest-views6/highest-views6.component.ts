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
        this.service0= r;
        console.log(r)
      })  // @ts-ignore
      this.userService.getAllUserBySerProvided(this.users[1].id).subscribe(r=>{
        this.service1= r;
        console.log(r)
      })
    })
  }

  // @ts-ignore
  SerProvided(event){
    // @ts-ignore
    this.userService.getAllUserBySerProvided(event).subscribe(r=>{
      this.service0= r;
      console.log(r)
    })
  }
}
