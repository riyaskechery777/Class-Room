function CourseCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-green-800 mb-3">
          {title}
        </h2>

        <p className="text-gray-700 mb-5">
          {description}
        </p>

        <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-900">
          View Course
        </button>

      </div>

    </div>
  );
}

export default CourseCard;