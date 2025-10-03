import React, { useState } from 'react';
import { FaPlus, FaEye, FaUser, FaChalkboardTeacher, FaUserTie, FaBuilding, FaEdit, FaCalendarAlt, FaUserTimes } from 'react-icons/fa';

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

// Staff Card Component
const StaffCard = ({ staff, onViewProfile }) => {
  const roleIcons = {
    'Web Development Tutor': <FaChalkboardTeacher className="text-primary mr-1" />,
    'Data Science Tutor': <FaChalkboardTeacher className="text-green-600 mr-1" />,
    'Digital Marketing Tutor': <FaChalkboardTeacher className="text-blue-600 mr-1" />,
    'Branch Manager': <FaUserTie className="text-purple-600 mr-1" />
  };

  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <img
        src={staff.image}
        alt={staff.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{staff.name}</h3>
        <p className="text-sm text-gray-600 mb-1 flex items-center">
          {roleIcons[staff.role]} {staff.role}
        </p>
        <p className="text-sm text-gray-500 mb-4">{staff.experience} experience</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {staff.students ? `${staff.students} Students` : 'N/A'}
          </span>
          <button
            onClick={() => onViewProfile(staff)}
            className="text-primary text-sm font-medium flex items-center"
          >
            <FaEye className="mr-1" /> View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Staff Table Row Component
const StaffTableRow = ({ staff, onEdit, onSchedule, onDeactivate }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Inactive': 'bg-gray-100 text-gray-800'
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={staff.avatar}
            alt={staff.name}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{staff.name}</div>
            <div className="text-sm text-gray-500">{staff.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {staff.role}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {staff.branch}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {staff.students || '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[staff.status]}`}>
          {staff.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(staff)}
          className="text-primary hover:text-primary/80 mr-3 flex items-center"
        >
          <FaEdit className="mr-1" /> Edit
        </button>
        <button
          onClick={() => onSchedule(staff)}
          className="text-blue-600 hover:text-blue-800 mr-3 flex items-center"
        >
          <FaCalendarAlt className="mr-1" /> Schedule
        </button>
        <button
          onClick={() => onDeactivate(staff)}
          className="text-red-600 hover:text-red-800 flex items-center"
        >
          <FaUserTimes className="mr-1" /> Deactivate
        </button>
      </td>
    </tr>
  );
};

// Add Staff Modal Component
const AddStaffModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Add New Staff</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option>Select Role</option>
                  <option>Web Development Tutor</option>
                  <option>Data Science Tutor</option>
                  <option>Digital Marketing Tutor</option>
                  <option>Branch Manager</option>
                  <option>Admin Staff</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option>Select Branch</option>
                  <option>Main Branch</option>
                  <option>City Center</option>
                  <option>North Campus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  min="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="List qualifications, certifications, etc."
              ></textarea>
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
                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
              >
                Add Staff
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Staff Management Component
const StaffManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [staffStats] = useState([
    {
      id: 1,
      title: 'Total Staff',
      value: '89',
      description: 'Active members',
      icon: <FaUser className="w-6 h-6" />,
      colorClass: 'text-primary'
    },
    {
      id: 2,
      title: 'Tutors',
      value: '45',
      description: 'Teaching staff',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      colorClass: 'text-green-600'
    },
    {
      id: 3,
      title: 'Admin Staff',
      value: '32',
      description: 'Non-teaching',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 4h2" />
        </svg>
      ),
      colorClass: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Branches',
      value: '12',
      description: 'Across all',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      colorClass: 'text-purple-600'
    }
  ]);

  const [featuredStaff] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Web Development Tutor',
      experience: '5+ years',
      students: 45,
      image: 'https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dHV0b3IlMjB0ZWFjaGluZyUyMHN0dWRlbnRzfGVufDF8MHx8fDE3NTc4NTAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Data Science Tutor',
      experience: '7+ years',
      students: 38,
      image: 'https://images.unsplash.com/photo-1629359652978-a5d383151c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dHV0b3IlMjB0ZWFjaGluZyUyMHN0dWRlbnRzfGVufDF8MHx8fDE3NTc4NTAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Branch Manager',
      experience: '4+ years',
      image: 'https://images.unsplash.com/photo-1629360035258-2ccb13aa3679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dHV0b3IlMjB0ZWFjaGluZyUyMHN0dWRlbnRzfGVufDF8MHx8fDE3NTc4NTAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      role: 'Web Development Tutor',
      branch: 'Main Branch',
      students: 45,
      status: 'Active',
      avatar: 'https://avatar.iran.liara.run/public/40'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      role: 'Data Science Tutor',
      branch: 'City Center',
      students: 38,
      status: 'Active',
      avatar: 'https://avatar.iran.liara.run/public/41'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@email.com',
      role: 'Branch Manager',
      branch: 'North Campus',
      students: null,
      status: 'Active',
      avatar: 'https://avatar.iran.liara.run/public/42'
    }
  ]);

  const handleAddStaff = (e) => {
    e.preventDefault();
    // Add logic to add new staff
    console.log('Staff added');
    setIsModalOpen(false);
  };

  const handleEdit = (staff) => {
    console.log('Edit staff:', staff);
    // Add edit logic
  };

  const handleSchedule = (staff) => {
    console.log('Schedule for staff:', staff);
    // Add schedule logic
  };

  const handleDeactivate = (staff) => {
    console.log('Deactivate staff:', staff);
    // Add deactivate logic
  };

  const handleViewProfile = (staff) => {
    console.log('View profile for:', staff);
    // Add view profile logic
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Employee & Tutor Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaPlus className="mr-2" />
          Add New Staff
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {staffStats.map((stat) => (
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

      {/* Featured Staff */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {featuredStaff.map((staff) => (
          <StaffCard
            key={staff.id}
            staff={staff}
            onViewProfile={handleViewProfile}
          />
        ))}
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
        <div className="p-4 border-b border-neutral-200/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search staff..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Roles</option>
              <option>Tutor</option>
              <option>Admin</option>
              <option>Manager</option>
            </select>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Branches</option>
              <option>Main Branch</option>
              <option>City Center</option>
              <option>North Campus</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {staffList.map((staff) => (
                <StaffTableRow
                  key={staff.id}
                  staff={staff}
                  onEdit={handleEdit}
                  onSchedule={handleSchedule}
                  onDeactivate={handleDeactivate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      <AddStaffModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddStaff}
      />
    </div>
  );
};

export default StaffManagement;
