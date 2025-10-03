import React, { useState } from 'react';
import { FaPlus, FaFilePdf, FaUserShield, FaUserCog, FaUserTag, FaKey, FaEdit, FaTrash, FaClock, FaUsers, FaChartPie, FaListAlt } from 'react-icons/fa';

// Stats Card Component
const StatsCard = ({ title, value, description, icon, colorClass }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center"
             style={{ backgroundColor: `${colorClass.replace('text-', 'bg-')}100` }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// Role Card Component
const RoleCard = ({ role, onConfigure }) => {
  const roleIcons = {
    'Super Admin': <FaUserShield className="text-primary mr-1" />,
    'Branch Manager': <FaUserCog className="text-green-600 mr-1" />,
    'Tutor': <FaUserTag className="text-blue-600 mr-1" />,
    'Clerk': <FaKey className="text-purple-600 mr-1" />
  };

  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <img
        src={role.image}
        alt={role.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
          {roleIcons[role.name]} {role.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{role.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{role.users} Users</span>
          <button
            onClick={() => onConfigure(role)}
            className="text-primary text-sm font-medium flex items-center"
          >
            <FaEdit className="mr-1" /> Configure
          </button>
        </div>
      </div>
    </div>
  );
};

// Access Log Item Component
const AccessLogItem = ({ log }) => {
  const actionIcons = {
    'Admin Login': <FaUserShield className="text-primary mr-2" />,
    'Student Data Access': <FaUsers className="text-green-600 mr-2" />,
    'Fee Module Access': <FaKey className="text-blue-600 mr-2" />,
    'Schedule Update': <FaClock className="text-purple-600 mr-2" />
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div>
        <p className="text-sm font-medium text-gray-900 flex items-center">
          {actionIcons[log.action]} {log.action}
        </p>
        <p className="text-xs text-gray-500">{log.user} • {log.branch}</p>
      </div>
      <p className="text-xs text-gray-500">{log.time}</p>
    </div>
  );
};

// Role Table Row Component
const RoleTableRow = ({ role, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className="text-sm font-medium text-gray-900">{role.name}</div>
          <div className="text-sm text-gray-500">{role.description}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {role.permissions}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {role.users}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {role.lastAccess}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(role)}
          className="text-primary hover:text-primary/80 mr-3 flex items-center"
        >
          <FaEdit className="mr-1" /> Edit
        </button>
        <button
          onClick={() => onDelete(role)}
          className="text-red-600 hover:text-red-800 flex items-center"
        >
          <FaTrash className="mr-1" /> Delete
        </button>
      </td>
    </tr>
  );
};

// Chart Card Component
const ChartCard = ({ title, canvasId }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <FaChartPie className="mr-2 text-primary" /> {title}
      </h3>
      <div className="h-80">
        <canvas id={canvasId}></canvas>
      </div>
    </div>
  );
};

// Create Role Modal Component
const CreateRoleModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaUserTag className="mr-2 text-primary" /> Create New Role
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaPlus className="w-5 h-5 rotate-45" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe the role's purpose and access level"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permissions</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'User Management', 'Course Management', 'Student Records',
                  'Fee Management', 'Attendance', 'Reports',
                  'Settings', 'Branches', 'Certificates', 'Dashboard'
                ].map((permission, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`permission-${index}`}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor={`permission-${index}`} className="ml-2 text-sm text-gray-700">
                      {permission}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 flex items-center"
              >
                <FaUserTag className="mr-1" /> Create Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Roles Access Control Component
const RolesAccessControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stats] = useState([
    {
      id: 1,
      title: 'Total Roles',
      value: '12',
      description: 'Active roles',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      colorClass: 'text-primary'
    },
    {
      id: 2,
      title: 'Active Users',
      value: '89',
      description: 'Assigned roles',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: 'text-green-600'
    },
    {
      id: 3,
      title: 'Admin Logs',
      value: '2,456',
      description: 'This month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      colorClass: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Permissions',
      value: '156',
      description: 'Total defined',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012-2m0 4v4m0-6v2m6-2a2 2 0 100 4m0-4a2 2 0 012 2m0 4a2 2 0 100 4m0-4a2 2 0 012-2m0 4v4m0-6v2" />
        </svg>
      ),
      colorClass: 'text-purple-600'
    }
  ]);

  const [accessLogs] = useState([
    {
      id: 1,
      action: 'Admin Login',
      user: 'john@email.com',
      branch: 'Main Branch',
      time: '2 min ago'
    },
    {
      id: 2,
      action: 'Student Data Access',
      user: 'jane@email.com',
      branch: 'City Center',
      time: '15 min ago'
    },
    {
      id: 3,
      action: 'Fee Module Access',
      user: 'mike@email.com',
      branch: 'North Campus',
      time: '1 hour ago'
    }
  ]);

  const [roles] = useState([
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access',
      permissions: 'All Modules',
      users: '3',
      lastAccess: '2 min ago',
      image: 'https://images.unsplash.com/photo-1659896974794-5c850f933210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c2VjdXJlJTIwY29udHJvbCUyMHBhbmVsJTIwaW50ZXJmYWNlfGVufDF8MHx8fDE3NTc4NTA1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Branch Manager',
      description: 'Branch-specific access',
      permissions: '12 Permissions',
      users: '12',
      lastAccess: '5 min ago',
      image: 'https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c2VjdXJlJTIwY29udHJvbCUyMHBhbmVsJTIwaW50ZXJmYWNlfGVufDF8MHx8fDE3NTc4NTA1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Tutor',
      description: 'Course management',
      permissions: '8 Permissions',
      users: '45',
      lastAccess: '1 hour ago',
      image: 'https://images.unsplash.com/photo-1728917330520-9456e3f49529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c2VjdXJlJTIwY29udHJvbCUyMHBhbmVsJTIwaW50ZXJmYWNlfGVufDF8MHx8fDE3NTc4NTA1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const handleCreateRole = (e) => {
    e.preventDefault();
    // Add logic to create a new role
    console.log('Role created');
    setIsModalOpen(false);
  };

  const handleEdit = (role) => {
    console.log('Edit role:', role);
    // Add edit logic
  };

  const handleDelete = (role) => {
    console.log('Delete role:', role);
    // Add delete logic
  };

  const handleConfigure = (role) => {
    console.log('Configure role:', role);
    // Add configure logic
  };

  return (
    <section className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <FaUserShield className="mr-2 text-primary" /> Roles & Access Control
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaPlus className="mr-2" /> Create Role
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
            colorClass={stat.colorClass}
          />
        ))}
      </div>

      {/* Analytics and Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Permission Analytics" canvasId="permissionChart" />

        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaListAlt className="mr-2 text-primary" /> Access Logs
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {accessLogs.map((log) => (
              <AccessLogItem key={log.id} log={log} />
            ))}
          </div>
        </div>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onConfigure={handleConfigure}
          />
        ))}
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
        <div className="p-4 border-b border-neutral-200/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search permissions..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Roles</option>
              {roles.map(role => (
                <option key={role.id}>{role.name}</option>
              ))}
            </select>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center">
              <FaFilePdf className="mr-2" /> Export Logs
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Access</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {roles.map((role) => (
                <RoleTableRow
                  key={role.id}
                  role={role}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Role Modal */}
      <CreateRoleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateRole}
      />
    </section>
  );
};

export default RolesAccessControl;
