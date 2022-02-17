import {ReportStatus} from "./report-status";
import {Order} from "./order";

export interface Report {
  id?: string;
  status?: ReportStatus;
  content?: string;
  date?: string;
  order?: Order;
}
