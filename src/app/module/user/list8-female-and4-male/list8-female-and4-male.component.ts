import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list8-female-and4-male',
  templateUrl: './list8-female-and4-male.component.html',
  styleUrls: ['./list8-female-and4-male.component.css']
})
export class List8FemaleAnd4MaleComponent implements OnInit {
  users: User[] = []
  usersFe: User[] = []
  usersMa: User[] = []

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.rent8Female().subscribe(female => {
// @ts-ignore
      this.usersFe = female
      console.log(this.usersFe)
      console.log("ytiyfyffyififi")
      this.userService.rent4Male().subscribe(male => {
        // @ts-ignore
        this.usersMa=male
        console.log("ytiyfyffyififi")
        console.log(this.usersMa)
        this.users=this.usersFe.concat(this.usersMa)
        console.log(this.users)
        for (let i=0; i<this.users.length; i++) {
          // @ts-ignore
          this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r => {
            // @ts-ignore
            this.users[i].myService = r
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
