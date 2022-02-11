import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  idU = localStorage.getItem("USERID")
  users: User[] = [];
  userAdmin?: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.userService.getAllUser().subscribe(res => {
      this.users = res
    })
    this.userService.getUserProfile(this.idU).subscribe(res => {
      this.userAdmin = res
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
}
