import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './EditPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee } from '../../store/employees-selectors';
import { IEmployee } from '../../types/common.types';
import { editEmployeeAC } from '../../store/employees-reducer';
import { notifyError, notifySuccess } from '../../utils/notify';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import { isCompleteBirthday, isCompletePhoneNumber } from '../../utils/validation';

const EditPage: React.FC = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const employee = useSelector(selectEmployee(Number(id)));
  const dispatch = useDispatch();

  const [name, setName] = useState(employee ? employee.name : '');
  const [phone, setPhone] = useState(employee ? employee.phone : '');
  const [birthday, setBirthday] = useState(employee ? employee.birthday : '');
  const [role, setRole] = useState(employee ? employee.role : '');
  const [isArchive, setIsArchive] = useState(employee ? employee.isArchive : false);

  useEffect(() => {
    if (!id || isNaN(Number(id)) || !employee) {
      navigate('/');
    }
  }, [id, employee]);

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
    if (name && isCompletePhoneNumber(phone) && isCompleteBirthday(birthday)) {
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
    } else {
      notifyError('All Fields Are Required');
    }
  }, [birthday, dispatch, employee, isArchive, name, phone, role]);
  
  return (
    <div className='edit-page'>

      <h1>Edit Page</h1>

      <EmployeeForm 
        name={name}
        handleNameChange={handleNameChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        birthday={birthday}
        handleBirthdayChange={handleBirthdayChange}
        role={role}
        handleRoleChange={handleRoleChange}
        isArchive={isArchive}
        handleIsArchiveChange={handleIsArchiveChange}
        handleSubmit={handleSubmitEdit}
      />
    </div>
  )
}

export default EditPage;
