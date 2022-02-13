import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {UserService} from "../../service/user.service";
import swal from "sweetalert";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confirmPassword: new FormControl("", [Validators.required]),
    fullName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{11,15}")]),
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
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword,
      fullName: this.userForm.value.fullName,
      email: this.userForm.value.email,
      phoneNumber: this.userForm.value.phoneNumber,
      status: {
        id: '1'
      }
    };
    console.log(user)
    // @ts-ignore
    this.userService.register(user).subscribe(() => {
      swal("Sign Up Success!", "Please login to continue!", "success");
      this.router.navigate(["/"])
    },error => {
      swal("Error!", "Username already exists, please try again!!!", "error");
      console.log(error)
    })
  }

  get username() {
    return this.userForm.get('username')
  }

  get password() {
    return this.userForm.get('password')
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword')
  }

  get fullName() {
    return this.userForm.get('fullName')
  }

  get email() {
    return this.userForm.get('email')
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber')
  }

}
