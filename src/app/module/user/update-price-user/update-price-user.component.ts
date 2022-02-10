import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-update-price-user',
  templateUrl: './update-price-user.component.html',
  styleUrls: ['./update-price-user.component.css']
})
export class UpdatePriceUserComponent implements OnInit {
  iUser = localStorage.getItem("USERID")

  // @ts-ignore
  user: User;
  price?: string;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  updatePrice() {
    // @ts-ignore
    this.userService.updatePrice(this.iUser, this.price).subscribe(() => {
      alert("Cập nhật thành công!")
    })
  }

}
