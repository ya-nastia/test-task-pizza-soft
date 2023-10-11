import { combineReducers, legacy_createStore as createStore } from 'redux';
import employeesReducer from './employees-reducer';

const rootReducer = combineReducers({
  employees: employeesReducer
});

export const store = createStore(rootReducer);