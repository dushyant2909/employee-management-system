import React from "react";
import Header from "../Header";
import TaskSummary from "../TaskSummary";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  const summaryData = [
    { count: 3, label: "New Tasks" },
    { count: 2, label: "Pending Tasks" },
    { count: 4, label: "Completed Tasks" },
    { count: 1, label: "On Hold" },
  ];

  const tasks = [
    {
      title: "Fix login issue",
      description: "Resolve the bug causing login failure for users. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, pariatur. Repellendus, iure vero perferendis fugiat sunt soluta blanditiis asperiores iste praesentium hic earum ut, dicta, tempora voluptatum reiciendis vitae libero.",
      priority: "High",
      date: "Oct 19, 2025",
    },
    {
      title: "UI Improvements",
      description: "Enhance dashboard visuals for better user experience.",
      priority: "Low",
      date: "Oct 18, 2025",
    },
    {
      title: "Backend API Cleanup",
      description: "Refactor API routes and clean up deprecated endpoints.",
      priority: "Medium",
      date: "Oct 17, 2025",
    },
    {
      title: "Integrate Analytics",
      description: "Add Google Analytics to monitor dashboard usage.",
      priority: "High",
      date: "Oct 16, 2025",
    },
    {
      title: "Email Notifications",
      description: "Set up automated email notifications for task updates.",
      priority: "Low",
      date: "Oct 15, 2025",
    },
    {
      title: "Database Optimization",
      description: "Improve query performance for task fetching.",
      priority: "Medium",
      date: "Oct 14, 2025",
    },
    {
      title: "Implement JWT Auth",
      description: "Add secure login using JWT tokens.",
      priority: "High",
      date: "Oct 13, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <Header employeeName="Dushyant" />
      <TaskSummary summary={summaryData} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default EmployeeDashboard;
