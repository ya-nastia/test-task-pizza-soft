import { RootState } from ".";

export const selectEmployees = (state: RootState) => state.employees.employees;