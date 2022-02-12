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


}
