import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/index.jsx";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Contact from "./Contact/index.jsx";
import Faqs from "./FAQs/index.jsx";
import Blogs from "./Blogs/index.jsx";
import Careers from "./components/careers.jsx";
import About from "./About/index.jsx";
import School from "./Schools/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/meavana-schools" element={<School />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
