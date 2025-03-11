import React from 'react';
import data from './paintboothdata.json';

const PaintingBooths = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-900">Painting Booths</h1>
        <a
          href="/paintboothcatalogue.pdf"
          download
          className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Download Catalogue
        </a>
      </div>
      <div className="space-y-8">
        {data.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-6" />
            <p className="text-lg text-gray-700 mb-6">{product.bigDescription}</p>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Features</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Product Details</h3>
            <table className="w-full text-left border-collapse">
              <tbody>
                {Object.entries(product.details).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="p-2 font-semibold">{key}</td>
                    <td className="p-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingBooths;
