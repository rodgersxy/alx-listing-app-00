import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
      <div className="logo text-indigo-700 font-bold text-xl">YourLogo</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Rooms</a>
        <a href="#" className="hover:underline">Mansions</a>
        <a href="#" className="hover:underline">Countryside</a>
      </nav>
      <div className="auth-buttons space-x-2">
        <button className="px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600">Sign In</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
