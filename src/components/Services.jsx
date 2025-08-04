import React from 'react';

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Resume Building</div>
        <div className="bg-white p-6 rounded shadow">Interview Prep</div>
        <div className="bg-white p-6 rounded shadow">Career Counseling</div>
      </div>
    </section>
  );
};

export default Services;
