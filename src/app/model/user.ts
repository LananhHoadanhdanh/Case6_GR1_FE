import {Role} from "./role";
import {StatusUser} from "./status-user";

export interface User {
  id?: string,
  avatar?: string,
  birthday?: string,
  city?: string,
  confirm_password?: string,
  description?: string,
  email?: string,
  facebook?: string,
  gender?: string,
  height?: string,
  hobby?: string,
  nationality?: string,
  password?: string,
  phone_number?: string,
  price?: string,
  rent_count?: string,
  request?: string,
  start_time?: string,
  username?: string,
  view?: string,
  weight?: string,
  status?: StatusUser,
  enabled?: boolean,
  full_name?: string,
  roles?: [Role];
}
