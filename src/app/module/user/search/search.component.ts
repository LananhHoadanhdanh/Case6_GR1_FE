import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  idU = localStorage.getItem("USERID");
  user?: User;
  users:User[]=[]
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  formSearch=new FormGroup({
    name:new FormControl("")
  })
  constructor(private userService: UserService,
              private router: Router) {
  }
  ngOnInit(): void {
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  // retrieveTutorials(): void {
  //   const params = this.getRequestParams(this.title, this.page, this.pageSize);
  //   this.userService.findUserAllByFullName(params,'a')
  //     .subscribe({
  //       next: (data) => {
  //         this.users = data;
  //         for (let i=0; i<this.users.length;i++){
  //           // @ts-ignore
  //           this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r=>{
  //             // @ts-ignore
  //             this.users[i].myService=r
  //           })
  //         }
  //         console.log(this.users);
  //         console.log("dũng")
  //
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     });
  // }
  handlePageChange(event: number): void {
    this.page = event;
    this.searchAll();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.searchAll();
  }

  refreshList(): void {
    this.searchAll();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: User , index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  showDetail(id: any) {
    this.userService.increaseViews(id).subscribe(() => {
      this.router.navigate(["detail/" + id])
    })
  }
  searchAll(){
    let name=this.formSearch?.value.name
    console.log(name)
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.userService.findUserAllByFullName(params,name)
      .subscribe({
        next: (data) => {
          this.users = data;
          for (let i=0; i<this.users.length;i++){
            // @ts-ignore
            this.userService.getAllUserBySerProvided(this.users[i].id).subscribe(r=>{
              // @ts-ignore
              this.users[i].myService=r
            })
          }
          console.log(this.users);
          console.log("dũng")

        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
