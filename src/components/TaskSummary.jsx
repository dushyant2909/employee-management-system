import React from "react";

const TaskSummary = ({ summary }) => {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-yellow-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-pink-500 to-fuchsia-500",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6">
      {summary.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${colors[index % colors.length]} text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
        >
          <h2 className="text-3xl font-bold">{item.count}</h2>
          <p className="text-sm mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskSummary;
