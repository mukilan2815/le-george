import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const LimitedEditionShirtsHomepage = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white relative overflow-hidden p-8">
        <main className="max-w-2xl mx-auto mt-24 text-center px-4 z-10 relative">
          <h1 className="text-5xl font-bold mb-4">
            Your next favorite shirt awaits.
          </h1>
          <div className="relative inline-block">
            <span
              className="absolute bottom-0 left-0 right-0 h-1 bg-black"
              style={{
                maskImage:
                  "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 Q25,0 50,5 T100,5' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E\")",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            ></span>
          </div>
          <p className="text-xl mb-12">
            Discover our exclusive collection of limited edition shirts. Once
            they're gone, they're gone forever!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to={"/products"}
              className="px-8 py-3 bg-white border border-gray-300 rounded-full text-sm"
            >
              Shop Now
            </Link>
            <Link
              to={"/products"}
              className="px-8 py-3 bg-white border border-gray-300 rounded-full text-sm flex items-center"
            >
              This Month's Exclusive
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </main>

        {/* Placeholder images */}
        <div className="absolute inset-0">
          {/* Left side images */}
          <img
            src="https://cdn.mangaupdates.com/image/i418953.jpg"
            alt="Limited Edition Shirt"
            className="absolute -left-20 top-0 w-40 h-60 object-cover transform -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />
          <img
            src="https://www.theindianbookstore.in/cdn/shop/products/8_67d5eb56-2833-4e2e-9c5f-be3e706da574.png?v=1665599711&width=533"
            alt="Limited Edition Shirt"
            className="absolute -left-16 top-40 w-40 h-60 object-cover transform rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />
          <img
            src="https://www.theindianbookstore.in/cdn/shop/products/812k3BWrksL.jpg?v=1672749490&width=533"
            alt="Limited Edition Shirt"
            className="absolute -left-20 bottom-20 w-40 h-60 object-cover transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />

          {/* Right side images */}
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435524806i/204042._UY240_.jpg"
            alt="Limited Edition Shirt"
            className="absolute -right-20 top-0 w-40 h-60 object-cover transform rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595161901i/50891158._UX160_.jpg"
            alt="Limited Edition Shirt"
            className="absolute -right-16 top-40 w-40 h-60 object-cover transform -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/w/v/k/medium-shingeki-no-kyojin-eren-jeager-manga-matte-finish-poster-original-imag8g95mppmbnyg.jpeg?q=90&crop=false"
            alt="Limited Edition Shirt"
            className="absolute -right-20 bottom-20 w-40 h-60 object-cover transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
          />

          {/* Bottom images */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between space-x-4">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661478065i/62086211._UY240_.jpg"
              alt="Limited Edition Shirt"
              className="w-40 h-60 object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
            />
            <img
              src="https://a.storyblok.com/f/178900/640x960/26ae8443f7/421d404c6a1cfb9f5e103b709cf364981325706809_full.jpg/m/640x960"
              alt="Limited Edition Shirt"
              className="w-40 h-60 object-cover transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
            />
            <img
              src="https://media.comikey.com/gazo/480/jpg/comics/dowL1k/713750747346.jpg"
              alt="Limited Edition Shirt"
              className="w-40 h-60 object-cover transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-125"
            />
            <img
              src="https://mixmangastore.com/cdn/shop/files/81yS2PMLZ0L_1024x1024.jpg?v=1686390476"
              alt="Limited Edition Shirt"
              className="w-40 h-60 object-cover transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
            />
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/i/e/z/medium-butcute14040-anime-date-a-live-anime-girls-yatogami-tohka-original-imagkpkzyzv7fzgf.jpeg?q=90&crop=false"
              alt="Limited Edition Shirt"
              className="w-40 h-60 object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>  
  );
};

export default LimitedEditionShirtsHomepage;
