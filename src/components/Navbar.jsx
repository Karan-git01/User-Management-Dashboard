import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-900 w-full">
      <nav className="max-w-[1200px] mx-auto text-gray-200 px-6 py-3 flex justify-between items-center">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
