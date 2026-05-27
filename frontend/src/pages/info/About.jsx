function About() {
  return (
    <div className="py-16 px-10">

      <h1 className="text-4xl font-bold text-green-900 mb-6">
        About Hiraa Moral School
      </h1>

      <p className="text-lg text-gray-700 leading-8">
        Hiraa Moral School is an online Islamic educational platform
        designed for students around the world. Our mission is to
        provide quality Quran and Islamic education through modern
        technology and expert teachers.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Our Vision
          </h2>

          <p>
            To create a modern Islamic learning environment accessible
            to every student globally.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            Our Mission
          </h2>

          <p>
            To provide authentic Quran education, live classes,
            and interactive learning experiences.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;