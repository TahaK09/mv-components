import React from "react";
import mvplus from "../assets/meavana_plus.png";
import mvblogs from "../assets/meavana_blogs.jpg";
import mvschools from "../assets/meavana_schools.jpg";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

function MoreSection() {
  return (
    <>
      <section className="px-6 py-16 bg-white">
        <h2 className="text-4xl font-extrabold text-[#282828] text-center my-20">
          More from MeaVana
        </h2>

        {/* https://ui.aceternity.com/components/pointer-highlight -- Will add em on these too -- scroll down you'll see cards one- that sheesh heree too */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-green-100  flex flex-col justify-center items-center rounded-lg  py-7 px-16 shadow-lg cursor-pointer">
            {/* <h3 className="font-extrabold mb-1 text-xl text-green-700">
              MeaVana Blog
            </h3> */}
            <PointerHighlight
              rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10"> MeaVana Blog</span>
            </PointerHighlight>
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
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">MeaVana Plus </span>
            </PointerHighlight>
            {/* <h3 className="mb-1 text-xl font-bold text-violet-700">
              MeaVana Plus
            </h3> */}
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
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative z-10">MeaVana For Schools</span>
            </PointerHighlight>
            {/* <h3 className="font-extrabold mb-1 text-xl text-[#745f3e]">
              MeaVana For Schools
            </h3> */}
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
