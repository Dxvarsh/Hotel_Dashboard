import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home.jsx';
import RoomStatus from '../pages/RoomStatus';
import QuickActions from '../pages/QuickActions';
import ActiveBookings from '../pages/ActiveBookings';
import Analytics from '../pages/Analytics';
const Routing = () => {
  return (
    <Routes>
      <Route path="/Hotel_Dashboard/Admin/" element={<Home />} />
      <Route path="/Hotel_Dashboard/Admin/login" element={<Login />} />

      {/* Admin routes wrapped in AdminLayout */}
      <Route path="/Hotel_Dashboard/Admin/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="room-status" element={<RoomStatus />} />
        <Route path="quick-actions" element={<QuickActions />} />
        <Route path="active-bookings" element={<ActiveBookings />} />
        <Route path="analytics" element={<Analytics />} />
        {/* Add other admin routes here */}
      </Route>
    </Routes>
  );
};

export default Routing;
