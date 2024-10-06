import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="h-[400px] overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://marketplace.canva.com/EAFuUVuQu98/1/0/1600w/canva-yellow-pink-bold-fashion-sale-landscape-banner-XgQnSpGbsnQ.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://marketplace.canva.com/EAF9SSPGr9w/1/0/800w/canva-yellow-white-bold-fashion-product-promotion-landscape-banner-xLZRNKH5-2M.jpg"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://marketplace.canva.com/EAE58B-PI3E/1/0/800w/canva-feminine-pink-and-brown-plus-size-fashion-sale-banner--KHtOUIdLt8.jpg"
            alt="Image 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
