import React from "react";
import {
  FaPlus,
  FaCheckCircle,
  FaSignOutAlt,
  FaConciergeBell,
} from "react-icons/fa";

const QuickActions = () => {
  // Quick action items data
  const quickActions = [
    {
      id: 1,
      title: "New Booking",
      description: "Create a new reservation",
      icon: (
        <div className="p-3 bg-[#29166f]/10 rounded-lg">
          <FaPlus className="w-6 h-6 text-[#29166f]" />
        </div>
      ),
      image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aG90ZWwlMjByZWNlcHRpb24lMjBkZXNrfGVufDF8MHx8fDE3NTkyNTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Check-in",
      description: "Process guest arrival",
      icon: (
        <div className="p-3 bg-green-100 rounded-lg">
          <FaCheckCircle className="w-6 h-6 text-green-600" />
        </div>
      ),
      image: "https://images.unsplash.com/photo-1759038086397-2b7b1535da04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8aG90ZWwlMjByZWNlcHRpb24lMjBkZXNrfGVufDF8MHx8fDE3NTkyNTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Check-out",
      description: "Process guest departure",
      icon: (
        <div className="p-3 bg-red-100 rounded-lg">
          <FaSignOutAlt className="w-6 h-6 text-red-600" />
        </div>
      ),
      image: "https://images.unsplash.com/photo-1759038085939-2d32655d95ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aG90ZWwlMjByZWNlcHRpb24lMjBkZXNrfGVufDF8MHx8fDE3NTkyNTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Add Service",
      description: "Room service & extras",
      icon: (
        <div className="p-3 bg-purple-100 rounded-lg">
          <FaConciergeBell className="w-6 h-6 text-purple-600" />
        </div>
      ),
      image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aG90ZWwlMjByZWNlcHRpb24lMjBkZXNrfGVufDF8MHx8fDE3NTkyNTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="quick-actions-panel" className="px-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Quick Actions</h2>
        <p className="text-neutral-600">Perform common tasks with one click</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action) => (
          <div
            key={action.id}
            className="bg-white rounded-lg border border-neutral-200/30 p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <button className="w-full text-left">
                <div className="flex items-center space-x-3">
                  {action.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {action.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <img
              src={action.image}
              alt={action.title}
              className="w-full h-24 rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
