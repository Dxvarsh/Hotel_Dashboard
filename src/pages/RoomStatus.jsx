import React from "react";

const RoomStatus = () => {
  // Sample room data
  const rooms = [
    {
      id: "1",
      number: "Room 101",
      type: "Deluxe Suite",
      details: "2 Queen Beds • City View",
      status: "Available",
    },
    {
      id: "2",
      number: "Room 102",
      type: "Standard Room",
      details: "1 King Bed • Garden View",
      status: "Occupied",
    },
    {
      id: "3",
      number: "Room 103",
      type: "Executive Suite",
      details: "Guest: John Smith • Check-in: 3 PM",
      status: "Reserved",
    },
    {
      id: "4",
      number: "Room 104",
      type: "Deluxe Room",
      details: "Maintenance in progress",
      status: "Cleaning",
    },
    {
      id: "5",
      number: "Room 105",
      type: "Standard Room",
      details: "2 Twin Beds • Pool View",
      status: "Available",
    },
    {
      id: "6",
      number: "Room 201",
      type: "Premium Suite",
      details: "Guest: Sarah Johnson • 2 Nights",
      status: "Occupied",
    },
    {
      id: "7",
      number: "Room 202",
      type: "Deluxe Room",
      details: "1 King Bed • Ocean View",
      status: "Available",
    },
    {
      id: "8",
      number: "Room 203",
      type: "Standard Room",
      details: "Housekeeping scheduled",
      status: "Cleaning",
    },
  ];

  // Status card data
  const statusCards = [
    {
      title: "Quick Stats",
      stats: [
        { label: "Available Rooms", value: 12, color: "text-green-600" },
        { label: "Occupied Rooms", value: 8, color: "text-red-600" },
        { label: "Cleaning Required", value: 3, color: "text-blue-600" },
      ],
      image: "https://images.unsplash.com/photo-1759038086995-fb21d7c4dc56",
    },
    {
      title: "Reception Status",
      stats: [
        { label: "Check-ins Today", value: 5, color: "text-[#29166f]" },
        { label: "Check-outs Today", value: 3, color: "text-[#29166f]" },
        { label: "Pending Reservations", value: 2, color: "text-[#29166f]" },
      ],
      image: "https://images.unsplash.com/photo-1758714919725-d2740fc99f14",
    },
    {
      title: "Lounge Status",
      stats: [
        { label: "Guests in Lounge", value: 8 },
        { label: "Available Seats", value: 24 },
        { label: "Service Requests", value: 1, color: "text-yellow-600" },
      ],
      image: "https://images.unsplash.com/photo-1758931156918-b1671900a864",
    },
  ];

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Occupied":
        return "bg-red-100 text-red-800";
      case "Reserved":
        return "bg-yellow-100 text-yellow-800";
      case "Cleaning":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="room-status-overview" className="px-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Room Status Overview
        </h2>
        <p className="text-neutral-600">Monitor all room statuses in real-time</p>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg border border-neutral-200/30 p-4 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-neutral-900">
                {room.number}
              </span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                  room.status
                )}`}
              >
                {room.status}
              </span>
            </div>
            <div className="text-sm text-neutral-600 mb-2">{room.type}</div>
            <div className="text-xs text-neutral-500">{room.details}</div>
          </div>
        ))}
      </div>

      {/* Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statusCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-neutral-200/30 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-900">{card.title}</h3>
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
              )}
            </div>
            <div className="space-y-3">
              {card.stats.map((stat, statIndex) => (
                <div
                  key={statIndex}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm text-neutral-600">{stat.label}</span>
                  <span
                    className={`text-lg font-semibold ${stat.color || "text-neutral-900"}`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomStatus;
