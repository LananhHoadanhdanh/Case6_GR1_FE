import {Role} from './role';


export interface UserToken {
  id?: string,
  avatar?: string,
  city?: string,
  confirm_password?: string,
  accessToken?: string;
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
  status_user_id?: string,
  enabled?: string,
  full_name?: string,
  roles: [Role];
}
