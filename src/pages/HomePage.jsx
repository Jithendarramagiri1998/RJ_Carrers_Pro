// src/pages/HomePage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const HomePage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send to owner
    emailjs.sendForm(
      'service_j4qj55o',
      'template_5bb3o47',
      form.current,
      'q3y_Ai0osWOxaq2EQ'
    ).catch(error => console.error('Error sending to owner:', error));

    // Auto-reply to user
    emailjs.sendForm(
      'service_j4qj55o',
      'template_c0r1bet',
      form.current,
      'q3y_Ai0osWOxaq2EQ'
    ).then(() => {
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I will get back to you soon.'
      });
      form.current.reset();
    }).catch(error => {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen text-white px-4 sm:px-6 md:px-16 py-20 overflow-hidden relative">
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

      {/* Contact Ribbon */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-6 z-50">
        <a href="tel:+91 9177880996" className="flex items-center hover:text-white transition-colors py-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          +91 9177880996
        </a>
        <a href="mailto:ramgirjithendar17@gmail.com" className="flex items-center hover:text-white transition-colors py-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span className="truncate max-w-[180px] sm:max-w-none">ramgirjithendar17@gmail.com</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center relative z-10 pt-32 pb-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            RJ Careers Pro
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-gray-300 mb-12 text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium career consulting for tech professionals. Get interview-ready with ATS-optimized resumes, profile makeovers, and strategic job search guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
              <svg className="w-5 h-5 ml-2 animate-pulse-horizontal" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800/50 text-blue-400 font-medium rounded-full px-8 py-4 transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Book Consultation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto relative z-10 pb-20 sm:pb-40 px-4" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
          >
            Professional Career Services
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 max-w-4xl mx-auto mb-20 text-xl leading-relaxed"
          >
            Comprehensive solutions for tech professionals at all career stages - from fresh graduates to experienced developers.
          </motion.p>

          <motion.div
            variants={container}
            className="grid gap-8 md:grid-cols-3 text-left"
          >
            {/* Service 1 */}
            <motion.div
              variants={item}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-sky-400">Resume Crafting</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                ATS-optimized resumes that get you past screening algorithms and in front of hiring managers.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Keyword optimization for ATS systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Technical skill highlighting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Impact-driven achievement statements</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={item}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 overflow-hidden relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-cyan-400">Profile Optimization</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transform your LinkedIn and Naukri profiles into recruiter magnets with strategic keyword placement.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Headline and summary rewriting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Recruiter search optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Endorsement and recommendation strategy</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={item}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-sky-500/30 overflow-hidden relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500"></div>
              <div className="flex items-center mb-6">
                <div className="bg-sky-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-sky-400">Interview Prep</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Master technical and behavioral interviews with our comprehensive coaching program.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Technical problem-solving frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Behavioral question strategies (STAR method)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sky-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Salary negotiation techniques</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto relative z-10 pb-20 sm:pb-40 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-blue-500/20 backdrop-blur-md"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Let's Transform Your Career
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-xl leading-relaxed">
            Get in touch for a free initial consultation to discuss your career goals and how we can help you achieve them.
          </p>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3 sm:mb-4">Contact Information</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-500/10 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <a href="tel:9177880996" className="text-white hover:text-blue-300 transition-colors text-sm sm:text-base">+91 9177880996</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/10 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <a href="mailto:ramgirjithendar17@gmail.com" className="text-white hover:text-blue-300 transition-colors text-sm sm:text-base truncate">ramgirjithendar17@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500/10 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Availability</p>
                    <p className="text-white text-sm sm:text-base">Mon-Fri: 9AM - 6PM IST</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">Quick Contact Form</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="How can we help you?" 
                    rows="3"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg px-6 py-2 sm:py-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg text-sm ${submitMessage.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="https://wa.me/9177880996"
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Contact on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </motion.div>
    </main>
  );
};

export default HomePage;