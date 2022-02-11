import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {first} from "rxjs";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser = localStorage.getItem("currentUser");
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  // @ts-ignore
  returnUrl: string;
  // @ts-ignore
  adminUrl: string;
  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService
  ) {
    // console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit() {
    // @ts-ignore
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    this.adminUrl = '/admin'
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log('đây là data')
          console.log(data)
          // @ts-ignore
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // @ts-ignore
          localStorage.setItem('ROLE', data.roles[0].authority);
          // @ts-ignore
          localStorage.setItem('USERNAME', data.username);
          // @ts-ignore
          localStorage.setItem('USERID', data.id);
          // @ts-ignore
          if (data.roles.length > 2) {
            swal("Logged in successfully!", "", "success");
            this.router.navigate([this.adminUrl])
          } else {
            // this.router.navigate([this.returnUrl, "homepage"]);
            // @ts-ignore
            if (data.status?.id == 1 || data.status?.id == 3) {
              swal("Error!", "Your account is locked or not approved. Please use another account!", "error");
              // alert("Your account is locked or not approved. Please use another account!")
            } else {
              swal("Logged in successfully!", "", "success");
              this.router.navigate([this.returnUrl, "homepage"]);
            }
          }
        },
        error => {
          console.log(error)
          swal("Error!", "Wrong username or password, please try again!", "error");
          this.loading = false;
        });
  }

  logout() {
    this.authenticationService.logout()
  }

}
