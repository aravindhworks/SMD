import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your EmailJS credentials
      const serviceID = 'service_ujytste'; // Replace with your EmailJS Service ID
      const templateID = 'template_vzveo22'; // Replace with your EmailJS Template ID
      const userID = 'pKf-uTE6hiHxfgt5q'; // Replace with your EmailJS User ID

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, formData, userID);

      setSubmitStatus('Email sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-800 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">ENQUIRY FORM</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <p className={`mt-4 text-center ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;