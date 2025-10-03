import React from 'react';
import { FaUsers, FaMoneyBillWave, FaBuilding, FaChartLine, FaClipboardList } from 'react-icons/fa';

// StatsCard Component
const StatsCard = ({ title, value, change, icon, color }) => {
  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${change.includes('+') ? 'text-green-600' : 'text-orange-600'}`}>
            {change}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// ChartCard Component
const ChartCard = ({ title, canvasId }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-80">
        <canvas id={canvasId} width="862" height="320"></canvas>
      </div>
    </div>
  );
};

// ActivityTable Component
const ActivityTable = () => {
  const activities = [
    { description: "New student registration", user: "John Doe", time: "2 hours ago", status: "Completed", statusColor: "green" },
    { description: "Fee payment received", user: "Jane Smith", time: "3 hours ago", status: "Completed", statusColor: "green" },
    { description: "Certificate generated", user: "Mike Johnson", time: "5 hours ago", status: "Pending", statusColor: "blue" },
  ];

  const statusColors = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="mt-6 bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <div className="p-6 border-b border-neutral-200/20">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/20">
            {activities.map((activity, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-900">{activity.description}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{activity.user}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{activity.time}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[activity.statusColor]}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Students"
          value="2,543"
          change="+12% from last month"
          icon={<FaUsers className="w-6 h-6" />}
          color="indigo"
        />
        <StatsCard
          title="Fees Collected"
          value="₹3.2L"
          change="+8% from last week"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
          color="green"
        />
        <StatsCard
          title="Branches"
          value="12"
          change="2 new this month"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          color="blue"
        />
        <StatsCard
          title="Attendance Rate"
          value="94%"
          change="-2% from last week"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
          color="orange"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Revenue Overview" canvasId="revenueChart" />
        <ChartCard title="Student Growth" canvasId="studentChart" />
      </div>

      {/* Activity Table */}
      <ActivityTable />
    </div>
  );
};

export default Dashboard;
