import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className='not-found-page'>
      <h1>Page Not Found</h1>
      <Link to='/' className='btn btn-primary'>Go To Home Page</Link>
    </div>
  )
}

export default NotFoundPage;
