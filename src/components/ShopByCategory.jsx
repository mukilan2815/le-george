import React, { useRef } from "react";
import "../index.css";
import tshirt1 from "../Assets/tshirts/tshirt1.jpg";
import tshirt2 from "../Assets/tshirts/tshirt2.jpg";
import tshirt3 from "../Assets/tshirts/tshirt3.jpg";
import tshirt4 from "../Assets/tshirts/tshirt4.jpg";

const categories = [
  { name: "OVERSIZED T-SHIRTS", image: tshirt1 },
  { name: "JOGGERS", image: tshirt2 },
  { name: "CARGOS", image: tshirt3 },
  { name: "CARGOS", image: tshirt4 },
];

const ArrowIcon = ({ direction }) => (
  <svg
    className={`w-6 h-6 stroke-current transition-transform duration-300 ${
      direction === "left" ? "rotate-180" : ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ShopByCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <h2 className="text-3xl font-bold text-center mb-8 animate-fadeIn">
        SHOP BY CATEGORY
      </h2>

      <div className="relative flex-col justify-center">
        <div
          ref={scrollRef}
          className="flex justify-center overflow-x-auto cursor-pointer gap-10 pb-4 scroll-smooth"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-none w-64 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative harmonia aspect-square mb-2 group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-4 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-lg font-semibold">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transform hover:scale-110 hover:rotate-6"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transform hover:scale-110 hover:-rotate-6"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
