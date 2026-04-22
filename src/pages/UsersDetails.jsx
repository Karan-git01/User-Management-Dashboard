import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UsersDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-blue-300 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-xl rounded-xl shadow-md overflow-hidden -mt-34">
        
        {/* Header */}
        <div className="bg-blue-500 text-white text-center py-3">
          <h2 className="text-xl font-semibold">User Dashboard</h2>
        </div>

        {/* Body */}
        <div className="p-4 text-center">
          
          {/* Image */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png"
            alt={user.name}
            className="w-20 h-20 rounded-full mx-auto border-2 border-white shadow bg-white"
          />

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-800 mt-3">
            {user.name}
          </h3>

          {/* Info */}
          <div className="mt-3 space-y-1 text-gray-600 text-sm">
            <p>
              <span className="font-semibold text-gray-800">Email: </span>
              {user.email}
            </p>

            <p>
              <span className="font-semibold text-gray-800">Address: </span>
              {user.address}
            </p>

            <p className="mt-3 italic text-gray-800 text-xs">
              {user.description}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UsersDetails;