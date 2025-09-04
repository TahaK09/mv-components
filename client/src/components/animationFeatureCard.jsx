import React from "react";
import img1 from "../assets/sn1.png";
import img2 from "../assets/sn2.png";
import img3 from "../assets/sn3.png";
import img4 from "../assets/sn4.png";

function AnimationFeatureCard() {
  return (
    <>
      <div className="w-screen h-screen bg-white flex justify-center items-center gap-10">
        {/* Left Side Text */}
        <div className="w-96 space-y-4 fade-in-up">
          <div className="font-semibold text-2xl">StickyNotes</div>
          <div className="font-medium text-base text-gray-600">
            Create a deep work routine with sounds, timers and focus-enhancing
            apps.
          </div>
        </div>

        {/* Right Side Images */}
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
            className="w-60 h-60 absolute top-24 left-20 z-10 fade-in-up"
          />
          <img
            src={img4}
            alt="Image 4"
            className="w-32 h-32 absolute bottom-0 right-8 fade-in-down fade-delay-2"
          />
        </div>
      </div>
    </>
  );
}

export default AnimationFeatureCard;
