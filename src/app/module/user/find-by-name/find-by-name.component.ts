import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-find-by-name',
  templateUrl: './find-by-name.component.html',
  styleUrls: ['./find-by-name.component.css']
})
export class FindByNameComponent implements OnInit {
  tutorials: User[] = [];
  currentTutorial: User = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor(private tutorialService:UserService,private router: Router) { }

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

    this.tutorialService.getAllUser()
      .subscribe({
        next: (data) => {
          // @ts-ignore
          const { tutorials, totalItems } = data;
          this.tutorials = data;
          this.count = totalItems;
          console.log(this.tutorials);
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


  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }
}
