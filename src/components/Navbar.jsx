import React from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import logo from "../Assets/logos/dark_red_logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onCategoryClick }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    navigate("/products");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <img src={logo} alt="ZAMS" className="w-24" />

          <ul className="hidden md:flex space-x-6 text-sm">
            <li>
              <a href="/home" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("Oversized Tshirt")}
                className="hover:text-gray-600"
              >
                Oversized Tshirt
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("Posters")}
                className="hover:text-gray-600"
              >
                Posters
              </button>
            </li>
            <li>
              <a
                href="/limited-edition"
                className="relative hover:text-gray-600 transition duration-300"
              >
                <span className="animate-pulse text-black px-2 py-0.5 rounded-md font-bold">
                  Limited Edition
                </span>
                <sup className="text-xs text-red-500 absolute top-0 right-0 -mt-2 -mr-1">
                  NEW
                </sup>
              </a>
            </li>
            <li>
              <a href="/videos" className="hover:text-gray-600">
                Videos
              </a>
            </li>
            <li>
              <a href="/preorder" className="hover:text-gray-600">
                Preorder Now
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600" />
            <User className="w-5 h-5 text-gray-600" />
            <ShoppingBag className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
