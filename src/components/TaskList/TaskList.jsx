import React from "react";

const TaskList = ({ tasks }) => {
  // Sort tasks so high priority appears first
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/15 text-red-400 border border-red-500/40";
      case "Medium":
        return "bg-yellow-500/15 text-yellow-400 border border-yellow-500/40";
      case "Low":
        return "bg-green-500/15 text-green-400 border border-green-500/40";
      default:
        return "bg-gray-600/20 text-gray-300 border border-gray-500/40";
    }
  };

  return (
    <div className="mt-6 bg-[#0d0d0d] text-white rounded-xl shadow-lg p-6 flex flex-col h-[63vh]">
      {/* Header Section */}
      <div className="flex-shrink-0 border-b border-gray-800 pb-3 mb-4 sticky top-0 bg-[#0d0d0d] z-10">
        <h2 className="text-2xl font-semibold text-gray-200 tracking-wide">
          Task List
        </h2>
      </div>

      {/* Scrollable Task Section */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent scroll-smooth">
        {sortedTasks.length === 0 ? (
          <p className="text-gray-500 text-center mt-10 text-sm">
            No tasks assigned yet 😴
          </p>
        ) : (
          sortedTasks.map((task, index) => (
            <div
              key={index}
              className={`rounded-xl p-5 border ${getPriorityStyle(
                task.priority
              )} transition-all duration-200`}
            >
              {/* Top Row: Priority + Date */}
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide ${getPriorityStyle(
                    task.priority
                  )}`}
                >
                  {task.priority} Priority
                </span>
                <span className="text-gray-500 text-xs">{task.date}</span>
              </div>

              {/* Task Info */}
              <h3 className="text-lg font-semibold text-white leading-snug">
                {task.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {task.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
