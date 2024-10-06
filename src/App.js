import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import Products from "./Pages/Products";
import Limitededition from "./Pages/Limitededition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/limited-edition" element={<Limitededition />} />
      </Routes>
    </Router>
  );
}

export default App;
