import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceProvided} from "../model/service-provided";
import {ActiveService} from "../model/active-service";

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SerProvidedService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + `/service`)
  }

  SerMinTime(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + `/serviceMinTime`)
  }

  getAllExtend(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + `/serviceExtend`)
  }

  getAllFree(): Observable<ServiceProvided[]> {
    return this.http.get<ServiceProvided[]>(API_URL + `/serviceFree`)
  }

  save(active: ActiveService[]): Observable<ActiveService[]> {
    return this.http.post<ActiveService[]>(API_URL + `/actService`, active)
  }

  delete(active: ActiveService[]): Observable<ActiveService[]> {
    // @ts-ignore
    return this.http.delete<ActiveService[]>(API_URL + `/deleteService`, active)
  }

}
