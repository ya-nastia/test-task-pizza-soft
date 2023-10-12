import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../../store/employees-selectors";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import './EmployeesPage.scss';

const EmployeesPage: React.FC = () => {
  const employees = useSelector(selectEmployees);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sortOrder, setSortOrder] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [archiveOnly, setArchiveOnly] = useState<boolean>(false);

  const handleChangeSortOrder = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  }, []);

  const handleChangePositionFilter = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setPositionFilter(e.target.value);
  }, []);

  const handleChangeArchiveFilter = useCallback(() => {
    setArchiveOnly(current => !current)
  }, []);

  const handleSortConfirm = useCallback(() => {
    let sortedEmployees = [...employees];

      if (sortOrder && sortOrder === 'name') {
        sortedEmployees.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder && sortOrder === 'birthday') {
        sortedEmployees.sort((a, b) => a.birthday.localeCompare(b.birthday));
      }

      if (positionFilter) {
        sortedEmployees = sortedEmployees.filter(employee => employee.role === positionFilter);
      }

      if (archiveOnly) {
        sortedEmployees = sortedEmployees.filter(employee => employee.isArchive);
      }

      setFilteredEmployees(sortedEmployees);
  }, [archiveOnly, employees, positionFilter, sortOrder]);

  return (
    <div className="employees-page">
      <h1>Employees Page</h1>

      <div className="filter-section">

        <select 
          className="form-select" 
          value={sortOrder} 
          onChange={handleChangeSortOrder}
        >
          <option value="">Sort by</option>
          <option value="name">Sort By Name</option>
          <option value="birthday">Sort By Birthday</option>
        </select>

        <select 
          className="form-select" 
          value={positionFilter} 
          onChange={handleChangePositionFilter}
        >
          <option value="">Show All</option>
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>

        <div className="form-check m-3">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="isArhive" 
            checked={archiveOnly}
            onChange={handleChangeArchiveFilter}
          />
          <label className="form-check-label" htmlFor="isArhive">
            In Archive
          </label>
        </div>

        <button onClick={handleSortConfirm} className="btn btn-primary">Sort</button>

      </div>

      <div className="employees-list">
        {
          filteredEmployees.map(employee => {
            return (
              <EmployeeCard 
                key={employee.id}
                id={employee.id}
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