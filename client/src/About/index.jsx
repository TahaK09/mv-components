import React from "react";
import BG from "../assets/about-mountain-bg.jpg";
import mv_dash from "../assets/bmw-red.webp";

function About() {
  {
    /*Put a backgound image and make a gradient effect in the bottom, and mention some core functions like momentumdash.com/gift*/
  }
  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

        {/* Content over background */}
        <div className="relative z-20 p-8 text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-6xl font-bold mb-4">Welcome to the MeaVana</h1>
          <p className="text-lg font-medium italic mb-4">
            Transform your boring Chrome with the exciting MeaVana Chrome
            Extension.
          </p>
          <div className="w-xl h-auto mt-20">
            <img src={mv_dash} alt="mv dashboard" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* <div className="my-20 p-8 bg-cover bg-center h-screen w-full bg-[${BG}]">
       
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            MeaVana is working towards building the world's most customizable
            personal dashboard. The bigger vision, as the name MeaVana itself
            suggests, is to build an entire digital ecosystem to start your
            online journey, whatever device you're on.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
            How We Started our journey?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We saw that our mobile phones were effectively dashboardized, but
            our browsers were not. We were tired of seeing the blank empty space
            every time we opened a new tab. With these observations, MeaVana was
            born, and there has been no looking back since.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
            The MeaVana Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            MeaVana is run by a passionate group of entrepreneurs committed to
            transforming your online browsing experience. The team is fully
            global and remote.
          </p>
        </section>
      </div> */}
    </>
  );
}

export default About;
