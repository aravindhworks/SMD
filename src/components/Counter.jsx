import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Counter = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const counterRef = useRef(null);

  // Logos for the carousel
  const logos = Array.from({ length: 78 }, (_, index) => `/images/clients/image${index + 1}.png`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Start counter animation when component is in view
          animateCounter(setHappyClients, 500, 3000); // 0 to 100 in 2 seconds
          animateCounter(setProjectsCompleted, 200, 2000); // 0 to 80 in 2 seconds
        } else {
          // Reset counters when component is out of view
          setHappyClients(0);
          setProjectsCompleted(0);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const animateCounter = (setCounter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // 16ms per frame for smooth animation

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCounter(Math.ceil(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCounter(target);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={counterRef} className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Counter Section */}
        <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Happy Clients Counter */}
          <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Happy Clients</h3>
            <p className="text-5xl font-bold">{happyClients}+</p>
          </div>

          {/* Projects Completed Counter */}
          <div className="p-6 bg-blue-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Projects Completed</h3>
            <p className="text-5xl font-bold">{projectsCompleted}+</p>
          </div>
        </div>

        {/* Logo Carousel Section */}
        <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2000, // Auto-slide every 2 seconds
            disableOnInteraction: false, // Continue autoplay even when user interacts
          }}
          loop={true} // Infinite loop
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Counter;