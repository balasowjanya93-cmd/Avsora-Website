import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build Your Future with AVSORA
        </h2>

        <p className="text-lg text-blue-100 mb-8">
          We’re always looking for talented individuals and forward-thinking
          businesses. Let’s collaborate and create impactful SAP solutions.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>

          <Link
            href="/careers"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
          >
            View Careers
          </Link>
        </div>

      </div>
    </section>
  );
}
