import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/image";
import {environment} from "../../environments/environment";
import {Order} from "../model/order";
import {User} from "../model/user";
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(API_URL + '/orders')
  }

  getOne(id: any): Observable<Order>{
    return this.http.get<Order>(API_URL + `/orders/${id}`)
  }

  findAllOrderByRenter(id: any) :Observable<Order[]>{
    return this.http.get<Order[]>(API_URL+`/renter/${id}/orders`)
  }

  findAllOrderByProvider(id: any) :Observable<Order[]>{
    return this.http.get<Order[]>(API_URL+`/provider/${id}/orders`)
  }

  changeStatus(id: any, statusId: any): Observable<Order> {
    return this.http.put<Order>(API_URL + `/orders/${id}/changeStatus?statusId=${statusId}`, statusId)
  }

  deleteOrder(id: any): Observable<Order> {
    return this.http.delete(API_URL + `/orders/${id}`)
  }

  saveOrder(order :Order):Observable<any>{
    return this.http.post<any>(API_URL+`/order`,order)
  }
  getCompletedOrder():Observable<Order[]>{
    return this.http.get<Order[]>(API_URL+`/completedOrder`)
  }
}
