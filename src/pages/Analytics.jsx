import React from "react";

const Analytics = () => {
  // Sample data for KPIs
  const kpis = [
    { value: "$156", label: "Average Daily Rate", color: "text-[#29166f]" },
    { value: "$122", label: "Revenue Per Room", color: "text-green-600" },
    { value: "2.3", label: "Average Stay (nights)", color: "text-blue-600" },
    { value: "89%", label: "Guest Satisfaction", color: "text-purple-600" },
  ];

  // Sample data for metric cards
  const metricCards = [
    {
      title: "Today's Revenue",
      value: "$12,450",
      change: "+15% from yesterday",
      changeColor: "text-green-600",
      image: "https://images.unsplash.com/photo-1691138472938-9c71df7e17d7",
    },
    {
      title: "Occupancy Rate",
      value: "78%",
      change: "+5% from last week",
      changeColor: "text-green-600",
      image: "https://images.unsplash.com/photo-1757839939502-afa95e78dd60",
    },
    {
      title: "Active Rooms",
      value: "20/25",
      change: "5 rooms available",
      changeColor: "text-neutral-600",
      image: "https://images.unsplash.com/photo-1663147737123-9cbd239fc3b5",
    },
  ];

  return (
    <section id="revenue-occupancy-analytics" className="px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Revenue & Occupancy Analytics
        </h2>
        <p className="text-neutral-600">
          Track your hotel's performance metrics
        </p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metricCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-neutral-200/30 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-neutral-600">
                  {card.title}
                </p>
                <p className="text-3xl font-bold text-neutral-900">
                  {card.value}
                </p>
                <p className={`text-sm ${card.changeColor}`}>
                  {card.change}
                </p>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="h-12 w-12 rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Weekly Revenue Trend
          </h3>
          <div className="h-64 bg-neutral-50 rounded flex items-center justify-center">
            <p className="text-sm text-neutral-500">
              Revenue chart will render here
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Occupancy by Room Type
          </h3>
          <div className="h-64 bg-neutral-50 rounded flex items-center justify-center">
            <p className="text-sm text-neutral-500">
              Occupancy chart will render here
            </p>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="mt-6 bg-white rounded-lg border border-neutral-200/30 p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Key Performance Indicators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="text-center">
              <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
              <p className="text-sm text-neutral-600">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
