import React from 'react';

const Clients = () => {
  // Array of client data (name, logo, description)
  const clients = [
    { id: 1, name: 'Toshiba', logo: '/images/clients/image1.png' },
    { id: 2, name: 'MRF', logo: '/images/clients/image2.png' },
    { id: 3, name: 'Yamaha', logo: '/images/clients/image3.png' },
    { id: 4, name: 'Flowserve', logo: '/images/clients/image4.png' },
    { id: 5, name: 'Blue Star', logo: '/images/clients/image5.png' },
    { id: 6, name: 'Ashok Leyland', logo: '/images/clients/image6.png' },
    { id: 7, name: 'Apollo Tyres', logo: '/images/clients/image7.png' },
    { id: 8, name: 'Sobha', logo: '/images/clients/image8.png' },
    { id: 9, name: 'Sinto', logo: '/images/clients/image9.png' },
    { id: 10, name: 'Siemens', logo: '/images/clients/image10.png' },
    { id: 11, name: 'Shivam Machine', logo: '/images/clients/image11.png' },
    { id: 12, name: 'SEW', logo: '/images/clients/image12.png' },
    { id: 13, name: 'Unknown', logo: '/images/clients/image13.png' },
    { id: 14, name: 'Schwing Stetter', logo: '/images/clients/image14.png' },
    { id: 15, name: 'Savera Group', logo: '/images/clients/image15.png' },
    { id: 16, name: 'Sharda Motors', logo: '/images/clients/image16.png' },
    { id: 17, name: 'SAPL', logo: '/images/clients/image17.png' },
    { id: 18, name: 'SAC', logo: '/images/clients/image18.png' },
    { id: 19, name: 'CIG', logo: '/images/clients/image19.png' },
    { id: 20, name: 'Unknown', logo: '/images/clients/image20.png' },
    { id: 21, name: 'RN', logo: '/images/clients/image21.png' },
    { id: 22, name: 'Pulkit', logo: '/images/clients/image22.png' },
    { id: 23, name: 'Prolec', logo: '/images/clients/image23.png' },
    { id: 24, name: 'Prabha Auto', logo: '/images/clients/image24.png' },
    { id: 25, name: 'PMEL', logo: '/images/clients/image25.png' },
    { id: 26, name: 'Unknown', logo: '/images/clients/image26.png' },
    { id: 27, name: 'Panacea', logo: '/images/clients/image27.png' },
    { id: 28, name: 'Okay Fern', logo: '/images/clients/image28.png' },
    { id: 29, name: 'Unknown', logo: '/images/clients/image29.png' },
    { id: 30, name: 'NEVCO', logo: '/images/clients/image30.png' },
    { id: 31, name: 'Noha', logo: '/images/clients/image31.png' },
    { id: 32, name: 'Unknown', logo: '/images/clients/image32.png' },
    { id: 33, name: 'Unknown', logo: '/images/clients/image33.png' },
    { id: 34, name: 'Unknown', logo: '/images/clients/image34.png' },
    { id: 35, name: 'Unknown', logo: '/images/clients/image35.png' },
    { id: 36, name: 'Mangal', logo: '/images/clients/image36.png' },
    { id: 37, name: 'Mahle', logo: '/images/clients/image37.png' },
    { id: 38, name: 'Magna', logo: '/images/clients/image38.png' },
    { id: 39, name: 'Lumax', logo: '/images/clients/image39.png' },
    { id: 40, name: 'Ludowici', logo: '/images/clients/image40.png' },
    { id: 41, name: 'Unknown', logo: '/images/clients/image41.png' },
    { id: 42, name: 'Koso', logo: '/images/clients/image42.png' },
    { id: 43, name: 'Unknown', logo: '/images/clients/image43.png' },
    { id: 44, name: 'Unknown', logo: '/images/clients/image44.png' },
    { id: 45, name: 'Kanam', logo: '/images/clients/image45.png' },
    { id: 46, name: 'JSW Steel', logo: '/images/clients/image46.png' },
    { id: 47, name: 'JKTyre', logo: '/images/clients/image47.png' },
    { id: 48, name: 'INZI Controls', logo: '/images/clients/image48.png' },
    { id: 49, name: 'A2 interiro Decorators', logo: '/images/clients/image49.png' },
    { id: 50, name: 'INDO Tech', logo: '/images/clients/image50.png' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">Our Valuable Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client) => (
          <div key={client.id} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={client.logo}
              alt={client.name}
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-bold text-blue-900 mb-2">{client.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
