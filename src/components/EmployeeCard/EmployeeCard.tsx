import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeCard.scss';

interface IEmployeeCard {
  id: number;
  name: string;
  role: string;
  phone: string;
}

const EmployeeCard: React.FC<IEmployeeCard> = ({ id, name, role, phone }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><b>Role:</b> <span>{role}</span></p>
        <p className="card-text"><b>Phone Number:</b> <span>{phone}</span></p>
        <Link to={`/edit-employee/${id}`} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  )
}

export default EmployeeCard;
