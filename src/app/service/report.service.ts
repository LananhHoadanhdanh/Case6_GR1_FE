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

  sendReport(report: Report) : Observable<Report> {
    return this.http.post(API_URL + '/reports', report)
  }

  approveReport(orderId: any) : Observable<Report>{
    return this.http.put<Report>(API_URL + `/reports/${orderId}/approve`, orderId)
  }

  getAllReportByRenter(renterId: any) : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + `users/${renterId}/reportsByRenter`)
  }

  getAllReportByProvider(providerId: any) : Observable<Report[]> {
    return this.http.get<Report[]>(API_URL + `users/${providerId}/reportsByProvider`)
  }
}
