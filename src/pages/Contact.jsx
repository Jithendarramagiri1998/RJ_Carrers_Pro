import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="5"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
