import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list12-user-suitable-for-gender',
  templateUrl: './list12-user-suitable-for-gender.component.html',
  styleUrls: ['./list12-user-suitable-for-gender.component.css']
})
export class List12UserSuitableForGenderComponent implements OnInit {
  idU = localStorage.getItem("USERID");
  user?: User;
  users:User[]=[]

  constructor(private userService: UserService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.userService.getUserProfile(this.idU).subscribe(res => {
      this.user = res;
      this.userService.getShowList12UserSuitableForGender(this.user?.gender).subscribe(res => {
        this.users=res
        for (let i=0; i<this.users.length;i++){
          // @ts-ignore
          this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r=>{
            // @ts-ignore
            this.users[i].myService=r
          })
        }
      })
    })
  }

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }

}
