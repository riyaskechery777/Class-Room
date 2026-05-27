import { useState } from "react";

function Login() {

  const [role, setRole] = useState("student");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-5">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          Login
        </h1>

        <form className="space-y-5">

          {/* Role Selection */}
          <div>

            <label className="block mb-2 font-semibold">
              Select Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>

          </div>

          {/* Email */}
          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-900"
          >
            Login as {role}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;