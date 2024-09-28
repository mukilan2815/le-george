import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopByTheme from "../components/ShopByTheme";
import ShopByCategory from "../components/ShopByCategory";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ShopByTheme />
      <ShopByCategory />
      <Footer />
    </div>
  );
};

export default Home;
