import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import heroImage from '../assets/hero.jpg';

const About = () => {
  const skills = [
    { name: "AWS Cloud", icon: "☁️", level: 95 },
    { name: "Kubernetes", icon: "⎈", level: 90 },
    { name: "Docker", icon: "🐳", level: 92 },
    { name: "Terraform", icon: "🖥️", level: 88 },
    { name: "CI/CD Pipelines", icon: "🔄", level: 94 },
    { name: "Ansible", icon: "⚙️", level: 85 },
    { name: "Jenkins", icon: "🤖", level: 87 },
    { name: "Linux/Unix", icon: "🐧", level: 93 }
  ];

  return (
    <>
      <Helmet>
        <title>About - RJ Careers</title>
      </Helmet>

      <main className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] min-h-screen text-white px-4 sm:px-6 md:px-16 py-16 sm:py-20 overflow-hidden relative">
        {/* Floating background elements - Reduced for mobile */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
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

        {/* About Section */}
        <section className="max-w-6xl mx-auto relative z-10 py-8 sm:py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center"
          >
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl opacity-50 blur-md sm:blur-lg"></div>
                <img 
                  src={heroImage}
                  alt="Ramagiri Jithendar"
                  className="relative rounded-xl sm:rounded-2xl w-full h-auto border-2 sm:border-4 border-gray-800 shadow-lg sm:shadow-2xl"
                />
              </motion.div>
            </div>

            <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500"
              >
                Ramagiri Jithendar
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                <span className="text-blue-400 font-medium">DevOps Engineer</span> with 5.7+ years of experience building and automating scalable cloud infrastructure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="prose prose-invert max-w-none mb-8 sm:mb-12 text-sm sm:text-base"
              >
                <p>
                  I specialize in architecting and implementing robust DevOps solutions using cutting-edge technologies like <span className="text-cyan-400">Kubernetes</span>, <span className="text-blue-400">Docker</span>, <span className="text-green-400">Terraform</span>, and <span className="text-yellow-400">AWS</span> cloud services.
                </p>
                
                <p>
                  My expertise spans the entire software delivery lifecycle - from infrastructure as code and CI/CD pipeline development to production monitoring and optimization.
                </p>
                
                <p>
                  Beyond my professional work, I'm passionate about mentoring aspiring DevOps professionals through:
                </p>
                
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Resume building with ATS optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>LinkedIn/Naukri profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Real-world DevOps project guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Interview preparation (technical & behavioral)</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full px-6 py-2 sm:px-8 sm:py-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Get Career Guidance
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto relative z-10 py-8 sm:py-12 mt-8 sm:mt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Technical Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 sm:mb-6">Core DevOps Skills</h3>
                <div className="space-y-4 sm:space-y-6">
                  {skills.slice(0, 4).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">
                          <span className="mr-2">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-blue-400 text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 sm:h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 sm:h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4 sm:mb-6">Additional Competencies</h3>
                <div className="space-y-4 sm:space-y-6">
                  {skills.slice(4).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">
                          <span className="mr-2">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 sm:h-2.5">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 sm:h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-4xl mx-auto relative z-10 py-8 sm:py-12 mt-8 sm:mt-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              My Career Mentorship Philosophy
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Practical Over Theoretical</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Focus on real-world applications and hands-on projects that demonstrate value to employers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">ATS Optimization</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Engineer your resume to pass automated screening systems used by 95% of companies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sky-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Personalized Approach</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Tailored guidance based on your current skills, experience level, and career aspirations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">End-to-End Support</h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Continuous mentorship from resume preparation through salary negotiation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto relative z-10 py-12 sm:py-16 md:py-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/20 backdrop-blur-md"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Ready to Accelerate Your DevOps Career?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-10 text-base sm:text-xl leading-relaxed">
              Let's work together to create a job search strategy that highlights your unique value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:+9177880996"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
              <a
                href="mailto:ramgirjithendar17@gmail.com"
                className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800/50 text-blue-400 font-medium rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email Me
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default About;