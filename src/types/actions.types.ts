import { Action } from "redux";
import { IEmployee } from "./common.types";

export interface IAddEmployeeAction extends Action {
  type: string;
  payload: IEmployee;
}

export interface IEditEmployeeAction extends Action {
  type: string;
  payload: IEmployee;
}