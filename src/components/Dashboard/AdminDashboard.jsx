import React from "react";
import CreateTaskForm from "../CreateTaskForm";
import CreateMemberForm from "../CreateMemberForm";
import Header from "../Header";
// import Header from "../EmployeeDashboard/components/Header";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <Header employeeName={"Admin Dhairya"} />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <CreateTaskForm />
        <CreateMemberForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
