import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {User} from "../../../model/user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  data?: string;
  title = "cloudsSorage";
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  avatar?:string
  selectImage:any[]=[]
  userUpdate?:User

  idU = localStorage.getItem("USERID");
  formUser = new FormGroup({
    fullName: new FormControl(),
    city: new FormControl(),
    nationality: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    height: new FormControl(),
    weight: new FormControl(),
    hobby: new FormControl(),
    description: new FormControl(),
    request: new FormControl(),
    facebook: new FormControl(),
  })

  constructor( private userService :UserService,
               private storage: AngularFireStorage) {
  }

  ngOnInit(): void {

  }
  saveAll(){
    this.saveUser()
  }
  saveUser(){
    const user ={
      fullName: this.formUser.value.fullName,
      city: this.formUser.value.city,
      nationality: this.formUser.value.nationality,
      birthday: this.formUser.value.birthday,
      gender: this.formUser.value.gender,
      height: this.formUser.value.height,
      weight: this.formUser.value.weight,
      hobby: this.formUser.value.hobby,
      description: this.formUser.value.description,
      request: this.formUser.value.request,
      facebook: this.formUser.value.facebook,
    }
    this.userUpdate=user;
    this.userUpdate.avatar=this.avatar
    this.userService.updateUserProfile(this.idU,this.userUpdate).subscribe(()=>{
      console.log(this.userUpdate)
      alert("oke")
    })
  }

  updateFile() {
    // @ts-ignore
    document.getElementById("upfile").click();
  }
  // @ts-ignore
  onFile(event){
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          // @ts-ignore
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;

            }
            this.avatar=this.fb
            console.log(this.avatar)

          });
        })
      )
      .subscribe(url => {

      });

  }
  // @ts-ignore
}
