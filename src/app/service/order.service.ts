import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/image";
import {environment} from "../../environments/environment";
import {Order} from "../model/order";
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  findAllOrderByRenter(id: any) :Observable<Order[]>{
    return this.http.get<Order[]>(API_URL+`/renter/${id}/orders`)
  }

  findAllOrderByProvider(id: any) :Observable<Order[]>{
    return this.http.get<Order[]>(API_URL+`/provider/${id}/orders`)
  }
  saveOrder(order :Order):Observable<any>{
    return this.http.post<any>(API_URL+`/order`,order)
  }
}
