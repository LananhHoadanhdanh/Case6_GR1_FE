import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Options} from "@angular-slider/ngx-slider";
import {ActiveService} from "../../../model/active-service";

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
  activeSer?: ActiveService;
  activeServices: ActiveService[] = []
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
    let gender = this.formSearch?.value.gender
    let name = this.formSearch?.value.name
    const params = this.getRequestParams(this.page, this.pageSize);
    console.log(this.activeServices.length)
    switch (this.activeServices.length){
      case 3 :
      case 0 :
        if (gender == "") {

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
        } else {
          this.userService.findAllByAgeAndNameAndGender(params, "" + this.minValue, "" + this.maxValue, name, gender)
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
        break
      case 1:
        if (gender == "") {

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
        } else {
          this.userService.findAllByAgeAndNameAndGenderAndCity(params, "" + this.minValue, "" + this.maxValue, name, gender,""+this.activeServices[0].idService)
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
        break
      case 2:
        console.log(this.activeServices[0].idService)
        console.log(this.activeServices[1].idService)
        if (gender == "") {

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
        } else {
          this.userService.findAllByAgeAndNameAndGenderAnd2City(params, "" + this.minValue, "" + this.maxValue, name, gender,""+this.activeServices[0].idService,""+this.activeServices[1].idService)
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
              }
            });
        }
        break

    }

  }

  getAddress(event: any) {
    if (event.target.checked) {
      this.activeSer = {
        // @ts-ignore
        idUser: this.idU,
        idService: event.target.value
      }
      // @ts-ignore
      this.activeServices.push(this.activeSer)
    } else {
      for (let j = 0; j < this.activeServices.length; j++) {
        if (this.activeServices[j].idService == event.target.value) {
          if (j == 0) {
            this.activeServices.splice(0, 1)
            console.log(0)
          } else {
            this.activeServices.splice(j, 1)
            console.log(j)
          }
        }
      }
    }
    this.activeServices
  }
}

