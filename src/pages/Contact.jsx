import React, { useState } from 'react';
import ContactUs from '../components/ContactUs';
import EnquiryForm from '../components/EnquiryForm';

const Contact = () => {

  return (
    <>
     <div className="mt-0">
          <EnquiryForm /> {/* Use the EnquiryForm component here */}
        </div>
    <ContactUs></ContactUs>
   
    </>
  );
};

export default Contact;