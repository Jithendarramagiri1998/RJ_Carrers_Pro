import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      title: "Resume Optimization",
      description: "ATS-compliant resume tailored for DevOps roles with keyword optimization and achievement-focused content.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "ATS formatting compliance",
        "Technical skill highlighting",
        "Achievement-driven bullet points",
        "Industry-specific customization"
      ]
    },
    {
      title: "LinkedIn & Naukri Makeover",
      description: "Complete profile optimization to increase visibility and recruiter engagement.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Keyword-rich headline & summary",
        "Recruiter search optimization",
        "Project showcase section",
        "Endorsement strategy"
      ]
    },
    {
      title: "Interview Coaching",
      description: "Comprehensive preparation for technical and behavioral DevOps interviews.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Technical problem-solving frameworks",
        "Behavioral (STAR method) training",
        "System design concepts",
        "Salary negotiation techniques"
      ]
    },
    {
      title: "Career Strategy Session",
      description: "Personalized roadmap for your DevOps career growth and job search.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Skills gap analysis",
        "Learning path recommendation",
        "Job search strategy",
        "Long-term career planning"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | RJ Careers - DevOps Career Services</title>
        <meta name="description" content="Professional DevOps career services including resume optimization, interview coaching, and LinkedIn profile enhancement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen text-white px-4 sm:px-6 md:px-16 py-12 md:py-24 overflow-hidden relative">
        {/* Floating background elements - reduced for mobile */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                opacity: 0.1
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center mb-8 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              Professional Career Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
            >
              Designed for DevOps professionals at all career stages - from fresh graduates to experienced engineers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start mb-4 md:mb-6">
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 md:mt-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center border border-blue-500/20 backdrop-blur-md mx-4 sm:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed">
              Book a free 15-minute consultation to discuss which service is right for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Get Started
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="tel:+9177880996"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800/50 text-blue-400 font-medium rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default Services;