import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Message} from "../model/message";
import {Observable} from "rxjs";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MessageServcieService {

  constructor(private http: HttpClient) {
  }

  save(message: Message): Observable<any> {
    return this.http.post<any>(API_URL + `/mess`, message)
  }

  getAllByIdRent(id: any): Observable<any> {
    return this.http.get<any>(API_URL + `/messRent/${id}`)
  }
  getOneByIdRent(id: any): Observable<any> {
    return this.http.get<any>(API_URL + `/messOneRent/${id}`)
  }
  getMess(idPro: any,idRe: any): Observable<any> {
    return this.http.get<any>(API_URL + `/mess/${idPro}/${idRe}`)
  }

}
