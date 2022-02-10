import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Image} from "../model/image";
import {Observable} from "rxjs";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  create(image:Image) :Observable<Image>{
    return this.http.post<Image>(API_URL+'/loadImage',image)
  }
}
