import React, { useState } from 'react';
import { FaPlus, FaFileExport, FaEdit, FaEye, FaArchive } from 'react-icons/fa';

// Stats Card Component
const StatsCard = ({ title, value, description, colorClass }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

// Course Table Row Component
const CourseRow = ({ course, onEdit, onView, onArchive }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'Draft': 'bg-yellow-100 text-yellow-800',
    'Archived': 'bg-gray-100 text-gray-800'
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <div>
          <div className="text-sm font-medium text-gray-900">{course.name}</div>
          <div className="text-sm text-gray-500">{course.description}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.fee}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.students}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[course.status]}`}>
          {course.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(course)}
          className="text-primary hover:text-primary/80 mr-3 flex items-center"
        >
          <FaEdit className="mr-1" /> Edit
        </button>
        <button
          onClick={() => onView(course)}
          className="text-blue-600 hover:text-blue-800 mr-3 flex items-center"
        >
          <FaEye className="mr-1" /> View
        </button>
        <button
          onClick={() => onArchive(course)}
          className="text-red-600 hover:text-red-800 flex items-center"
        >
          <FaArchive className="mr-1" /> Archive
        </button>
      </td>
    </tr>
  );
};

// Course Table Component
const CourseTable = ({ courses, onEdit, onView, onArchive }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <div className="p-4 border-b border-neutral-200/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/20">
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                onEdit={onEdit}
                onView={onView}
                onArchive={onArchive}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Create Course Modal Component
const CreateCourseModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Create New Course</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
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
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (months)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fee (₹)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
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
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Courses Component
const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Web Development Bootcamp',
      description: 'Full-stack development course',
      duration: '6 Months',
      fee: '₹45,000',
      students: 234,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Data Science Fundamentals',
      description: 'Python, ML, and AI basics',
      duration: '4 Months',
      fee: '₹35,000',
      students: 156,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Digital Marketing Mastery',
      description: 'SEO, SEM, and social media',
      duration: '3 Months',
      fee: '₹25,000',
      students: 189,
      status: 'Draft'
    }
  ]);

  const handleCreateCourse = (e) => {
    e.preventDefault();
    // Add logic to create a new course
    console.log('Course created');
    setIsModalOpen(false);
  };

  const handleEdit = (course) => {
    console.log('Edit course:', course);
    // Add edit logic
  };

  const handleView = (course) => {
    console.log('View course:', course);
    // Add view logic
  };

  const handleArchive = (course) => {
    console.log('Archive course:', course);
    // Add archive logic
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaPlus className="mr-2" />
          Create New Course
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Active Courses"
          value="24"
          description="Across all branches"
          colorClass="text-primary"
        />
        <StatsCard
          title="Total Enrollments"
          value="1,847"
          description="This month"
          colorClass="text-green-600"
        />
        <StatsCard
          title="Revenue"
          value="₹12.5L"
          description="From courses"
          colorClass="text-blue-600"
        />
      </div>

      {/* Course Table */}
      <CourseTable
        courses={courses}
        onEdit={handleEdit}
        onView={handleView}
        onArchive={handleArchive}
      />

      {/* Create Course Modal */}
      <CreateCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCourse}
      />
    </div>
  );
};

export default Courses;
