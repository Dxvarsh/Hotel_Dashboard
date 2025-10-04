import React from "react";

const ActiveBookings = () => {
  // Sample booking data
  const bookings = [
    {
      id: 1,
      roomNumber: "101",
      roomType: "Deluxe Suite",
      guestName: "John Smith",
      guestEmail: "john.smith@email.com",
      checkIn: "Mar 25, 2025",
      checkOut: "Mar 27, 2025",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      roomNumber: "205",
      roomType: "Standard Room",
      guestName: "Sarah Johnson",
      guestEmail: "sarah.johnson@email.com",
      checkIn: "Mar 24, 2025",
      checkOut: "Mar 26, 2025",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      roomNumber: "301",
      roomType: "Executive Suite",
      guestName: "Michael Chen",
      guestEmail: "michael.chen@email.com",
      checkIn: "Mar 25, 2025",
      checkOut: "Mar 29, 2025",
      status: "Active",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      roomNumber: "402",
      roomType: "Premium Room",
      guestName: "Emma Wilson",
      guestEmail: "emma.wilson@email.com",
      checkIn: "Mar 23, 2025",
      checkOut: "Mar 25, 2025",
      status: "Check-out Today",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  return (
    <section id="active-bookings-widget" className="px-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Active Bookings
        </h2>
        <p className="text-neutral-600">
          Monitor current checked-in guests in real-time
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg border border-neutral-200/30 shadow-sm overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200/30">
            {/* Table Header */}
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Room
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Guest Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Check-in
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Check-out
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-neutral-200/30">
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-neutral-50 transition-colors duration-200"
                >
                  {/* Room Number and Type */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#29166f]/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-[#29166f]">
                          {booking.roomNumber}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">
                          {booking.roomType}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Guest Name and Email */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">
                      {booking.guestName}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {booking.guestEmail}
                    </div>
                  </td>

                  {/* Check-in Date */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {booking.checkIn}
                  </td>

                  {/* Check-out Date */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {booking.checkOut}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.statusColor}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-[#29166f] hover:text-[#29166f]/80 transition-colors duration-200">
                        View
                      </button>
                      <button className="text-neutral-400 hover:text-neutral-600 transition-colors duration-200">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between px-6 pb-6">
          <div className="text-sm text-neutral-500">
            Showing {bookings.length} of 12 active bookings
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-[#29166f] hover:text-[#29166f]/80 transition-colors duration-200">
              View All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200/30 rounded-md hover:bg-neutral-50 transition-colors duration-200">
              Export
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveBookings;
