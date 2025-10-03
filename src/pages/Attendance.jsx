import React, { useState } from 'react';
import { FaPlus, FaCalendarAlt, FaClock, FaBuilding, FaUsers, FaChartLine, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// https://rollout.site/projects/rutwa-admin-dashbo7ckx/edit
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

// Timetable Item Component
const TimetableItem = ({ course, room, instructor, time }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <p className="font-medium text-gray-900">{course}</p>
        <p className="text-sm text-gray-500">{room} • {instructor}</p>
      </div>
      <p className="text-sm text-gray-600">{time}</p>
    </div>
  );
};

// Attendance Table Row Component
const AttendanceRow = ({ student, course, date, status, time }) => {
  const statusColors = {
    'Present': 'bg-green-100 text-green-800',
    'Absent': 'bg-red-100 text-red-800'
  };

  const statusIcons = {
    'Present': <FaCheckCircle className="text-green-500" />,
    'Absent': <FaTimesCircle className="text-red-500" />
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
        {course}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[status]}`}>
          {statusIcons[status]} {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {time || '-'}
      </td>
    </tr>
  );
};

// Chart Card Component
const ChartCard = ({ title, canvasId }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-80">
        <canvas id={canvasId}></canvas>
      </div>
    </div>
  );
};

// Create Schedule Modal Component
const CreateScheduleModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Create New Schedule</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                required
              >
                <option>Select Course</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                required
              >
                <option>Select Instructor</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
                <option>Mike Johnson</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                  placeholder="Room number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Days</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                  multiple
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                  required
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
                className="px-4 py-2 bg-[#29166f] text-white rounded-md text-sm font-medium hover:bg-[#29166f]/90"
              >
                Create Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Mark Attendance Modal Component
const MarkAttendanceModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Mark Attendance</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                required
              >
                <option>Select Course</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29166f]"
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Students</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-white rounded">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={`https://avatar.iran.liara.run/public/${i+19}`}
                        alt={`Student ${i}`}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Student {i}</p>
                        <p className="text-xs text-gray-500">student{i}@email.com</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="p-1 text-green-500 hover:bg-green-50 rounded"
                        title="Mark Present"
                      >
                        <FaCheckCircle />
                      </button>
                      <button
                        type="button"
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                        title="Mark Absent"
                      >
                        <FaTimesCircle />
                      </button>
                    </div>
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
                className="px-4 py-2 bg-[#29166f] text-white rounded-md text-sm font-medium hover:bg-[#29166f]/90"
              >
                Save Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Attendance Component
const Attendance = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isMarkModalOpen, setIsMarkModalOpen] = useState(false);

  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      student: {
        name: 'Rajesh Kumar',
        email: 'rajesh@email.com',
        avatar: 'https://avatar.iran.liara.run/public/20'
      },
      course: 'Web Development',
      date: '15 Dec 2024',
      status: 'Present',
      time: '9:00 AM'
    },
    {
      id: 2,
      student: {
        name: 'Priya Sharma',
        email: 'priya@email.com',
        avatar: 'https://avatar.iran.liara.run/public/21'
      },
      course: 'Data Science',
      date: '15 Dec 2024',
      status: 'Absent',
      time: null
    },
    {
      id: 3,
      student: {
        name: 'Amit Patel',
        email: 'amit@email.com',
        avatar: 'https://avatar.iran.liara.run/public/22'
      },
      course: 'Digital Marketing',
      date: '15 Dec 2024',
      status: 'Present',
      time: '9:05 AM'
    }
  ]);

  const [timetable, setTimetable] = useState([
    {
      id: 1,
      course: 'Web Development',
      room: 'Room A-101',
      instructor: 'John Doe',
      time: '9:00 - 11:00'
    },
    {
      id: 2,
      course: 'Data Science',
      room: 'Room B-201',
      instructor: 'Jane Smith',
      time: '11:30 - 1:30'
    },
    {
      id: 3,
      course: 'Digital Marketing',
      room: 'Room C-301',
      instructor: 'Mike Johnson',
      time: '2:00 - 4:00'
    }
  ]);

  const handleCreateSchedule = (e) => {
    e.preventDefault();
    // Add logic to create a new schedule
    console.log('Schedule created');
    setIsScheduleModalOpen(false);
  };

  const handleMarkAttendance = (e) => {
    e.preventDefault();
    // Add logic to mark attendance
    console.log('Attendance marked');
    setIsMarkModalOpen(false);
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Attendance & Timetable</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsScheduleModalOpen(true)}
            className="bg-[#29166f] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#29166f]/90 flex items-center"
          >
            <FaPlus className="mr-2" />
            Create Schedule
          </button>
          <button
            onClick={() => setIsMarkModalOpen(true)}
            className="bg-white text-[#29166f] border border-[#29166f] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#29166f]/10 flex items-center"
          >
            <FaCheckCircle className="mr-2" />
            Mark Attendance
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Today's Attendance"
          value="94%"
          description="234/248 present"
          icon={<FaUsers className="w-6 h-6 text-[#29166f]" />}
          colorClass="text-[#29166f]"
        />
        <StatsCard
          title="Active Classes"
          value="18"
          description="Running today"
          icon={<FaBuilding className="w-6 h-6 text-green-600" />}
          colorClass="text-green-600"
        />
        <StatsCard
          title="Monthly Average"
          value="92%"
          description="Last 30 days"
          icon={<FaChartLine className="w-6 h-6 text-blue-600" />}
          colorClass="text-blue-600"
        />
        <StatsCard
          title="Absent Today"
          value="14"
          description="Students"
          icon={<FaTimesCircle className="w-6 h-6 text-orange-600" />}
          colorClass="text-orange-600"
        />
      </div>

      {/* Charts and Timetable */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Weekly Attendance" canvasId="attendanceChart" />
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Timetable</h3>
          <div className="space-y-4">
            {timetable.map((item) => (
              <TimetableItem
                key={item.id}
                course={item.course}
                room={item.room}
                instructor={item.instructor}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
        <div className="p-4 border-b border-neutral-200/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search attendance..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-[#29166f] focus:outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-[#29166f] focus:outline-none">
              <option>All Courses</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Digital Marketing</option>
            </select>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-[#29166f] focus:outline-none">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {attendanceData.map((attendance) => (
                <AttendanceRow
                  key={attendance.id}
                  student={attendance.student}
                  course={attendance.course}
                  date={attendance.date}
                  status={attendance.status}
                  time={attendance.time}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <CreateScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onSubmit={handleCreateSchedule}
      />

      <MarkAttendanceModal
        isOpen={isMarkModalOpen}
        onClose={() => setIsMarkModalOpen(false)}
        onSubmit={handleMarkAttendance}
      />
    </div>
  );
};

export default Attendance;
