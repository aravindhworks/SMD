import React from 'react';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  const products = [
    {
      title: "Air Agitation System",
      description:
        "We offer Air Agitation System, which is marketed at affordable prices. The agitation system eliminates the need to remove the cover once a year for agitation and solids removal.",
      image: "/images/popularproducts/Air.png", // Replace with your image path
    },
    {
      title: "Centrifugal Fan",
      description:
        "Our clients can avail Centrifugal Fan, which is of small size, easy installation, low noise, less vibration, reliable operation, and excellent functioning.",
      image: "/images/popularproducts/Centrifugalfan.png", // Replace with your image path
    },
    {
      title: "Dry Type Paint Booth",
      description:
        "We are specialized in offering our clients a wide range of Dry Type Paint Booth, which include Bench Spray Paint Booths, Side Draft Paint Booths, and Down Draft Paint Booths.",
      image: "/images/popularproducts/booth.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
          Our Popular Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {product.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            </div>
          ))}
        </div>

        {/* See More Products Button */}
        <div className="text-center">
          <Link
            to="/products" // Replace with your products page route
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            See More Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;