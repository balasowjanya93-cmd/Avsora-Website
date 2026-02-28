
import Link from "next/link";
import { Award, Shield, Zap, Users } from "lucide-react";

export default function WhyAvsoraPage() {
  const features = [
    {
      icon: Award,
      title: "Proven SAP Expertise",
      description:
        "Experienced consultants delivering enterprise-grade solutions.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Security-focused architecture and compliance-driven implementations.",
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description:
        "Structured execution with transparent collaboration.",
    },
    {
      icon: Users,
      title: "Long-Term Partnership",
      description:
        "Dedicated support and continuous improvement approach.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Heading */}
          <h2 className="text-4xl font-bold">
            Why Enterprises Choose AVSORA
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded"></div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 mb-6 mx-auto">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          
          <div>
            <h3 className="text-5xl font-bold text-indigo-600">50+</h3>
            <p className="mt-2 text-gray-700">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-indigo-600">20+</h3>
            <p className="mt-2 text-gray-700">Clients Served</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-indigo-600">99%</h3>
            <p className="mt-2 text-gray-700">Client Satisfaction</p>
          </div>

        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center py-12">
        <Link
          href="/"
          className="text-indigo-600 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}
