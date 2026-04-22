import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  // Fetch Users
  const getUsers = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add and Update
  const handleSubmit = () => {
    if (!form.name || !form.address || !form.email || !form.description) return alert("Fill all Fields");

    if (editId) {
      fetch(`http://localhost:3000/users/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: editId }),
      }).then(() => {
        setEditId(null);
        setForm({ name: "", email: "", address: "", description: "" });
        getUsers();
      });
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).then(() => {
        setForm({ name: "", email: "", address: "", description: "" });
        getUsers();
      });
    }
  };

  // Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  };

  // Edit
  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  return (
    <div>
      <div className="w-full min-h-screen bg-blue-300 flex justify-center items-center">
        <div className=" bg-blue-300 w-full max-w-[1200px] flex flex-col justify-center items-center p-6">
          {/* Heading */}
          <h2 className=" text-center text-3xl font-bold underline mb-6">
            Users Management
          </h2>

          {/* FORM */}
          <div className=" ">
            <form className="w-[700px] bg-white p-6 rounded-2xl shadow-lg space-y-5 border ">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                {editId ? "Update User" : "Add User"}
              </button>
            </form>

            
          </div>

          <hr className=" w-full my-8 border-gray-300" />

          {/* USERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 border"
              >
                {/* Image */}
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png"
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border"
                />

                {/* Info */}
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {user.email}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {user.address}
                </p>
                <p className="text-sm text-gray-600 text-center mt-2 break-words">
                  {user.description?.split(" ").slice(0, 10).join(" ")}
                </p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-5">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-400 text-white px-3 py-1 text-sm rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
