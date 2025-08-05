import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send notification to owner
    emailjs.sendForm(
      'service_j4qj55o',
      'template_5bb3o47',
      form.current,
      'q3y_Ai0osWOxaq2EQ'
    ).then(() => {
      console.log('Notification sent to owner');
    }).catch(error => {
      console.error('Error sending to owner:', error);
    });

    // Send auto-reply to user
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
      console.error('Error sending auto-reply:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later or contact me directly at ramgirjithendar17@gmail.com'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact | RJ Careers - DevOps Career Services</title>
        <meta name="description" content="Get in touch for DevOps career consultation, resume reviews, and interview preparation services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen text-white px-4 sm:px-6 md:px-16 py-12 md:py-24 overflow-hidden relative">
        {/* Floating background elements */}
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

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10 px-4 sm:px-0"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Have questions about DevOps career services? Reach out and I'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg px-4 py-2 md:px-6 md:py-3 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 md:p-4 rounded-lg text-sm md:text-base ${submitMessage.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4">Direct Contact</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-3 md:mr-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                      <a href="tel:+91 9177880996" className="text-white hover:text-blue-300 transition-colors text-sm md:text-base">+91 9177880996</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-3 md:mr-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">Email</p>
                      <a href="mailto:ramgirjithendar17@gmail.com" className="text-white hover:text-blue-300 transition-colors text-sm md:text-base break-all">ramgirjithendar17@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-3 md:mr-4">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs md:text-sm">Availability</p>
                      <p className="text-white text-sm md:text-base">Monday - Friday: 9AM - 6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-3 md:mb-4">Connect Socially</h3>
                <div className="flex space-x-3 md:space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/jithendarramagiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="bg-gray-700/50 hover:bg-blue-600/20 p-2 md:p-3 rounded-lg border border-gray-600 hover:border-blue-400 transition-all"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Jithendarramagiri1998"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="bg-gray-700/50 hover:bg-gray-600/20 p-2 md:p-3 rounded-lg border border-gray-600 hover:border-gray-400 transition-all"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Contact;