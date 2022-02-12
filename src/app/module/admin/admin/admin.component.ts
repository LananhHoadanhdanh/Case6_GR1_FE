import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  approveUsers: User[] = [];
  lockUsers: User[] = [];
  currentAcc?: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.getAllUserByStatus(1).subscribe(res => {
      this.approveUsers = res
      console.log(res)
    })
    this.userService.getAllUserByStatus(4).subscribe(res => {
      this.lockUsers = res
      console.log(res)
    })
    this.userService.getUserProfile(this.idU).subscribe(res => {
      console.log("user")
      console.log(res)
      this.currentAcc = res
    })
  }

  browseAccounts(id: string | undefined) {
    this.userService.browseAccount(id).subscribe(() => {
      swal("Done!", "", "success");
      this.loadAll();
    })
  }

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }

}
