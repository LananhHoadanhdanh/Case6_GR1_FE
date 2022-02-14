import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {ServiceProvided} from "../../../model/service-provided";
import {Router} from "@angular/router";

@Component({
  selector: 'app-highest-views6',
  templateUrl: './highest-views6.component.html',
  styleUrls: ['./highest-views6.component.css']
})
export class HighestViews6Component implements OnInit {
  users: User[] = []
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.getAllUserByView().subscribe(res => {
      this.users = res;

      for (let i=0; i<this.users.length;i++){
        // @ts-ignore
        this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r=>{
          // @ts-ignore
          this.users[i].myService=r
        })
      }

    })
  }

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }
}
