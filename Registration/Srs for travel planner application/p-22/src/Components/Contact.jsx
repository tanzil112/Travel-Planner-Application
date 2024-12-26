import React from 'react';

function Contact () {
  return (
    <>
    <div className="main-contact">
    <div class="contact-container">
    <h1 class="contact-header">Contact Us</h1>
    <p class="contact-description">We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out.</p>
    
    <div class="contact-form">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" className='inputs' placeholder="Your Full Name" required/>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email Address" className='inputs'  required/>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message..."className='inputs'  required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>

    <div class="contact-info">
      <h2>Our Office</h2>
      <p><strong>Address:</strong> 123 Travel Street, Wanderlust City, 45678</p>
      <p><strong>Email:</strong> <a href="mailto:support@traveler.com">support@traveler.com</a></p>
      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    </div>
  </div>
  </div>
    </>
  );
};

export default Contact;