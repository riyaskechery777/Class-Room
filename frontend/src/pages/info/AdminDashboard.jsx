function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-900 mb-10">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Total Students
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            250
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Total Teachers
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            25
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Live Classes
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            12
          </p>
        </div>

      </div>

      {/* Management Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Manage Teachers
          </h2>

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Add Teacher
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Manage Students
          </h2>

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Add Student
          </button>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;