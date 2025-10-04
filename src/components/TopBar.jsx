import React from 'react';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

const TopBar = ({ toggleSidebar }) => {

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Menu toggle (for mobile) + Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
        >
          <FiMenu className="text-xl" />
        </button>
        <h1 className='text-xl font-semibold'>Hotel Khateshwar</h1>
      </div>

      {/* Right: Notifications + User Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-100 relative">
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <FiUser className="text-gray-500" />
          </div>
          <span className="hidden sm:inline"></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
