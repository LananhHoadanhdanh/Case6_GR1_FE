import {User} from "./user";

export interface Message {
  id?:any;
  content?:any;
  idPro?:User;
  idUs?:User;
  sent?:string;
}
