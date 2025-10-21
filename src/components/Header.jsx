import React from "react";

const Header = ({ employeeName }) => {
  return (
    <header className="flex items-center justify-between p-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg">
      <h1 className="text-lg sm:text-2xl font-semibold">
        Hello, <span className="font-bold">{employeeName}</span> 👋
      </h1>
      <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
        Log Out
      </button>
    </header>
  );
};

export default Header;
