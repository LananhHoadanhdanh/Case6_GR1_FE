import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {User} from "../../../model/user";
import {ImageService} from "../../../service/image.service";
import {Image} from "../../../model/image";
import swal from "sweetalert";
import {Router} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  data: string="";
  title = "cloudsSorage";
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  // thêm ảnh
  public loading = false;
  public loading1 = false;
  time!: boolean;
  avatar?: string
  imgs: any[] = [];
  selectedImages: any[] = []
  min:string=""
  max?:string=""

  userUpdate?: User

  idU = localStorage.getItem("USERID");
  formUser = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    nationality: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    height: new FormControl('',[Validators.required,Validators.min(140),Validators.max(200)]),
    weight: new FormControl('',[Validators.required,Validators.min(40),Validators.max(100)]),
    hobby: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    request: new FormControl('',[Validators.required]),
    facebook: new FormControl('',[Validators.required]),
  })

  constructor(private userService: UserService,
              private storage: AngularFireStorage,
              private imageService: ImageService,
              private router:Router
              ) {
    this.min= moment(moment().subtract(29200, 'days').calendar()).format("YYYY-MM-DD")
    this.max= moment(moment().subtract(5840, 'days').calendar()).format("YYYY-MM-DD")
  }

  ngOnInit(): void {

  }
 get fullName (){
    return this.formUser.get('fullName')
 } get city (){
    return this.formUser.get('city')
 } get nationality (){
    return this.formUser.get('nationality')
 } get birthday (){
    return this.formUser.get('birthday')
 } get gender (){
    return this.formUser.get('gender')
 } get height (){
    return this.formUser.get('height')
 } get weight (){
    return this.formUser.get('weight')
 } get hobby (){
    return this.formUser.get('hobby')
 } get description (){
    return this.formUser.get('description')
 }get request (){
    return this.formUser.get('request')
 }get facebook (){
    return this.formUser.get('facebook')
 }
  saveAll() {
    this.saveImage()
    this.saveUser()


  }

  saveUser() {
    const user = {
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
    this.userUpdate = user;
    this.userUpdate.avatar = this.avatar
    // @ts-ignore
    this.userService.updateUserProfile(this.idU, this.userUpdate).subscribe(() => {
      console.log(this.userUpdate)
      swal("Update successful!", "You will be returned to the homepage", "success")
      this.router.navigate(['/homepage'])

    })
  }

  saveImage() {
    if (this.selectedImages.length !== 0) {
      for (let i = 0; i < this.selectedImages.length; i++) {
        let selectedImage = this.selectedImages[i];
        var n = Date.now();
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              const image: Image = {
                link: url,
                user: {
                  // @ts-ignore
                  id: this.idU
                }
              };
              console.log(url);
              this.imageService.create(image).subscribe(() => {
                console.log('thêm thành công 3 ảnh')
              });
            });
          })
        ).subscribe();
      }
    }


  }

  updateFile() {
    // @ts-ignore
    document.getElementById("upfile").click();
  }

  updateFile3() {
    // @ts-ignore
    document.getElementById("upfile3").click();
  }

  // @ts-ignore
  updateAvatar(event) {
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
            this.avatar = this.fb
            console.log(this.avatar)
          });
        })
      )
      .subscribe(url => {

      });

  }

  // @ts-ignore
  showPreview(event: any) {
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
