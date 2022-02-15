import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  idU = localStorage.getItem("USERID");
  user?: User;
  users: User[] = []
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  formSearch = new FormGroup({
    name: new FormControl(""),
    gender: new FormControl("")
  })

  minValue: number = 16;
  maxValue: number = 80;

  options: Options = {
    floor: 16,
    step: 1,
    ceil: 80,
    showTicks: true
  };

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.searchAll();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.searchAll();
  }

  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }

  searchAll() {
    let gender=this.formSearch?.value.gender
    let name = this.formSearch?.value.name
    const params = this.getRequestParams(this.page, this.pageSize);
    if(gender==""){

      this.userService.findAllByAgeAndName(params, "" + this.minValue, "" + this.maxValue, name)
        .subscribe({
          next: (data) => {
            this.users = data;
            for (let i = 0; i < this.users.length; i++) {
              // @ts-ignore
              this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r => {
                // @ts-ignore
                this.users[i].myService = r
              })
            }
            console.log(this.users);
            console.log("ak88")

          },
          error: (err) => {
            console.log(err);
          }
        });
    }
    else {
      this.userService.findAllByAgeAndNameAndGender(params, "" + this.minValue, "" + this.maxValue, name,gender)
        .subscribe({
          next: (data) => {
            this.users = data;
            for (let i = 0; i < this.users.length; i++) {
              // @ts-ignore
              this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r => {
                // @ts-ignore
                this.users[i].myService = r
              })
            }
            console.log(this.users);
            console.log("ak88")

          },
          error: (err) => {
            console.log(err);
          }
        });
    }

  }
}