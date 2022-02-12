import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ImageService} from "../../../service/image.service";
import {Image} from "../../../model/image";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  x: any;
  images: Image[] = [];

  @Input() userId?: string;



  constructor(private router: Router,
              private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.findAllImageByUser(this.userId).subscribe(res => {
      this.images = res
    })
  }

  openImg(imgName: any) {
    this.x = document.getElementsByClassName("picture");
    console.log(this.x)
    for (let i = 0; i < this.x.length; i++) {
      this.x[i].style.display = "none";
    }
    // @ts-ignore
    document.getElementById(imgName).style.display = "block";
  }
}
