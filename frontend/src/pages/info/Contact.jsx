function Contact() {
  return (
    <div className="py-16 px-10">

      <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <form className="space-y-6">

          <div>
            <label className="block text-lg font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full border border-gray-300 p-3 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-900"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;