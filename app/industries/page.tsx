import Link from "next/link";
import { Building2, Factory, Stethoscope } from "lucide-react";

export default function IndustriesPage() {
  const Industries = [
    {
      icon: Building2,
      title: "Finance",
    },
    {
      icon: Stethoscope,
      title: "Health Care",
    },
    {
      icon: Factory,
      title: "Manufacturing",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Heading Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded"></div>
      </section>

      {/* Industries Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">

          {Industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="flex flex-col items-center">

                {/* Circle Icon */}
                <div className="w-24 h-24 flex items-center justify-center 
                                bg-white rounded-full shadow-md mb-6">
                  <Icon className="w-10 h-10 text-gray-700" />
                </div>

                <h3 className="text-lg font-semibold">
                  {industry.title}
                </h3>

              </div>
            );
          })}

        </div>
      </section>

    </main>
  );
}