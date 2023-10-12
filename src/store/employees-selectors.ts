import { RootState } from ".";

export const selectEmployees = (state: RootState) => state.employees.employees;

export const selectEmployee = (id: number) => (state: RootState) => {
  return state.employees.employees.filter(employee => employee.id === id)[0];
};