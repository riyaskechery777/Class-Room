function Courses() {
  return (
    <div className="py-16 px-10">

      <h1 className="text-4xl font-bold text-green-900 mb-10 text-center">
        Our Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Course 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
            alt="Quran Course"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Quran Learning
            </h2>

            <p className="text-gray-700 mb-4">
              Learn Quran recitation, Tajweed, and memorization with expert teachers.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-900">
              Enroll Now
            </button>

          </div>

        </div>

        {/* Course 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Islamic Studies"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Islamic Studies
            </h2>

            <p className="text-gray-700 mb-4">
              Study Aqeedah, Fiqh, Hadith, and Islamic history online.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-900">
              Enroll Now
            </button>

          </div>

        </div>

        {/* Course 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Arabic Course"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Arabic Language
            </h2>

            <p className="text-gray-700 mb-4">
              Learn Arabic grammar, speaking, and Quranic vocabulary.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-900">
              Enroll Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Courses;