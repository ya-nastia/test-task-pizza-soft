import React from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../../store/employees-selectors";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import './EmployeesPage.scss';


const EmployeesPage: React.FC = () => {
  const employees = useSelector(selectEmployees);

  return (
    <div className="employees-page">
      <h1>Employees Page</h1>
      <div className="employees-list">
        {
          employees.map(employee => {
            return (
              <EmployeeCard 
                key={employee.id}
                name={employee.name}
                role={employee.role}
                phone={employee.phone} 
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default EmployeesPage;