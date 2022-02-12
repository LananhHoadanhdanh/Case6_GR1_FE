import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list6-user-vip',
  templateUrl: './list6-user-vip.component.html',
  styleUrls: ['./list6-user-vip.component.css']
})
export class List6UserVipComponent implements OnInit {

  users:User[]=[]
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.list6UserVip().subscribe(res=>{
      // @ts-ignore
      this.users=res;
      console.log(this.users)
    })
  }

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }


}
