import React from 'react';
import { Link } from 'react-router-dom';

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
        <p className="card-text">Role: {role}</p>
        <p className="card-text">Phone Number: {phone}</p>
        <Link to={`/${id}`} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  )
}

export default EmployeeCard;
