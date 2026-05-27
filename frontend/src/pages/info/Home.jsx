function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-green-100 py-20 px-10 text-center">

        <h1 className="text-5xl font-bold text-green-900 mb-5">
          Learn Quran with Expert Teachers
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Join live classes, track progress, and learn Islamic studies online.
        </p>

        <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-900">
          Get Started
        </button>

      </section>

      {/* Features */}
      <section className="py-16 px-10 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Live Classes
          </h2>

          <p>
            Attend interactive Quran classes with expert teachers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Assignments
          </h2>

          <p>
            Submit assignments and track learning progress online.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Certificates
          </h2>

          <p>
            Earn certificates after completing courses successfully.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;