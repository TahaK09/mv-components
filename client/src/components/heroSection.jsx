import React from "react";
import { useAppContext } from "../Context/AppContext";
import MVlogo from "../assets/meavana.svg";

function HeroSection() {
  const { browser } = useAppContext();
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
              <button className="px-8 py-3 text-lg font-semibold bg-[#541ed2] text-white rounded-full shadow-md hover:bg-[#7209b7] transition-colors duration-300">
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
              src={
                "https://www.meavana.com/_next/image?url=%2Fimages%2Ftopics-section%2Fcats.webp&w=1920&q=75"
              }
              className="w-full h-auto object-cover rounded-b-md shadow-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
