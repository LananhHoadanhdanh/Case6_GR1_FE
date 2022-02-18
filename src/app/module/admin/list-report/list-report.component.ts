import { Component, OnInit } from '@angular/core';
import {Report} from "../../../model/report";
import {ReportService} from "../../../service/report.service";

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.css']
})
export class ListReportComponent implements OnInit {
report : Report []=[]
  constructor(private reportService :ReportService) { }

  ngOnInit(): void {
  this.loadAll()
  }
  loadAll(){
  this.reportService.getAll().subscribe(res=>{
    this.report=res;
    console.log(this.report)
  })
  }

  // @ts-ignore
  approve(event){
  this.reportService.approveReport(event).subscribe(()=>{
    this.ngOnInit()
  })
  }
}
