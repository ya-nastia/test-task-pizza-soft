import React from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

interface IEmployeeFormProps {
  name: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phone: string;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  birthday: string;
  handleBirthdayChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  role: string;
  handleRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isArchive:  boolean;
  handleIsArchiveChange: () => void;
  handleSubmit: () => void;
}

const EmployeeForm: React.FC<IEmployeeFormProps> = ({
  name, 
  handleNameChange,
  phone,
  handlePhoneChange,
  birthday,
  handleBirthdayChange,
  role,
  handleRoleChange,
  isArchive,
  handleIsArchiveChange,
  handleSubmit,
}) => {
  return (
    <div>
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
        <option value="cook">Повар</option>
        <option value="waiter">Официант</option>
        <option value="driver">Водитель</option>
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

      <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
      <Link to='/test-task-pizza-soft' className='btn btn-danger ms-3'>To Home Page</Link>
    </div>
  )
}

export default EmployeeForm;
