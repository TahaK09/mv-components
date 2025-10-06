import React, { useRef, useEffect, useState } from "react";
import Contact from "../assets/contact_illustration.jpg";

function Features() {
  const imgRef = useRef(null);
  const [topPos, setTopPos] = useState(0);
  const [btnColor, setBtnColor] = useState("bg-gray-500");
  const [position, setPosition] = useState("");

  useEffect(() => {
    function updatePosition() {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        setTopPos(rect.top + window.scrollY);
        // rect.top = relative to viewport
        // + window.scrollY = relative to document top
      }
    }
    //This is very important use of useRef
    //Very important to add event listeners and clean them up - It is done so that the event listeners are not added multiple times on every render
    updatePosition(); // run once on mount
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    if (topPos > 2121) {
      setBtnColor("bg-violet-500");
    } else {
      setBtnColor("bg-gray-500");
    }
  }, [topPos]);

  useEffect(() => {
    if (topPos > 1232) {
      //This value is temporary - It is the point where the button should become fixed; Will vary based on vertical window size (and after w-screen it will change to fixed otherwise relative)
      setPosition("fixed");
    } else {
      setPosition("relative");
    }
  }, [topPos]);

  return (
    <>
      <div className="w-screen h-[200vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
        <div className="w-1 border-r-4 left-1/2 border-violet-600 h-1/2"></div>
        <div className="left-1/2 z-1000 p-2 bg-blurred-200 rounded-lg border border-gray-200">
          <button
            className={`w-40 h-10  ${btnColor} text-white rounded-lg transition-colors duration-300`}
          >
            Button
          </button>
        </div>

        <div className="w-1 border-r border-dashed left-1/2 border-gray-400 h-1/2"></div>
      </div>

      <div className={`${position} top-40 left-[48.5%] pointer-events-none`}>
        <img
          ref={imgRef}
          className={`w-14 h-14 rounded-full`}
          src={Contact}
          alt="contact"
        />
      </div>

      <p className="fixed bottom-10 left-10 bg-white p-2 rounded shadow">
        Image top (document): {topPos}px
      </p>
    </>
  );
}

export default Features;
