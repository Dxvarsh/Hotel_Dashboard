import React, { useState } from 'react';
import { FaPlus, FaEdit, FaChartBar, FaBuilding, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

// Stats Card Component
const StatsCard = ({ title, value, description, colorClass }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

// Branch Card Component
const BranchCard = ({ branch, onManage }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <img
        src={branch.image}
        alt={branch.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{branch.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{branch.address}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">{branch.students} Students</p>
            <p className="text-sm text-gray-500">{branch.staff} Tutors</p>
          </div>
          <button
            onClick={() => onManage(branch)}
            className="text-primary text-sm font-medium"
          >
            Manage →
          </button>
        </div>
      </div>
    </div>
  );
};

// Branch Table Row Component
const BranchTableRow = ({ branch, onEdit, onAnalytics }) => {
  return (
    <tr>
      <td className="px-6 py-4">
        <div>
          <div className="text-sm font-medium text-gray-900">{branch.name}</div>
          <div className="text-sm text-gray-500">{branch.address}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {branch.city}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {branch.students}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {branch.staff}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {branch.revenue}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(branch)}
          className="text-primary hover:text-primary/80 mr-3 flex items-center"
        >
          <FaEdit className="mr-1" /> Edit
        </button>
        <button
          onClick={() => onAnalytics(branch)}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FaChartBar className="mr-1" /> Analytics
        </button>
      </td>
    </tr>
  );
};

// Branch Table Component
const BranchTable = ({ branches, onEdit, onAnalytics }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <div className="p-4 border-b border-neutral-200/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search branches..."
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Cities</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Bangalore</option>
          </select>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/20">
            {branches.map((branch) => (
              <BranchTableRow
                key={branch.id}
                branch={branch}
                onEdit={onEdit}
                onAnalytics={onAnalytics}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Add Branch Modal Component
const AddBranchModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Add New Branch</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Bangalore</option>
                  <option>Delhi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
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
                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
              >
                Add Branch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Branch Component
const Branch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: 'Main Branch',
      address: '123 Tech Street, Downtown',
      city: 'Mumbai',
      students: 856,
      staff: 12,
      revenue: '₹4.2L',
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXwwfHx8MTc1Nzc2NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'City Center',
      address: '456 Business Ave, City Center',
      city: 'Pune',
      students: 634,
      staff: 8,
      revenue: '₹3.1L',
      image: 'https://images.unsplash.com/photo-1637393932938-b9c209e67d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXwwfHx8MTc1Nzc2NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'North Campus',
      address: '789 University Rd, North Side',
      city: 'Bangalore',
      students: 1053,
      staff: 15,
      revenue: '₹5.2L',
      image: 'https://images.unsplash.com/photo-1703355685722-2996b01483be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXwwfHx8MTc1Nzc2NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const handleAddBranch = (e) => {
    e.preventDefault();
    // Add logic to create a new branch
    console.log('Branch added');
    setIsModalOpen(false);
  };

  const handleEdit = (branch) => {
    console.log('Edit branch:', branch);
    // Add edit logic
  };

  const handleAnalytics = (branch) => {
    console.log('View analytics for branch:', branch);
    // Add analytics logic
  };

  const handleManage = (branch) => {
    console.log('Manage branch:', branch);
    // Add manage logic
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Branch Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaPlus className="mr-2" />
          Add New Branch
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Total Branches"
          value="12"
          description="Across 3 cities"
          colorClass="text-primary"
        />
        <StatsCard
          title="Active Staff"
          value="89"
          description="Tutors & Admin"
          colorClass="text-green-600"
        />
        <StatsCard
          title="Students"
          value="2,543"
          description="Enrolled across branches"
          colorClass="text-blue-600"
        />
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            onManage={handleManage}
          />
        ))}
      </div>

      {/* Branch Table */}
      <BranchTable
        branches={branches}
        onEdit={handleEdit}
        onAnalytics={handleAnalytics}
      />

      {/* Add Branch Modal */}
      <AddBranchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddBranch}
      />
    </div>
  );
};

export default Branch;
