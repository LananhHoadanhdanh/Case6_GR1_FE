import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  updateFile(){
    // @ts-ignore
    document.getElementById("upfile").click();
  }
  // @ts-ignore
  sub(obj) {

  }
}
