import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-service-provider12',
  templateUrl: './service-provider12.component.html',
  styleUrls: ['./service-provider12.component.css']
})
export class ServiceProvider12Component implements OnInit {
  idU = localStorage.getItem("USERID")
  currentAcc?: User;
  users: User[] = [];
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [3, 6, 9];
  constructor(private userService:UserService,
              private router: Router) { }
  ngOnInit(): void {
    this.loadAll()
  }
  loadAll() {
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
    this.userService.getUserProfile(this.idU).subscribe(res => {
      this.currentAcc = res
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

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }
}
