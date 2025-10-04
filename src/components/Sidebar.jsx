// src/admin/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';
import { FaHome, FaHotel, FaBolt, FaBook, FaChartBar, FaBell } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({ toggleSidebar }) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <FaHome className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/dashboard", active: true },
        { id: "room-status", label: "Room Status", icon: <FaHotel className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/room-status" },
        { id: "quick-actions", label: "Quick Actions", icon: <FaBolt className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/quick-actions" },
        { id: "active-bookings", label: "Active Bookings", icon: <FaBook className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/active-bookings" },
        { id: "analytics", label: "Analytics", icon: <FaChartBar className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/analytics" },
        // { id: "notifications", label: "Notifications", icon: <FaBell className="w-5 h-5 mr-3" />, path: "/Hotel_Dashboard/Admin/notifications" },
    ];

    return (
        <div className="h-screen px-3 py-4 overflow-y-auto">
            <div className="flex justify-between items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md">
                <img src={Logo} alt="Logo" className="w-20 h-20" />
                <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
                    <IoClose className="text-xl" />
                </button>
            </div>
            <div className="space-y-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'
                            }`
                        }
                        onClick={toggleSidebar}
                    >
                        <div className="h-full text-lg">{item.icon}</div>
                        <h3 className="text-md">{item.label}</h3>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
