import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-provider12',
  templateUrl: './service-provider12.component.html',
  styleUrls: ['./service-provider12.component.css']
})
export class ServiceProvider12Component implements OnInit {
  users: User[] = [];
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [3, 6, 9];
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    this.userService.serviceProvider12().subscribe(res=>{
      this.users=res;
      for (let i=0; i<this.users.length;i++){
        // @ts-ignore
        this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r=>{
          // @ts-ignore

          this.users[i].myService=r
        })
      }
    })
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }


  handlePageChange(event: number): void {
    this.page = event;
  }



  refreshList(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
  }
}
