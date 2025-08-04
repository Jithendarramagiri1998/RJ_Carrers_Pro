import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

const SERVICES = [
  { icon: "📝", title: "Resume Writing", desc: "ATS‑friendly resumes tailored to hiring needs." },
  { icon: "🎯", title: "Interview Coaching", desc: "Mock sessions with feedback for real confidence." },
  { icon: "💼", title: "LinkedIn Optimization", desc: "Profile enhancements to boost visibility." },
];

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="h-[90vh] bg-gradient-to-br from-indigo-50 to-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
              Elevate Your Career with Expert Guidance
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Resume redesign, interview prep, and LinkedIn optimization by RJ Careers Pro to bring your success goals into reach.
            </p>
            <motion.a href="/contact" whileHover={{ scale: 1.03 }} className="mt-8 inline-block bg-accent text-white py-3 px-8 rounded-lg shadow-lg font-semibold">
              Schedule Your Free Session
            </motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <img src={heroImage} alt="Career Support" className="rounded-3xl shadow-2xl w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <motion.h2 className="text-4xl font-semibold text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>Our Services</motion.h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-10">
          {SERVICES.map((s, i) => (
            <motion.div key={i} className="bg-indigo-50 p-8 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }}>
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-700">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">
          Ready to jump-start your career?
        </motion.h2>
        <motion.a href="/contact" whileHover={{ scale: 1.05 }} className="mt-6 inline-block bg-primary hover:bg-primary/90 py-3 px-8 rounded-full font-semibold">
          Contact Us on WhatsApp
        </motion.a>
      </section>
    </div>
  );
}
