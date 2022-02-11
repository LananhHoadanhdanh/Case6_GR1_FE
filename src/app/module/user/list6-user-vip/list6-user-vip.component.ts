import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-list6-user-vip',
  templateUrl: './list6-user-vip.component.html',
  styleUrls: ['./list6-user-vip.component.css']
})
export class List6UserVipComponent implements OnInit {

  users:User[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.list6UserVip().subscribe(res=>{
      // @ts-ignore
      this.users=res;
      console.log(this.users)
    })
  }


}
