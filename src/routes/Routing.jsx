import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import Courses from '../pages/Courses';
import Branches from '../pages/Branch';
import Fees from '../pages/Fees';
import Attendance from '../pages/Attendance';
import CertificateManagement from '../pages/CertificateManagement';
import StaffManagement from '../pages/StaffManagement';
import RolesAccessControl from '../pages/RolesAccessControl';
import Home from '../pages/Home.jsx';

const Routing = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/Dashboard/login" element={<Login />} />

      {/* Admin routes wrapped in AdminLayout */}
      <Route path="/Dashboard/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="branches" element={<Branches />} />
        <Route path="fees" element={<Fees />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="certificates" element={<CertificateManagement />} />
        <Route path="staff" element={<StaffManagement />} />
        <Route path="roles" element={<RolesAccessControl />} />
        {/* Add other admin routes here */}
      </Route>
    </Routes>
  );
};

export default Routing;
