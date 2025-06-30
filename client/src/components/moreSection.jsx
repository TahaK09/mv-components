import React from "react";
import mvplus from "../assets/meavana_plus.png";

function MoreSection() {
  return (
    <>
      <section className="px-6 py-12 bg-white">
        <h2 className="text-4xl font-extrabold text-[#282828] text-center my-20">
          More from the MeaVana
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-green-100 rounded-lg p-7 hover:shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1  text-xl text-green-700">
              MeaVana Blog
            </h3>
            <p className="text-green-600 text-sm">
              Explore our blog for the latest insights, tips, and stories.
            </p>
          </div>
          <div className="bg-violet-100 flex flex-col justify-center items-center rounded-lg p-7 hover:shadow-lg cursor-pointer">
            <h3 className="mb-1 text-xl font-bold text-violet-700">
              MeaVana Plus
            </h3>
            <p className="text-violet-600 text-sm">
              Unlock more with MeaVana Plus.
            </p>
            <img
              src={mvplus}
              alt="meavana plus"
              className="w-80 h-auto mt-2 shadow-xl"
            />
          </div>
          <div className="bg-yellow-100 rounded-lg p-7 hover:shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1  text-xl text-yellow-700">
              Resources
            </h3>
            <p className="text-yellow-600 text-sm">
              Access a variety of resources including articles, videos, and
              guides to help you on your mental health journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreSection;
