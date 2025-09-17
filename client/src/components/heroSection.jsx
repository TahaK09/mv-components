import React, { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import MVlogo from "../assets/meavana.svg";
import starFull from "../assets/starfull.svg";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

function HeroSection() {
  const { browser } = useAppContext();
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1 == 3 ? 0 : prevIndex + 1));
    }, 7000);
  }, [imgIndex]);

  const images = [
    "https://www.meavana.com/_next/image?url=%2Fimages%2Ftopics-section%2Fcats.webp&w=1920&q=75",
    "https://www.meavana.com/_next/image?url=%2Fimages%2Ftopics-section%2Fb%26w.webp&w=640&q=75",
    "https://www.meavana.com/_next/image?url=%2Fimages%2Ftopics-section%2Fdogs.webp&w=1920&q=75",
  ];
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] flex items-center justify-center">
        <div className="flex w-full max-w-7xl flex-row items-center justify-center h-full px-6">
          <div className="flex flex-col flex-1/2 gap-10 justify-center items-start">
            <div className="text-6xl font-bold bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#f72585] text-transparent bg-clip-text">
              MeaVana Is A Productivity Powerhouse.
            </div>
            <div className="text-3xl text-[#3a3939] max-w-96 text-start">
              We're partnering with some of the world's top schools!
            </div>
            <div className="w-full mt-5">
              {/*Button should Popup when clicked */}
              <button className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-[#7b28f0] to-[#2b5de5] text-white rounded-full shadow-md hover:bg-[#7209b7] transition-colors duration-300">
                + Add to {browser}
                <span className="mx-2 text-base font-normal">it's free</span>
              </button>
            </div>
            <div className="text-base italic text-[#454545] max-w-96 -mt-3">
              Join the thousands of users who are already boosting their
              productivity with MeaVana.
            </div>
          </div>
          <div className="flex flex-col flex-1/2 justify-center items-center">
            <div className="flex flex-col w-full shadow-2xl overflow-hidden hover:mb-3 transition-all duration-300">
              <div className="flex flex-row h-6 w-full items-center gap-2 bg-gray-800 rounded-t-md">
                <div className="flex items-center gap-1 ml-3 pt-1">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="relative flex h-full w-[30%] items-center gap-1 rounded-t-lg bg-gray-600 px-2 mt-2 ">
                  <div className="h-4 w-4 rounded-sm bg-mv-glitter-purple p-[1px]">
                    <div className="relative h-full w-full select-none overflow-hidden leading-none">
                      <img
                        alt="MeaVana Logo"
                        loading="eager"
                        decoding="async"
                        data-nimg="fill"
                        className="w-full object-contain"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={MVlogo}
                      />
                    </div>
                  </div>
                  <div className="text-white text-[6px] font-extralight ml-0.5">
                    New Tab
                  </div>
                </div>
                <div className="flex justify-center items-center text-white text-sm font-semibold pt-1 select-none">
                  +
                </div>
              </div>
              <div className="flex h-7 w-full items-center gap-1 bg-gray-600 px-3">
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-3 flex-1 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-sm bg-mv-glitter-purple"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              </div>
              <img
                src={images[imgIndex]}
                className="w-full h-auto object-cover rounded-b-md shadow-lg"
              />
            </div>
            <div className="flex flex-row items-center justify-center mt-5 transition-all duration-300">
              {imgIndex === 0 ? <StarRating /> : <Downloads />}
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="bg-gradient-to-b from-[#E6EFFF] to-[#ffffff] h-80 w-full flex justify-center items-start">
        <div className="mx-auto max-w-lg py-20 text-5xl font-bold tracking-tight md:text-4xl text-gray-600">
          MeaVana is working towards building the world's most{" "}
          <PointerHighlight>
            <span className="text-violet-500">
              customizable personal dashboard.
            </span>
          </PointerHighlight>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

const StarRating = () => {
  return (
    <>
      <div className="star-row mx-0.50 flex flex-row items-center">
        <svg
          class="w-4 h-4 text-violet-500 -mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          class="w-4 h-4 text-violet-500 -mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          class="w-4 h-4 text-violet-500 -mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          class="w-4 h-4 text-violet-500 -mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          class="w-4 h-4 text-violet-500 -mr-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      <div className="text-sm text-gray-600 ml-1">
        <span className="font-bold">4.8/5</span>{" "}
        <span className="italic">Chrome store ratings</span>
      </div>
    </>
  );
};

const Downloads = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center mr-2">
        <img
          src={
            "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
          }
          alt="Users Icon"
          className="w-fit h-fit rounded-full"
        />
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-bold">100K+</span> Downloads
      </div>
    </div>
  );
};
