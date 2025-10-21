import React, { useState } from "react";

const CreateTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", taskData);
  };

  const inputClass =
    "w-full bg-[#0d0d0d] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-gray-500";

  return (
    <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100 border-b border-gray-800 pb-3">
        📝 Create Task
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows={3}
            className={inputClass}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={taskData.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Assign To</label>
          <input
            type="text"
            name="assignTo"
            value={taskData.assignTo}
            onChange={handleChange}
            placeholder="Enter employee name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Category</label>
          <select
            name="category"
            value={taskData.category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select category</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition duration-200"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
