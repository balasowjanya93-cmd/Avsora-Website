

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navbar */}
      <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="font-semibold text-lg">
              AVSORA <span className="text-blue-600">SOFTWARE</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/why-avsora">Why AVSORA</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Enterprise-Ready SAP
            <br />
            Innovation for{" "}
            <span className="text-blue-600">Modern Businesses</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Delivering scalable SAP solutions, cloud innovation, and intelligent
            process automation to accelerate digital transformation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Get Started →
            </Link>

            <Link
              href="/services"
              className="border border-slate-300 text-slate-700 px-8 py-3 rounded-md font-medium hover:bg-slate-100 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-900">

//       {/* Hero Section */}
//       <section className="text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
//         <h1 className="text-5xl font-bold mb-6">
//           AVSORA Technologies
//         </h1>
//         <p className="text-xl max-w-2xl mx-auto">
//           Empowering businesses with SAP Solutions, Java Development,
//           Testing Services, and Enterprise Workflows.
//         </p>
//       </section>

//       {/* Services */}
//       <section className="py-20 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Services
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-3">SAP Solutions</h3>
//             <p>End-to-end SAP consulting and implementation services.</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Java Development</h3>
//             <p>Enterprise-grade applications using Spring Boot & microservices.</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Testing Services</h3>
//             <p>Automation and manual testing for quality-driven delivery.</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
//             <p>Streamlining business processes with smart workflow systems.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white text-center py-6">
//         © {new Date().getFullYear()} AVSORA Technologies. All rights reserved.
//       </footer>

//     </main>
//   );
// }