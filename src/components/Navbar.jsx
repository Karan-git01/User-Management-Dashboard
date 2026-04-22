import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const{theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      className={`w-full p-4 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <nav
        className={`max-w-[1200px] mx-auto px-6 py-3 flex justify-between items-center ${theme === "light" ? " bg-white text-black" : " bg-black text-white"}`}
      >
        <Link to="/" className="hover:text-gray-200">
          <h1 className="text-2xl font-bold tracking-wide cursor-default">
            MyApp
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
          >
            Home
          </Link>

          <Link
            to="/subscription"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
          >
            Subscription
          </Link>

          <Link
            to="/payments"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
          >
            Payment
          </Link>

          <Link
            to="/users"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
          >
            Users
          </Link>

          <button
            onClick={toggleTheme}
            className=" px-3 py-1 border rounded whitespace-nowrap hover:bg-blue-500 transition "
          >
            Toggle Theme
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
