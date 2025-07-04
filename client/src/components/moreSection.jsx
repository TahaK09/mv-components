import React from "react";
import mvplus from "../assets/meavana_plus.png";
import mvblogs from "../assets/meavana_blogs.jpg";
import mvschools from "../assets/meavana_schools.jpg";

function MoreSection() {
  return (
    <>
      <section className="px-6 py-16 bg-white">
        <h2 className="text-4xl font-extrabold text-[#282828] text-center my-20">
          More from MeaVana
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-green-100  flex flex-col justify-center items-center rounded-lg  py-7 px-16 shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1 text-xl text-green-700">
              MeaVana Blog
            </h3>
            <p className="text-green-600 text-sm">
              Find out what we are up to!
            </p>
            <img
              src={mvblogs}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
          <div
            onClick={() =>
              (window.location.href =
                "https://mv-rajvadeghars-projects.vercel.app/")
            }
            className="bg-violet-100 flex flex-col justify-center items-center rounded-lg  py-7 px-16 shadow-lg cursor-pointer"
          >
            <h3 className="mb-1 text-xl font-bold text-violet-700">
              MeaVana Plus
            </h3>
            <p className="text-violet-600 text-sm">
              Unlock more with MeaVana Plus.
            </p>
            <img
              src={mvplus}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
          <div className="bg-[#efdec3] flex flex-col justify-center items-center rounded-lg py-7 px-16 shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1 text-xl text-[#745f3e]">
              MeaVana For Schools
            </h3>
            <p className="text-[#745f3e] text-sm">
              Empower students with MeaVana.
            </p>
            <img
              src={mvschools}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreSection;
