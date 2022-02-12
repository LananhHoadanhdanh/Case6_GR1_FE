import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-list12-new-service-provider',
  templateUrl: './list12-new-service-provider.component.html',
  styleUrls: ['./list12-new-service-provider.component.css']
})
export class List12NewServiceProviderComponent implements OnInit {
  users:User[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.list12NewServiceProvider().subscribe(res=>{
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
