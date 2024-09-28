import React from "react";
import "../index.css";
import Baki from "../Assets/anime/baki.png";
import Dragonball from "../Assets/anime/dragonball.png";
import Naruto from "../Assets/anime/naruto.png";
import Onepiece from "../Assets/anime/onepiece.png";

const categories = [
  { name: "NARUTO", image: Naruto },
  { name: "DRAGONBALLS", image: Dragonball },
  { name: "ONE PIECE", image: Onepiece },
  { name: "BAKI HANMA", image: Baki },
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

const ShopByTheme = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">SHOP BY THEME</h2>

      <div className="relative flex-col justify-center">
        <div className="flex justify-center gap-10 pb-4">
          {categories.map((category, index) => (
            <div key={index} className="flex-none w-72 group">
              <div className="relative cursor-pointer aspect-square mb-2 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-4 transition-opacity duration-300 ease-out group-hover:bg-opacity-40">
                  <span className="text-white text-lg font-semibold">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400">
            <ArrowIcon direction="left" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400">
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopByTheme;
