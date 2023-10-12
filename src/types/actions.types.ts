import { Action } from "redux";
import { IEmployee, INewEmployee } from "./common.types";
import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "../store/employees-reducer";

export interface IAddEmployeeAction extends Action {
  type: typeof ADD_EMPLOYEE;
  payload: INewEmployee;
}

export interface IEditEmployeeAction extends Action {
  type: typeof EDIT_EMPLOYEE;
  payload: IEmployee;
}