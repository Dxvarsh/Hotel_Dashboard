import React, { useState } from 'react';
import { FaUserPlus, FaFileExport, FaEdit, FaTrash } from 'react-icons/fa';

// Student Table Row Component
const StudentRow = ({ student, onEdit, onDeactivate }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Inactive': 'bg-gray-100 text-gray-800'
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={student.avatar}
            alt={student.name}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{student.name}</div>
            <div className="text-sm text-gray-500">{student.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {student.course}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.branch}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[student.status]}`}>
          {student.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(student)}
          className="text-primary hover:text-primary/80 mr-3"
        >
          Edit
        </button>
        <button
          onClick={() => onDeactivate(student)}
          className="text-red-600 hover:text-red-800"
        >
          Deactivate
        </button>
      </td>
    </tr>
  );
};

// Student Table Component
const StudentTable = ({ students, onEdit, onDeactivate }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/20">
            {students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onEdit={onEdit}
                onDeactivate={onDeactivate}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-neutral-200/20">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing 1-10 of {students.length} results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-neutral-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-neutral-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-neutral-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-neutral-300 rounded text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Student Modal Component
const AddStudentModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Add New Student</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTrash className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Main Branch</option>
                <option>City Center</option>
                <option>North Campus</option>
              </select>
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
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main StudentManagement Component
const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@email.com',
      course: 'Web Development',
      branch: 'Main Branch',
      status: 'Active',
      avatar: 'https://avatar.iran.liara.run/public/1'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@email.com',
      course: 'Data Science',
      branch: 'City Center',
      status: 'Active',
      avatar: 'https://avatar.iran.liara.run/public/2'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit@email.com',
      course: 'Digital Marketing',
      branch: 'North Campus',
      status: 'Pending',
      avatar: 'https://avatar.iran.liara.run/public/3'
    }
  ]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Student added');
    setIsModalOpen(false);
  };

  const handleEdit = (student) => {
    console.log('Edit student:', student);
    // Add edit logic
  };

  const handleDeactivate = (student) => {
    console.log('Deactivate student:', student);
    // Add deactivate logic
  };

  return (
    <section className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaUserPlus className="mr-2" />
          Add New Student
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-neutral-200/30 mb-6 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Courses</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Digital Marketing</option>
          </select>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Branches</option>
            <option>Main Branch</option>
            <option>City Center</option>
            <option>North Campus</option>
          </select>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center">
            <FaFileExport className="mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Student Table */}
      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDeactivate={handleDeactivate}
      />

      {/* Add Student Modal */}
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddStudent}
      />
    </section>
  );
};

export default Students;
