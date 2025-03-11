import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-0">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SMD Engineering. All rights reserved.</p>
        <p>Designed and Developed by Aravindh</p>
      </div>
    </footer>
  );
};

export default Footer;