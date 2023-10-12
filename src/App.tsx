import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import EditPage from './pages/EditPage/EditPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
