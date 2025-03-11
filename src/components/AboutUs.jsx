import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 text-lg text-gray-700">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="mb-4">
            <strong>SMD Engineering Equipments & Systems</strong> is established in the year of 2010. We are engaged in Design, Manufacturing and exporting exclusive range of{' '}
            <strong>Painting Booths</strong>, <strong>Paint Shop Plant</strong>, <strong>Powder Coating Plant</strong>, and{' '}
            <strong>Pollution Control Equipments</strong>. In South India, our equipments are widely used in all engineering, automobile, chemical, cement, industries, and in public sector industries.
          </p>
          <p className="mb-4">
            We also provide technical expertise and solutions for Paint Shop and Pollution Control Equipments problems in different industries. We have demonstrated expertise in producing globally acclaimed products. Our services also include repair and maintenance services.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Read More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="../../images/aboutus.png"
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
