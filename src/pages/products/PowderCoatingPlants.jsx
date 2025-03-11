import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';

const PowderCoatingPlants = () => {
  const { slug } = useParams();
  const product = data.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-6">{product.description}</p>
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Features</h2>
      <ul className="list-disc list-inside text-gray-700">
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PowderCoatingPlants;