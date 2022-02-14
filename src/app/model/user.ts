import {Role} from "./role";
import {StatusUser} from "./status-user";
import {ServiceProvided} from "./service-provided";

export interface User {
  id?: string,
  avatar?: string,
  birthday?: string,
  city?: string,
  confirmPassword?: string,
  description?: string,
  email?: string,
  facebook?: string,
  gender?: string,
  height?: string,
  hobby?: string,
  nationality?: string,
  password?: string,
  phoneNumber?: string,
  price?: string,
  rentCount?: string,
  request?: string,
  startTime?: string,
  username?: string,
  view?: string,
  weight?: string,
  status?: StatusUser,
  enabled?: boolean,
  fullName?: string,
  roles?: [Role];
  myService?:[ServiceProvided]
  age?:string;
}
