import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser?: any;
  username = localStorage.getItem("USERNAME")
  idU = localStorage.getItem("USERID")

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser")
  }

  logout() {
    this.authenticationService.logout()
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ROLE");
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("USERID");
    window.location.href = 'http://localhost:4200';
  }

  detail() {
    this.router.navigate(["/detail/" + this.idU])
  }

}
