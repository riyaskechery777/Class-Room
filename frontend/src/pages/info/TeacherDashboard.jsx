function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-900 mb-10">
        Teacher Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            My Students
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            120
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Assignments
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            18
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Live Classes
          </h2>

          <p className="text-4xl font-bold text-gray-700">
            6
          </p>

        </div>

      </div>

      {/* Teacher Actions */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Upload Notes
          </h2>

          <input
            type="file"
            className="mb-4"
          />

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Upload
          </button>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Create Live Class
          </h2>

          <input
            type="text"
            placeholder="Google Meet Link"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />

          <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-900">
            Start Class
          </button>

        </div>

      </div>

    </div>
  );
}

export default TeacherDashboard;