import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private orderService :OrderService) { }

  ngOnInit(): void {
  }

   backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
