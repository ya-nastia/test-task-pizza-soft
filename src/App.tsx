import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import EditPage from './pages/EditPage/EditPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateEmployeePage from './pages/CreateEmployeePage/CreateEmployeePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test-task-pizza-soft" element={<EmployeesPage />} />
        <Route path="/test-task-pizza-soft/edit-employee/:id" element={<EditPage />} />
        <Route path="/test-task-pizza-soft/create-employee" element={<CreateEmployeePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
