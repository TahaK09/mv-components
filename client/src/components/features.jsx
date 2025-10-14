import React, { useRef, useEffect, useState } from "react";
import Contact from "../assets/contact_illustration.jpg";

function Features() {
  const imgRef = useRef(null);
  const [topPos, setTopPos] = useState(0);
  const [btnColor, setBtnColor] = useState("bg-gray-500");
  const [position, setPosition] = useState();
  const [relativePos, setRelativePos] = useState(0);
  const fixedHeight = 900;
  const [heightDashed, setHeightDashed] = useState(fixedHeight);

  useEffect(() => {
    const updatePosition = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        setTopPos(absoluteTop);
        if (absoluteTop - window.innerHeight < heightDashed) {
          setRelativePos(absoluteTop - window.innerHeight);
        } else {
          setRelativePos(heightDashed);
        }
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  // Update button color
  useEffect(() => {
    setBtnColor(heightDashed == 0 ? "bg-violet-500" : "bg-gray-500");
  }, [topPos]);

  // Adjust dashed line height
  useEffect(() => {
    setHeightDashed(fixedHeight - relativePos);
  }, [relativePos]);

  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
        <div
          className="w-1 border-r-4 left-1/2 border-violet-600"
          style={{ height: `${relativePos}px` }}
        />
        <div
          className="w-0.25 border-r left-1/2 border-dashed border-gray-600"
          style={{ height: `${heightDashed}px` }}
        />
        <div className="left-1/2 z-50 p-2 bg-white/60 backdrop-blur-md rounded-lg border border-gray-200">
          <button
            className={`w-40 h-10 ${btnColor} text-white rounded-lg transition-colors duration-300`}
          >
            {btnColor === "bg-violet-500" ? "Active " : "Inactive "}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-40 left-[48.5%] pointer-events-none transition-opacity duration-700`}
      >
        <img
          ref={imgRef}
          className="w-14 h-14 rounded-full"
          src={Contact}
          alt="contact"
        />
      </div>
    </>
  );
}

export default Features;
