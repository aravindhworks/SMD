import React from 'react';

const Header = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = '/paintboothcatalogue.pdf'; // Replace with the actual path to your PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'paintboothcatalogue.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-100 bg-gray-100">
      {/* Div with Background Image */}
      <div
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/paintshop.png')`, // Replace with your image path
        }}
      >
        {/* Overlay to darken the background image (optional) */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Welcome to SMD Engineering Equipments & Systems{' '}
            <br />
            <span className="text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-300">
              Surface Finishing System & Air Pollution Control Equipments
            </span>
          </h1>
        </div>
      </div>

      {/* Rest of the Content */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center text-center">
          {/* Paragraph */}
          <p className="text-lg text-blue-900 font-semibold mt-3 mb-6">
            SMD Engineering Equipments & Systems is established in the year 2010. We are engaged in designing, manufacturing, and exporting exclusive ranges of Painting Booths, Paint Shop Plants, Powder Coating Plants, and Pollution Control Equipments.
          </p>

          {/* Button and Text */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Catalog
            </button>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;