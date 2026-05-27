function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-24 px-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Modern Islamic Online Learning Platform
          </h1>

          <p className="text-lg mb-8 text-green-100">
            Join Hiraa Moral School to learn Quran, Islamic Studies,
            Arabic Language, and moral education with expert teachers.
          </p>

          <div className="space-x-4">

            <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-800">
              Join Now
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="Students"
            className="rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;