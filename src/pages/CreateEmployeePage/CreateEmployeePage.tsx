import React, { useCallback, useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import { useDispatch } from 'react-redux';
import { addEmployeeAC } from '../../store/employees-reducer';
import './CreateEmployeePage.scss';
import { notifyError, notifySuccess } from '../../utils/notify';
import { isCompleteBirthday, isCompletePhoneNumber } from '../../utils/validation';

const CreateEmployeePage: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [role, setRole] = useState('cook');
  const [isArchive, setIsArchive] = useState(false);

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

  const handleCreateEmployee = useCallback(() => {
    if (name && isCompletePhoneNumber(phone) && isCompleteBirthday(birthday)) {
      const newEmployee = {
        name,
        phone,
        birthday,
        role,
        isArchive,
      };
  
      console.log(newEmployee);
  
      dispatch(addEmployeeAC(newEmployee));
      notifySuccess();
    } else {
      notifyError('All Fields Are Required');
    }
  }, [birthday, dispatch, isArchive, name, phone, role]);

  return (
    <div className='create-page'>
      <h1>Create Employee Page</h1>

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
        handleSubmit={handleCreateEmployee}
      />
    </div>
  )
}

export default CreateEmployeePage;
