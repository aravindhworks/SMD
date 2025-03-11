import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const WorkCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "/images/workcorousel/image1.png", text: "Surface-Preparation-Plant" },
    { src: "/images/workcorousel/image2.png", text: "Pre-treatment-plant" },
    { src: "/images/workcorousel/image3.png", text: "Hot-Dip-Ph-Plant" },
    { src: "/images/workcorousel/image4.png", text: "Off-line-pre-treatment-plant1" },
    { src: "/images/workcorousel/image5.png", text: "Conveyorised Pre-Treatment Plant" },
    { src: "/images/workcorousel/image6.png", text: "Industrial Batch Ovens" },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Some of our Industrial Solutions </h2>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.text}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">
              {selectedImage.text}
            </p>
          </div>
        </div>
      )}

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        className="shadow-lg rounded-lg overflow-hidden"
        centerMode={true}
        centerSlidePercentage={33.33}
        responsive={{
          mobile: {
            breakpoint: { max: 767, min: 0 },
            centerMode: false,
            centerSlidePercentage: 100,
          },
          desktop: {
            breakpoint: { max: 3000, min: 768 },
            centerMode: true,
            centerSlidePercentage: 33.33,
          },
        }}
      >
        {images.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center px-2 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={item.src}
              alt={`Work ${index + 1}`}
              className="w-full h-48 md:h-96 object-cover rounded-md transition-transform hover:scale-105"
            />
            <p className="text-gray-700 font-bold mt-2 text-center">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkCarousel;