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
    gender: new FormControl(""),
    view: new FormControl(""),
    rent: new FormControl(""),
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
    let rent = this.formSearch?.value.rent
    let view = this.formSearch?.value.view
    console.log(view + "view")
    console.log(rent + "rent")
    const params = this.getRequestParams(this.page, this.pageSize);
    console.log(this.activeServices.length)

    if (gender == "") {
      switch (this.activeServices.length) {
        case 3:
        case 0:
          if (view == "" && rent == "") {
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
          if (view == 1 && rent == "") {
          }
          if (view == 2 && rent == "") {
          }
          if (view == "" && rent == 1) {
          }
          if (view == "" && rent == 2) {
          }
          break;
        case 1:
          break;
        case 2:
          if (view == 1 && rent == "") {
          }
          if (view == 2 && rent == "") {
          }
          if (view == "" && rent == 1) {
          }
          if (view == "" && rent == 2) {
          }
          break;
      }
    } else {
      switch (this.activeServices.length) {
        case 0:
        case 3:
          if (view == 1 && rent == "") {
          }
          if (view == 2 && rent == "") {
          }
          if (view == "" && rent == 1) {
          }
          if (view == "" && rent == 2) {
          }
          break;
        case 1:
          if (view == 1 && rent == "") {
          }
          if (view == 2 && rent == "") {
          }
          if (view == "" && rent == 1) {
          }
          if (view == "" && rent == 2) {
          }
          break
        case 2:
          if (view == 1 && rent == "") {
            this.userService.findAllByAgeAndNameAndGenderAnd2CityViewDesc(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService, "" + this.activeServices[1].idService)
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
          if (view == 2 && rent == "") {
            this.userService.findAllByAgeAndNameAndGenderAnd2CityViewAsc(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService, "" + this.activeServices[1].idService)
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
          if (view == "" && rent == 1) {
            this.userService.findAllByAgeAndNameAndGenderAnd2CityRentDesc(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService, "" + this.activeServices[1].idService)
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
          if (view == "" && rent == 2) {
            this.userService.findAllByAgeAndNameAndGenderAnd2CityRentAsc(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService, "" + this.activeServices[1].idService)
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


    switch (this.activeServices.length) {
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
          this.userService.findAllByAgeAndNameAndGenderAndCity(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService)
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
          this.userService.findAllByAgeAndNameAndGenderAnd2City(params, "" + this.minValue, "" + this.maxValue, name, gender, "" + this.activeServices[0].idService, "" + this.activeServices[1].idService)
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

