import React, { useState, useEffect } from "react";
import { ChevronDown, Heart, Search, Filter } from "lucide-react";
import Navbar from "../components/Navbar";

const Banner = () => (
  <div className="relative w-full h-64 overflow-hidden mb-8">
    <img
      src="https://www.zlaatafashion.com/cdn/shop/files/Anime_Banner_5fce9825-3c54-47c4-b81f-7e9a362232dc.jpg?v=1722589402&width=2000"
      alt="Anime Banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">ANIME MERCH</h1>
      <p className="text-xl">Express Your Fandom</p>
    </div>
  </div>
);

const AnimeButton = ({ children, className = "" }) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 ${className}`}
  >
    {children}
  </button>
);

const Products = ({ initialCategory }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(initialCategory || "");

  const allProducts = [
    {
      name: "BREAKIN' THE RULES",
      price: "Rs. 999.00",
      originalPrice: "Rs. 1,799.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7AxGRYdGWLVBkHqAA_Gq0FKYABRFBXRvAg&s",
      hoverImage:
        "https://m.media-amazon.com/images/I/61v9ja0OEFL._AC_UY1100_.jpg",
      animeName: "One Punch Man",
      category: "Oversized Tshirt",
    },
    {
      name: "YUTA 002",
      price: "Rs. 999.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6_NINxyP1hheImZXjr3jObaJ8oWpHur2Eg&s",
      hoverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KylpKfl-r4ZAFo_HLSSOKFHGXZRqTRt4hw&s",
      animeName: "Jujutsu Kaisen",
      category: "Oversized Tshirt",
    },
    {
      name: "VAGABOND 001",
      price: "Rs. 999.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "https://www.zamsfashion.in/cdn/shop/files/Untitled-1add.jpg?v=1724504519&width=2000",
      hoverImage:
        "https://www.zamsfashion.in/cdn/shop/files/adsadAf.jpg?v=1724504519&width=2000",
      animeName: "Vagabond",
      category: "Posters",
    },
    {
      name: "JUMP!",
      price: "Rs. 999.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "https://rukminim2.flixcart.com/image/300/400/xif0q/kids-t-shirt/k/t/h/15-16-years-jc-boy22-rn-fs-blk-getout-jump-cuts-original-imagrvfgzz7aets4.jpeg?q=90&crop=false",
      hoverImage:
        "https://assets.ajio.com/medias/sys_master/root/20230629/zpFZ/649ce963a9b42d15c91f43e1/-473Wx593H-466063370-black-MODEL.jpg",
      animeName: "My Hero Academia",
      category: "Posters",
    },
  ];

  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, category]);

  const filterProducts = () => {
    let filteredProducts = allProducts;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.animeName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  };

  const animeQuotes = [
    "Plus Ultra!",
    "I'll become the Hokage!",
    "Kamehameha!",
    "Omae wa mou shindeiru.",
    "I am gonna be the Pirate King!",
    "In the name of the moon, I'll punish you!",
    "I am justice!",
    "Bang!",
    "I am the bone of my sword.",
    "It's not the face that makes someone a monster; it's the choices they make with their lives.",
    "I am vengeance! I am the night! I am Batman!",
    "Believe in the me that believes in you!",
    "I am the hope of the universe!",
    "I am the sword in the darkness.",
    "I am the one who will defeat you!",
  ];

  const [quote, setQuote] = useState(animeQuotes[0]);

  const changeQuote = () => {
    const newQuote =
      animeQuotes[Math.floor(Math.random() * animeQuotes.length)];
    setQuote(newQuote);
  };

  return (
    <div className="container mx-auto px-4 font-sans bg-gray-100">
      <Navbar onCategoryClick={setCategory} />
      <Banner />

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {products.length} PRODUCTS
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 transition-colors duration-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 transition-colors duration-300">
              <option>DATE, NEW TO OLD</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <p
          className="text-2xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {quote}
        </p>
        <button
          onClick={changeQuote}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Get Anime Quote!
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative">
              <img
                src={
                  hoveredProduct === index ? product.hoverImage : product.image
                }
                alt={product.name}
                className="w-full h-80 object-cover cursor-pointer transition-opacity duration-300"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </div>
              {hoveredProduct === index && (
                <div className="absolute bottom-0 left-0 right-0 transition-all bg-black bg-opacity-70 text-white p-4">
                  <p className="font-bold mb-2">Select Size:</p>
                  <div className="flex justify-center space-x-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="bg-white cursor-pointer text-black px-2 py-1 rounded hover:bg-gray-200 transition-colors duration-300"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "'Bangers', cursive" }}
              >
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{product.animeName}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-red-500 font-bold">
                    {product.price}
                  </span>
                  <span className="text-gray-500 line-through text-sm ml-2">
                    {product.originalPrice}
                  </span>
                </div>
                <button className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
