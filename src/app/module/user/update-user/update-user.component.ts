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
  // thêm ảnh
  public loading = false;
  public loading1 = false;
  public loading2 = false;
  avatar?:string
  imgs: any[] = [];
  selectedImages:any[]=[]

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
    this.loading1 = true;
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
  showPreview(event: any) {
    console.log(event)
    this.loading = true;
    let newSelectedImages = [];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      newSelectedImages = event.target.files;
      for (let i = 0; i < event.target.files.length; i++) {
        this.selectedImages.push(event.target.files[i]);
      }
    } else {
      this.selectedImages = [];
    }
    if (newSelectedImages.length !== 0) {
      for (let i = 0; i < newSelectedImages.length; i++) {
        let selectedImage = newSelectedImages[i];
        var n = Date.now();
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.imgs.push(url);
              console.log(url)
              if (this.imgs.length == newSelectedImages.length) {
                this.loading = false;
              }
            }, error => {
              console.log(error)
            });
          })
        ).subscribe(() => {

        });
      }
    }
}
}
