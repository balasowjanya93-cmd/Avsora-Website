export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-indigo-600">
          Your Company Name
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          We build innovative AI-powered solutions for modern businesses.
        </p>
      </section>

      <section className="py-16 bg-white shadow-md rounded-2xl mx-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Contact Us
        </h2>

        <form
          action="/api/contact"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
