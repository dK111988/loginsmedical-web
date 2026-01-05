import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_pp6hxtm',      // Service ID
        'template_2dqwe88',     // Template ID
        form.current,
        'KPZNayhMjygasVLrF'     // Public Key
      )
      .then(
        (result) => {
          alert('ส่งอีเมลสำเร็จ!');
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          alert('เกิดข้อผิดพลาดในการส่งอีเมล');
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name="user_name" required />
        <input type="email" placeholder="Your E-Mail" name="user_email" required />
        <textarea placeholder="Write your message here" name="massage" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;