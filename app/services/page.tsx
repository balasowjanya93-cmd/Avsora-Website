import Link from "next/link";
import { Users, Cloud, Layers, Workflow, Database, FlaskConical } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "SAP Consulting & Implementation",
      description:
        "End-to-end SAP strategy, deployment, and optimization.",
    },
    {
      icon: Cloud,
      title: "SAP BTP & Cloud Applications",
      description:
        "Scalable cloud-native applications on SAP Business Technology Platform.",
    },
    {
      icon: Layers,
      title: "SAP Fiori & UI5 Development",
      description:
        "Modern, responsive user experiences built on SAP Fiori standards.",
    },
    {
      icon: Workflow,
      title: "SAP Workflow & Process Automation",
      description:
        "Intelligent automation to streamline enterprise operations.",
    },
    {
      icon: Database,
      title: "SAP Integration & Architecture",
      description:
        "Seamless system connectivity across complex enterprise landscapes.",
    },
    {
      icon: FlaskConical,
      title: "SAP Testing & Quality Assurance",
      description:
        "Comprehensive testing ensuring reliability and performance.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold">Core SAP Services</h1>
        <p className="text-gray-600 mt-4">
          Comprehensive SAP solutions tailored to enterprise needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition"
            >
              <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pb-16">
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