import React, { useState } from 'react';
import { FaPlus, FaFileExport, FaEye, FaReceipt, FaBell, FaCheckCircle } from 'react-icons/fa';

// Stats Card Component
const StatsCard = ({ title, value, description, icon, colorClass }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
          <p className={`text-sm ${colorClass}`}>{description}</p>
        </div>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colorClass.replace('text-', 'bg-')}100` }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// Transaction Table Row Component
const TransactionRow = ({ transaction, onView, onAction }) => {
  const statusColors = {
    'Paid': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Overdue': 'bg-red-100 text-red-800'
  };

  const actionButtons = {
    'Paid': [
      { text: 'View', icon: <FaEye className="mr-1" />, color: 'text-primary', action: 'view' },
      { text: 'Receipt', icon: null, color: 'text-blue-600', action: 'receipt' }
    ],
    'Pending': [
      { text: 'Remind', icon: <FaBell className="mr-1" />, color: 'text-primary', action: 'remind' },
      { text: 'Mark Paid', icon: <FaCheckCircle className="mr-1" />, color: 'text-green-600', action: 'markPaid' }
    ],
    'Overdue': [
      { text: 'Remind', icon: <FaBell className="mr-1" />, color: 'text-primary', action: 'remind' },
      { text: 'Mark Paid', icon: <FaCheckCircle className="mr-1" />, color: 'text-green-600', action: 'markPaid' }
    ]
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={transaction.student.avatar}
            alt={transaction.student.name}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{transaction.student.name}</div>
            <div className="text-sm text-gray-500">{transaction.student.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {transaction.course}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {transaction.amount}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {transaction.dueDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[transaction.status]}`}>
          {transaction.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {actionButtons[transaction.status].map((button, index) => (
          <button
            key={index}
            onClick={() => onAction(transaction, button.action)}
            className={`${button.color} hover:${button.color}/80 ${index > 0 ? 'ml-3' : 'mr-3'} flex items-center`}
          >
            {button.icon} {button.text}
          </button>
        ))}
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

// Record Payment Modal Component
const RecordPaymentModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Record Payment</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option>Select Student</option>
                <option>Rajesh Kumar</option>
                <option>Priya Sharma</option>
                <option>Amit Patel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option>Select Course</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>UPI</option>
                <option>Credit Card</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
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
                Record Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Fees Component
const Fees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      student: {
        name: 'Rajesh Kumar',
        email: 'rajesh@email.com',
        avatar: 'https://avatar.iran.liara.run/public/10'
      },
      course: 'Web Development',
      amount: '₹45,000',
      dueDate: '15 Dec 2024',
      status: 'Paid'
    },
    {
      id: 2,
      student: {
        name: 'Priya Sharma',
        email: 'priya@email.com',
        avatar: 'https://avatar.iran.liara.run/public/11'
      },
      course: 'Data Science',
      amount: '₹35,000',
      dueDate: '20 Dec 2024',
      status: 'Pending'
    },
    {
      id: 3,
      student: {
        name: 'Amit Patel',
        email: 'amit@email.com',
        avatar: 'https://avatar.iran.liara.run/public/12'
      },
      course: 'Digital Marketing',
      amount: '₹25,000',
      dueDate: '10 Dec 2024',
      status: 'Overdue'
    }
  ]);

  const handleRecordPayment = (e) => {
    e.preventDefault();
    // Add logic to record payment
    console.log('Payment recorded');
    setIsModalOpen(false);
  };

  const handleView = (transaction) => {
    console.log('View transaction:', transaction);
    // Add view logic
  };

  const handleAction = (transaction, action) => {
    console.log(`Perform ${action} on transaction:`, transaction);
    // Add action logic based on the action type
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Fees Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaPlus className="mr-2" />
          Record Payment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Revenue"
          value="₹15.2L"
          description="+12% this month"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          }
          colorClass="text-green-600"
        />
        <StatsCard
          title="Pending Fees"
          value="₹2.8L"
          description="From 45 students"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          colorClass="text-orange-600"
        />
        <StatsCard
          title="Overdue"
          value="₹1.2L"
          description="From 18 students"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          }
          colorClass="text-red-600"
        />
        <StatsCard
          title="This Month"
          value="₹5.7L"
          description="Collected"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          colorClass="text-primary"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Revenue Trend" canvasId="revenueChart" />
        <ChartCard title="Payment Status" canvasId="paymentChart" />
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
        <div className="p-4 border-b border-neutral-200/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Branches</option>
              <option>Main Branch</option>
              <option>City Center</option>
              <option>North Campus</option>
            </select>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center">
              <FaFileExport className="mr-2" />
              Export Report
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {transactions.map((transaction) => (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                  onView={handleView}
                  onAction={handleAction}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      <RecordPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRecordPayment}
      />
    </div>
  );
};

export default Fees;
