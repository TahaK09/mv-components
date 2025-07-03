import React from "react";
import focusImage from "../assets/sticky-notes.png";
import screentime from "../assets/screentime.png";
import wallpapers from "../assets/wallpapers.png";
function FeaturesSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 mt-10">
        {/* Text content */}
        <div className="max-w-72 md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            StickyNotes <br />
          </h1>
          <p className="text-[#033677] text-md italic mt-4">
            Create a deep work routine with sounds, timers and focus-enhancing
            apps.
          </p>
        </div>

        {/* Image content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={focusImage} alt="Focus UI" className="max-w-md w-full" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        {" "}
        {/* Image content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={screentime} alt="Focus UI" className="max-w-md w-full" />
        </div>
        {/* Text content */}
        <div className="max-w-96 md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Block Websites <br />
          </h1>
          <p className="text-[#033677] text-md italic mt-4">
            Stay focused by blocking distracting websites and apps during your
            work sessions.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        {/* Text content */}
        <div className="max-w-96 md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Wallpapers <br />
          </h1>
          <p className="text-[#033677] text-md italic mt-4">
            Customize your workspace with beautiful wallpapers that inspire
            creativity and focus.
          </p>
        </div>

        {/* Image content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={wallpapers} alt="Focus UI" className="max-w-md w-full" />
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
