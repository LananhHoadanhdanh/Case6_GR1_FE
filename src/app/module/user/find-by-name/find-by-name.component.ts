import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat";
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";


@Component({
  selector: 'app-find-by-name',
  templateUrl: './find-by-name.component.html',
  styleUrls: ['./find-by-name.component.css']
})
export class FindByNameComponent implements OnInit {
  users: User[] = [];
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
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

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.userService.findUserAllByFullName(params,'a')
      .subscribe({
        next: (data) => {

          this.users = data;
          console.log(this.users);
          console.log("dũng")

        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: User , index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


}
