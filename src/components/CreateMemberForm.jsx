import React, { useState } from "react";

const CreateMemberForm = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    memberId: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setMemberData({ ...memberData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Member Created:", memberData);
  };

  const inputClass =
    "w-full bg-[#0d0d0d] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 placeholder-gray-500";

  return (
    <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100 border-b border-gray-800 pb-3">
        👥 Create Member
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={memberData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Member ID</label>
          <input
            type="text"
            name="memberId"
            value={memberData.memberId}
            onChange={handleChange}
            placeholder="Enter member ID"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Designation</label>
          <input
            type="text"
            name="designation"
            value={memberData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={memberData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={memberData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition duration-200"
        >
          Create Member
        </button>
      </form>
    </div>
  );
};

export default CreateMemberForm;
