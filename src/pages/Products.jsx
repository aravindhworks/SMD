import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Single Card for Painting Booth */}
        <Link
          to="/painting-booths"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-900">Painting Booth</h2>
          <p className="text-gray-700 mt-2">Explore our range of high-quality painting booths for industrial and commercial use.</p>
        </Link>
      </div>
    </div>
  );
};

export default Products;