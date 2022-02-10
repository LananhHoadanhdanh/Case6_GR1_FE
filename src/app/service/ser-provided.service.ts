import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceProvided} from "../model/service-provided";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SerProvidedService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + '/service')
  }

  SerMinTime(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + '/serviceMinTime')
  }

  getAllExtend(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + '/serviceExtend')
  }

  getAllFree(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + '/serviceFree')
  }

}
