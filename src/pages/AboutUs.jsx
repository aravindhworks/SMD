import React from "react";
import ContactUs from "../components/ContactUs";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section with Logo */}
      <div className="flex items-center justify-center mb-6">
        <img src="/images/logo.png" alt="SMD Logo" className="w-16 h-16 mr-4" />
        <h1 className="text-4xl font-bold text-blue-900">SMD Engineering Equipment & Systems</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Image */}
        <img
          src="/images/DesignofAir.png"
          alt="SMD Engineering"
          className="w-full rounded-lg shadow-md"
        />
        
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Profile</h2>
          <p className="text-gray-700 mb-4">
          Established in 2010, SMD Engineering Equipments & Systems has been a trusted name in the design, manufacturing, and export of premium 
          Painting Booths, Paint Shop Plants, Powder Coating Plants, and Pollution Control Equipment. With a strong presence in multiple industries, 
          including engineering, automobile, chemical, cement, and public sector enterprises, we are dedicated to delivering innovative and efficient
           solutions tailored to diverse industrial needs.
          </p>
          <p className="text-gray-700">
          As an ISO 9001:2008 certified company, we uphold the highest standards of quality and precision in every product we manufacture. 
          Our commitment to excellence is reflected in our use of advanced technology, 
          superior raw materials, and stringent quality control measures to ensure durability and optimal performance.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Why Choose Us */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Excellent product quality</li>
            <li>State-of-the-art infrastructure</li>
            <li>On-time delivery</li>
            <li>Highly skilled workforce</li>
          </ul>
        </div>

        {/* Services & Maintenance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Services & Maintenance</h2>
          <p className="text-gray-700">
            We provide professional maintenance services to ensure optimal performance of our equipment. Our trained
            professionals deliver efficient and timely support tailored to client specifications.
          </p>
        </div>

        {/* Infrastructure & Quality Assurance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Infrastructure & Quality</h2>
          <p className="text-gray-700">
            Our well-structured infrastructure includes specialized units for manufacturing, quality testing, warehousing,
            and R&D. We follow strict quality management protocols to ensure superior product reliability, efficiency, and longevity.
          </p>
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
};

export default AboutUs;
