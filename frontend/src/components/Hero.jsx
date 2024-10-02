import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Number of slides
  const slideDuration = 3000; // Slide every 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, slideDuration);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel w-full overflow-hidden relative">
      <div
        className="slides flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
            alt="Slide 4"
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Hero;
