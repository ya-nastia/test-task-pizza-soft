import { employeesConfig } from "../config/employees";
import { IEmployee, INewEmployee } from "../types/common.types";
import { IAddEmployeeAction, IEditEmployeeAction } from "../types/actions.types";

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';

const inititalState = {
  employees: employeesConfig,
};

const employeesReducer = (state = inititalState, action: IAddEmployeeAction | IEditEmployeeAction) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const newEmployee: IEmployee = {
        id: state.employees.length,
        ...action.payload,
      };
      return {
        ...state,
        employees: [...state.employees, newEmployee],
      }
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(employee => {
          if (employee.id === action.payload.id) {
            return action.payload;
          }
          return employee;
        })
      }
    default:
      return state;
  }
};

export const addEmployeeAC = (employee: INewEmployee): IAddEmployeeAction => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const editEmployeeAC = (employee: IEmployee): IEditEmployeeAction => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});

export default employeesReducer;