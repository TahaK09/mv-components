import React from "react";
import Testimonials from "../components/testimonialSection.jsx";
import HeroSection from "../components/heroSection.jsx";
import FeaturesSection from "../components/featuresSection.jsx";
import MoreSection from "../components/moreSection.jsx";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <MoreSection />
    </>
  );
}

export default Home;
