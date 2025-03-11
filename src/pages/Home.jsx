import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Aboutus from '../components/AboutUs';
import WorkCarousel from '../components/WorkCarousel';
import PopularProducts from '../components/PopularProducts';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  return (
   <>
   <Header></Header>
   <WorkCarousel></WorkCarousel>
   <PopularProducts></PopularProducts>
   <Aboutus></Aboutus>
   <Counter></Counter>
   <ContactUs></ContactUs>
   <EnquiryForm></EnquiryForm>
   
   </>
  );
};

export default Home;