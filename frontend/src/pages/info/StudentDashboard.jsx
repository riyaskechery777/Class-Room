function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-900 mb-10">
        Student Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Enrolled Courses
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            5
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Assignments
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            12
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Attendance
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            95%
          </p>

        </div>

      </div>

      {/* Student Actions */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Join Live Class
          </h2>

          <input
            type="text"
            placeholder="Paste Class Link"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Join Now
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Submit Assignment
          </h2>

          <input
            type="file"
            className="mb-4"
          />

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;