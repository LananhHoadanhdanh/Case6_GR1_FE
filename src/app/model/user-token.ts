import {Role} from './role';


export interface UserToken {
  id?: string,
  avatar?: string,
  city?: string,
  confirmPassword?: string,
  accessToken?: string;
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
  statusUserId?: string,
  enabled?: string,
  fullName?: string,
  roles: [Role];
}
