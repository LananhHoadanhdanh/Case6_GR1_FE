import {Component, OnInit} from '@angular/core';
import {SerProvidedService} from "../../../service/ser-provided.service";
import {ServiceProvided} from "../../../model/service-provided";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveService} from "../../../model/active-service";
import swal from "sweetalert";

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  serProvided: ServiceProvided[] = []
  serProvidedFree: ServiceProvided[] = []
  freeCheckedServiceArr: any[] = []
  serProvidedExtend: ServiceProvided[] = []
  serMinTime: ServiceProvided[] = []
  activeServices: ActiveService[] = []
  actSerData: ActiveService[] = []
  activeSer?: ActiveService
  time!: boolean;
  check?: boolean;
  idU = localStorage.getItem('USERID')
  public checksFree: Array<ServiceProvided> = [];
  public checksExtend: Array<ServiceProvided> = [];
  public checksTime: Array<ServiceProvided> = [];

  constructor(private service: SerProvidedService, private activatedRoute: ActivatedRoute, private router: Router
    , private form: FormBuilder) {
  }

  formService: FormGroup = this.form.group({
    minTime: new FormControl()
  })

  ngOnInit(): void {
    this.service.getAllFree().subscribe(res => {
      this.serProvidedFree = res;
      // @ts-ignore
      this.service.getAllActService(this.idU).subscribe(data => {

        for (let i = 0; i < this.serProvidedFree.length; i++) {
          this.freeCheckedServiceArr.push({
            // @ts-ignore
            id: this.serProvidedFree[i]?.id,
            // @ts-ignore
            name: this.serProvidedFree[i]?.name,
            // @ts-ignore
            status: false,
          })
        }
        for (let i = 0; i < this.freeCheckedServiceArr.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[j].idService == this.freeCheckedServiceArr[i]?.id) {
              this.freeCheckedServiceArr[i].status = true;
            }
          }
        }
        console.log(this.freeCheckedServiceArr)
      })
    })
    this.service.getAllExtend().subscribe(res => {
      this.serProvidedExtend = res;
    })
    this.service.SerMinTime().subscribe(res => {
      this.serMinTime = res;
    })
    this.checksFree = this.serProvidedFree
    this.checksExtend = this.serProvidedExtend
    this.checksTime = this.serMinTime
    this.check = true
  }

  getAllServiceAct(id: number) {
    this.service.getAllActService(id).subscribe(res => {
      this.actSerData = res;
    })
  }

  saveUpdate() {
    if (this.formService.value.minTime == 8) {
      this.activeSer = {
        // @ts-ignore
        idUser: this.idU,
        idService: this.formService.value.minTime
      }
      // @ts-ignore
      this.activeServices.push(this.activeSer)
    }
    // @ts-ignore

    if (this.activeServices.length != 0) {
      this.service.save(this.activeServices).subscribe(res => {
        swal("Update successful!", "You will be returned to the homepage", "success")
        this.router.navigate(['/homepage'])
      })
    } else {
      swal("Update successful!", "You will be returned to the homepage", "success")
      this.router.navigate(['/homepage'])
    }
  }

  back() {
    this.router.navigate(['/homepage'])
  }

  // @ts-ignore
  dataUpdate(event) {
    if (event.target.checked) {
      this.activeSer = {
        // @ts-ignore
        idUser: this.idU,
        idService: event.target.value
      }
      // @ts-ignore
      this.activeServices.push(this.activeSer)
    } else {
      for (let j = 0; j < this.activeServices.length; j++) {
        if (this.activeServices[j].idService == event.target.value) {
          if (j == 0) {
            this.activeServices.splice(0, 1)
          }
          this.activeServices.splice(j, 1)
        }
      }
    }

  }
}
