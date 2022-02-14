import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/users')
  }

  getAllUserByStatus(statusId: number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/usersByStatus?statusId=' + statusId)
  }

  registerSuccess(token: string): Observable<any> {
    return this.http.get<any>(API_URL + '/confirm-account?token=' + token);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/login', user);
  }

  newPassword(user: User, id: number): Observable<User> {
    return this.http.put<User>(API_URL + `/new-password/${id}`, user);
  }

  userDetail(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  getUserProfile(id: string | null): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  updateUserProfile(id: number, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}`, user);
  }

  list12NewServiceProvider():Observable<User[]>{
    return this.http.get<User[]>(API_URL+`/12newServiceProvider`)
  }

  list6UserVip():Observable<User[]>{
    return this.http.get<User[]>(API_URL+`/list6UserVip`)
  }

  // @ts-ignore
  updatePrice(id: number | null, price: string): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/uploadPrice?price=` + price, price);
  }

  browseAccount(id: string | undefined): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/browseAccount`, id);
  }

  getAllUserByView(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/usersByView')
  }

  getActiveAndVipUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/activeAndVipUsers')
  }

  rent8Female(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/rent8Female')
  }

  rent4Male(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/rent4Male')
  }

  lockAccount(id: string | undefined): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/lockAccount`, id);
  }

  updateVipAccount(id: string | undefined): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/updateVipAccount`, id);
  }

  pauseAccount(id: string | undefined): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/pauseAccount`, id);
  }

  getAllUserBySerProvided(id: string): Observable<User[]> {
    return this.http.get<User[]>(API_URL + '/serProvidedByUser?userId=' + id)
  }

  getShowList12UserSuitableForGender(gender :string |undefined ) :Observable<User[]>{
    return this.http.get<User[]>(API_URL+`/list12UserSuitableForGender/${gender}`)
  }

  increaseViews(id: number | null): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}/increaseViews`, id);
  }
  findUserAllByFullName(params: any,queryName :string): Observable<User[]> {
    return this.http.get<User[]>(API_URL+'/findUserAllByFullName?queryName='+queryName, { params });
  }
  findAllByAgeAndName(params: any,fromAge :string,toAge:string,name:string) :Observable<User[]>{
    return this.http.get<User[]>(API_URL+`/findAllByAgeAndName/${fromAge}/${toAge}/${name}`,{params})
  }
}
