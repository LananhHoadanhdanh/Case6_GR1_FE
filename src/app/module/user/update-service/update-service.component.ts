import {Component, OnInit} from '@angular/core';
import {SerProvidedService} from "../../../service/ser-provided.service";
import {ServiceProvided} from "../../../model/service-provided";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveService} from "../../../model/active-service";
import swal from "sweetalert";
import {log} from "util";

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  serProvided: ServiceProvided[] = []
  serProvidedFree: ServiceProvided[] = []
  freeCheckedServiceArr: any[] = []
  minTimeServiceArr: any[] = []
  extendCheckedServiceArr: any[] = []
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

  formService = new FormGroup({
    minTime: new FormControl("")
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
              this.activeSer = {
                // @ts-ignore
                idUser: this.idU,
                idService: data[j].idService
              }
              // @ts-ignore
              this.activeServices.push(this.activeSer)
            }
          }
        }
      })
    })
    this.service.getAllExtend().subscribe(res => {
      this.serProvidedExtend = res;
      // @ts-ignore
      this.service.getAllActService(this.idU).subscribe(data => {
        for (let i = 0; i < this.serProvidedExtend.length; i++) {
          this.extendCheckedServiceArr.push({
            // @ts-ignore
            id: this.serProvidedExtend[i]?.id,
            // @ts-ignore
            name: this.serProvidedExtend[i]?.name,
            // @ts-ignore
            status: false,
          })
        }
        for (let i = 0; i < this.extendCheckedServiceArr.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[j].idService == this.extendCheckedServiceArr[i]?.id) {
              this.extendCheckedServiceArr[i].status = true;
              this.activeSer = {
                // @ts-ignore
                idUser: this.idU,
                idService: data[j].idService
              }
              // @ts-ignore
              this.activeServices.push(this.activeSer)
            }
          }
        }
      })
    })
    this.service.SerMinTime().subscribe(res => {
      this.serMinTime = res;
      // @ts-ignore
      this.service.getAllActService(this.idU).subscribe(data => {
        for (let i = 0; i < this.serMinTime.length; i++) {
          this.minTimeServiceArr.push({
            id: this.serMinTime[i]?.id
          })
        }
        for (let i = 0; i < this.minTimeServiceArr.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[j].idService == this.minTimeServiceArr[i]?.id) {
              this.formService = new FormGroup({
                minTime: new FormControl("" + this.minTimeServiceArr[i]?.id)
              })
            }
          }
        }
      })
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
    if (this.formService.value.minTime == 8 || this.formService.value.minTime == 9) {
      this.activeSer = {
        // @ts-ignore
        idUser: this.idU,
        idService: this.formService.value.minTime
      }
      // @ts-ignore
      this.activeServices.push(this.activeSer)
    }
    if (this.activeServices.length != 0) {
      // @ts-ignore
      this.service.delete(this.idU).subscribe(next => {
        console.log("delete")
        this.service.save(this.activeServices).subscribe(res => {
          swal("Update successful!", "You will be returned to the homepage", "success")
          this.router.navigate(['/homepage'])
        })
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
            console.log(0)
          }else {
          this.activeServices.splice(j, 1)
          console.log(j)}
        }
      }
    }
    console.log(this.activeServices)
  }
}
