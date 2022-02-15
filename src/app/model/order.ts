import {User} from "./user";
import {OrderStatus} from "./order-status";

export interface Order {
  id?: string
  bookingTime?: string;
  startTime?: string;
  endTime?: string;
  timeRent?: any;
  status?: OrderStatus;
  provider?: User;
  renter?: User
}
