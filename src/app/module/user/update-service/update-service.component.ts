import {Component, OnInit} from '@angular/core';
import {SerProvidedService} from "../../../service/ser-provided.service";
import {ServiceProvided} from "../../../model/service-provided";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveService} from "../../../model/active-service";

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  serProvided: ServiceProvided[] = []
  serProvidedFree: ServiceProvided[] = []
  serProvidedExtend: ServiceProvided[] = []
  SerMinTime: ServiceProvided[] = []
  activeServices: ActiveService[] = []

  constructor(private service: SerProvidedService, private activatedRoute: ActivatedRoute, private router: Router
    , private form: FormBuilder) {
  }

  formService: FormGroup = this.form.group({})

  ngOnInit(): void {
    this.service.getAllFree().subscribe(res => {
      this.serProvidedFree = res;
    })
    this.service.getAllExtend().subscribe(res => {
      this.serProvidedExtend = res;
    })
    this.service.SerMinTime().subscribe(res => {
      this.SerMinTime = res;
    })
  }

}
