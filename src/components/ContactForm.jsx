import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email to YOU
    emailjs.sendForm(
      'service_j4qj55o',
      'template_5bb3o47',
      form.current,
      'q3y_Ai0osWOxaq2EQ'
    ).then(() => {
      console.log('Contact form sent to owner');
    }).catch((error) => {
      console.log('Error sending to owner:', error);
    });

    // Auto reply to user
    emailjs.sendForm(
      'service_j4qj55o',
      'template_c0r1bet',
      form.current,
      'q3y_Ai0osWOxaq2EQ'
    ).then(() => {
      console.log('Auto-reply sent to user');
    }).catch((error) => {
      console.log('Error sending auto-reply:', error);
    });

    form.current.reset(); // clear the form
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
