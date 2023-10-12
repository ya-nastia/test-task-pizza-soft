import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EditPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee } from '../../store/employees-selectors';
import InputMask from 'react-input-mask';
import { IEmployee } from '../../types/common.types';
import { editEmployeeAC } from '../../store/employees-reducer';
import { notifySuccess } from '../../utils/notify';

const EditPage = () => {
  let { id } = useParams();
  const employee = useSelector(selectEmployee(Number(id)));
  const dispatch = useDispatch();

  const [name, setName] = useState(employee.name);
  const [phone, setPhone] = useState(employee.phone);
  const [birthday, setBirthday] = useState(employee.birthday);
  const [role, setRole] = useState(employee.role);
  const [isArchive, setIsArchive] = useState(employee.isArchive);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleBirthdayChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  }, []);

  const handleRoleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  }, []);  

  const handleIsArchiveChange = useCallback(() => {
    setIsArchive(current => !current);
  }, []);

  const handleSubmitEdit = useCallback(() => {
    const editedEmployee: IEmployee = {
      id: employee.id,
      name,
      phone,
      birthday,
      role,
      isArchive,
    };
    dispatch(editEmployeeAC(editedEmployee));
    notifySuccess();
  }, [birthday, dispatch, employee.id, isArchive, name, phone, role]);
  
  return (
    <div className='edit-page'>

      <h1>Edit Page</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          placeholder="Enter your name" 
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <InputMask 
          mask="+7 (999) 999-99-99" 
          maskChar="_" 
          value={phone} 
          onChange={handlePhoneChange}
        >
          <input 
            className="form-control" 
            id="phone" 
            type="tel" 
            placeholder="Enter your phone number" 
          />
        </InputMask>
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date Of Birth</label>
        <InputMask 
          mask="99.99.9999"
          maskChar="_" 
          value={birthday} 
          onChange={handleBirthdayChange}
        >
          <input 
            className="form-control" 
            id="phone" 
            type="text" 
            placeholder="Enter your birthday" 
          />
        </InputMask>
      </div>

      <select className="form-select" value={role} onChange={handleRoleChange}>
        <option value="Повар">Повар</option>
        <option value="Официант">Официант</option>
        <option value="Водитель">Водитель</option>
      </select>

      <div className="form-check m-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="isArhive" 
          checked={isArchive}
          onChange={handleIsArchiveChange}
        />
        <label className="form-check-label" htmlFor="isArhive">
          В архиве
        </label>
      </div>

      <button className='btn btn-success' onClick={handleSubmitEdit}>Submit</button>
      <Link to='/' className='btn btn-danger ms-3'>To Home Page</Link>
    </div>
  )
}

export default EditPage;
