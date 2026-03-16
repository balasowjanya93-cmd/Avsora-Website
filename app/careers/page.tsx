
"use client";

import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      title: "SAP CAPM Developer",
      location: "Hyderabad, India",
      exp: "2-4 Years",
    },
    {
      title: "UI5 Fiori Developer",
      location: "Hyderabad, India",
      exp: "1-3 Years",
    },
    {
      title: "SAP BPA Consultant",
      location: "Hyderabad, India",
      exp: "2-4 Years",
    },
    {
      title: "SAP QA Tester",
      location: "Hyderabad, India",
      exp: "1-3 Years",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          Build Your Career in <span className="text-blue-600">SAP Innovation</span>
        </h1>

        <p className="text-gray-600 mb-8 max-w-xl">
          Join a team focused on enterprise excellence and impactful SAP projects.
        </p>

        <a
          href="#positions"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View Open Positions
        </a>
      </section>

      {/* JOB LIST */}
      <section id="positions" className="max-w-4xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Open Positions
        </h2>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 flex justify-between items-center bg-white"
            >
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm">
                  {job.location} • {job.exp}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job.title)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      {selectedJob && (
        <ApplicationForm
          job={selectedJob}
          close={() => setSelectedJob(null)}
        />
      )}
    </main>
  );
}

function ApplicationForm({ job, close }: { job: string; close: () => void }) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("/api/apply", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        job,
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      alert("Application sent successfully!");
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl p-8 w-full max-w-lg">

        <h2 className="text-xl font-semibold mb-6">
          Apply for {job}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Tell us about yourself"
            className="w-full border p-3 rounded"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Send Application
            </button>

            <button
              type="button"
              onClick={close}
              className="border px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
