import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">CONTACT US</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Address */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">OFFICE</h3>
            <p className="text-gray-700 mb-3">
              No. 2, Varriyar Street, Vivekkandha Nagar,<br />
              Avadi, Chennai - 600054, Tamil Nadu, India.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Mobile:</strong> +91 9551150504
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> smdequipments@gmail.com
            </p>
            <a
              href="https://maps.app.goo.gl/eVoG6mtCzMocFcuN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Factory Address */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">FACTORY</h3>
            <p className="text-gray-700 mb-3">
              No. 8/64-B, Dhanabakkiyam Street, Krishnaveni Complex,<br />
              Paraniputhur, Chennai - 600122, Tamil Nadu, India.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Phone:</strong> 044 - 35660657
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Mobile:</strong> 9884482469
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> smdsfs@gmail.com
            </p>
            <a
              href="https://maps.app.goo.gl/eVoG6mtCzMocFcuN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Google Map Embed (Full Width and Centered) */}
        <div className="mt-12 w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.0389488511348!2d80.10965894335453!3d13.10821291122351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52626fb7fa763d%3A0xfdf8c929009f1a1a!2sSMD%20ENGINEERING%20EQUIPMENTS%20%26%20SYSTEMS%20-%20Pre%20Treatment%20Plant%20-%20Liquid%20%26%20Dry%20Type%20Spray%20Paint%20Booth%20Filters%20-Powder%20Coating%20Oven!5e0!3m2!1sen!2sin!4v1741582280831!5m2!1sen!2sin"
            width="100%"
            height="300" // Default height for mobile
            className="md:h-[450px]" // Larger height for desktop
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;