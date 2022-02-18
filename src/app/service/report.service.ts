import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../model/report";
import * as http from "http";
import {environment} from "../../environments/environment";
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + '/reports')
  }

  getOne(orderId: any) : Observable<Report> {
    return this.http.get<Report>(API_URL + `/reports/${orderId}`)
  }

  getAllByOrder(orderId: any) : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + `/orders/${orderId}/reports`)
  }

  sendReport(report: Report) : Observable<Report> {
    return this.http.post(API_URL + '/reports', report)
  }

  approveReport(id: any) : Observable<Report>{
    return this.http.put<Report>(API_URL + `/reports/${id}/approve`, id)
  }

  getAllReportByRenter(renterId: any) : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + `users/${renterId}/reportsByRenter`)
  }

  getAllReportByProvider(providerId: any) : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + `users/${providerId}/reportsByProvider`)
  }
}
