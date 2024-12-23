import React from 'react';
import { NavLink } from 'react-router-dom';
function TermsAndC() {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms and Conditions</h1>

      <section className="terms-section">
        <h2>Welcome to Traveler</h2>
        <p>
          These Terms and Conditions outline the rules and regulations for the use of our website and services, which allow users to plan and customize their travel itineraries.
        </p>
        <p>
          By accessing or using <strong>Traveler</strong>, you accept and agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>1. Definitions</h2>
        <ul>
          <li><strong>"We", "Us", or "Our":</strong> Refers to <strong>Traveler</strong>, the platform offering travel itinerary planning services.</li>
          <li><strong>"User", "You", or "Your":</strong> Refers to the individual accessing or using our services.</li>
          <li><strong>"Service":</strong> Refers to the features provided on the Traveler platform, including itinerary planning and related tools.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>2. Use of Services</h2>
        <h3>2.1 Eligibility</h3>
        <ul>
          <li>Be at least 18 years old or have the permission of a legal guardian.</li>
          <li>Provide accurate and complete information when registering an account or planning an itinerary.</li>
        </ul>
        <h3>2.2 Permitted Use</h3>
        <p>
          You agree to use the services strictly for lawful and personal purposes. Commercial use of our platform or any unauthorized scraping of content is prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Account Registration</h2>
        <p>
          You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. We reserve the right to suspend or terminate accounts suspected of unauthorized use.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Service Features</h2>
        <ul>
          <li><strong>Itinerary Planning:</strong> Users can create, customize, and save travel itineraries.</li>
          <li><strong>Third-Party Content:</strong> Some tools may integrate third-party data (e.g., flight bookings, accommodations). We do not guarantee accuracy or availability.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>5. User Responsibilities</h2>
        <p>
          By using Traveler, you agree that:
        </p>
        <ul>
          <li>Your content (e.g., reviews, plans) will not contain illegal, harmful, or offensive material.</li>
          <li>You will not misuse the website, hack accounts, or distribute malware.</li>
          <li>You assume responsibility for your travel plans and arrangements.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. Payments and Subscriptions</h2>
        <p>
          Some features of Traveler may require payment or a subscription. Payment terms will be clearly communicated before purchase. We use secure payment gateways but are not responsible for payment provider errors.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Intellectual Property</h2>
        <p>
          All content on Traveler, including text, logos, images, and software, is the property of Traveler. You may not reproduce, copy, or distribute content without permission.
        </p>
        <p>
          Users retain ownership of content they upload but grant Traveler a license to display and use it on the platform.
        </p>
      </section>

      <section className="terms-section">
        <h2>Contact Us</h2>
        <p>If you have any questions regarding these Terms and Conditions, please contact us at:</p>
        <p><strong>Email:</strong> support@traveler.com</p>
        <p><strong>Phone:</strong> [+91012345678]</p>
      </section>
      <NavLink to="/register" style={{color:"white"}}><i class="fa-solid fa-arrow-left"></i>   Back</NavLink>
    </div>
  );
}

export default TermsAndC;