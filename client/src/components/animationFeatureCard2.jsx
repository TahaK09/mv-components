import React from "react";
import img1 from "../assets/sn1.png";
import img2 from "../assets/sn2.png";
import img3 from "../assets/siteblocked.png";
import img4 from "../assets/sn4.png";

function AnimationFeatureCard2() {
  return (
    <>
      <div className="bg-white flex justify-center items-center gap-20">
        {/* Left Side Images */}
        <div className="w-96 h-96 relative">
          <img
            src={img1}
            alt="Image 1"
            className="w-32 h-32 absolute top-5 left-6 fade-in-up fade-delay-2"
          />
          <img
            src={img2}
            alt="Image 2"
            className="w-36 h-36 absolute top-12 right-0 fade-in-left fade-delay-2"
          />
          <img
            src={img3}
            alt="Image 3"
            className="w-auto h-auto absolute top-24 left-20 z-10 fade-in-up rounded-lg"
          />
          <img
            src={img4}
            alt="Image 4"
            className="w-32 h-32 absolute bottom-0 right-8 fade-in-down fade-delay-2"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-96 space-y-4 fade-in-up ml-20">
          <div className="font-semibold text-2xl">Block Website</div>
          <div className="font-medium text-base text-gray-600">
            Stay focused by blocking distracting websites and apps during your
            work sessions.
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimationFeatureCard2;
