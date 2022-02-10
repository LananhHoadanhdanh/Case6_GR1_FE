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
      // @ts-ignore
      this.users=res;
     console.log(this.users)
    })
  }

}
