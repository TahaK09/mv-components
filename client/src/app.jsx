import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/index.jsx";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
