import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg mb-4">AVSORA SOFTWARE</h2>

          <p className="text-gray-600 text-sm mb-6">
            Enterprise-ready SAP solutions for modern businesses. Your trusted
            partner in digital transformation delivering scalable cloud
            innovation and intelligent process automation.
          </p>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-2">
              <Mail size={16} /> support@avsorasoftware.com
            </div>

            <div className="flex gap-2">
              <Mail size={16} /> avinash@avsorasoftware.com
            </div>

            <div className="flex gap-2">
              <Phone size={16} /> +91 7075481224
            </div>

            <div className="flex gap-2">
              <MapPin size={16} /> Hyderabad, India
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">SAP Consulting</Link></li>
            <li><Link href="#">SAP BTP & Cloud</Link></li>
            <li><Link href="#">SAP Fiori / UI5</Link></li>
            <li><Link href="#">SAP Automation</Link></li>
            <li><Link href="#">SAP Testing & QA</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/why-avsora">Why AVSORA</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © 2026 AVSORA SOFTWARE PVT LTD. All rights reserved.
      </div>
    </footer>
  );
}
