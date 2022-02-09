import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    fullName: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    statusUserId: new FormControl("1"),
  });
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService : UserService) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
  }
  register(){
    const user = {
      username: this.userForm.value.username,
      password: this.userForm.value.username,
      confirmPassword: this.userForm.value.username,
      fullName: this.userForm.value.username,
      email: this.userForm.value.username,
      phoneNumber: this.userForm.value.username,
      status: {
        id: '1'
      }
    };
    console.log(user)
    // @ts-ignore
    this.userService.register(user).subscribe(() => {
      alert("Tạo tài khoản thành công! Hãy đăng nhập !")
      this.router.navigate(["/"])
    },error => {
      console.log(error)
    })
  }

}
