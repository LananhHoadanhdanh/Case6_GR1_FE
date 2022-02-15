import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser?: any;
  username?: any;
  idU?: any;
  roles?: any;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.currentUser = localStorage.getItem("currentUser")
    this.username = localStorage.getItem("USERNAME")
    this.idU = localStorage.getItem("USERID")
    this.userService.getUserProfile(this.idU).subscribe(res => {
      this.roles = res.roles
    })
  }
  logout() {
    this.authenticationService.logout()
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ROLE");
    localStorage.removeItem("ROLES");
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("USERID");
    window.location.href = 'http://localhost:4200';
  }

  detail() {
    this.router.navigate(["/detail/" + this.idU])
  }

}
