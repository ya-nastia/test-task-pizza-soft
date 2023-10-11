import { Action } from "redux";
import { employeesConfig } from "../config/employees";
import { IEmployee } from "../types/common.types";

const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

interface IAddEmployeeAction extends Action {
  type: string;
  payload: IEmployee;
}

const inititalState = {
  employees: employeesConfig,
};

const employeesReducer = (state = inititalState, action: IAddEmployeeAction) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      }
    default:
      return state;
  }
};

export const addEmployeeAC = (employee: IEmployee): IAddEmployeeAction => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export default employeesReducer;