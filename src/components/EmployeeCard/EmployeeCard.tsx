import React from 'react';

interface IEmployeeCard {
  name: string;
  role: string;
  phone: string;
}

const EmployeeCard: React.FC<IEmployeeCard> = ({ name, role, phone }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Role: {role}</p>
        <p className="card-text">Phone Number: {phone}</p>
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  )
}

export default EmployeeCard;
