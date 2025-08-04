import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <blockquote className="bg-white p-6 rounded shadow">
          "RJ Careers Pro helped me land my dream job. Highly recommended!" – Priya
        </blockquote>
        <blockquote className="bg-white p-6 rounded shadow">
          "Professional service with real impact. Thank you!" – Rahul
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
