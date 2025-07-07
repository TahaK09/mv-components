import React from "react";
import BG from "../assets/about-mountain-bg.jpg";
import mv_dash from "../assets/bmw-red.webp";

function About() {
  // Put a background image and make a gradient effect in the bottom, and mention some core functions like momentumdash.com/gift
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
          <h1 className="text-7xl font-bold mb-4">Welcome to the MeaVana</h1>
          <p className="text-lg font-medium italic mb-4">
            Transform your boring Chrome with the exciting MeaVana Chrome
            Extension.
          </p>
          <div className="w-auto h-auto mt-10 shadow-sxl shadow-[#1f1f1f] border border-white rounded-xl mb-28">
            {/* <img src={mv_dash} alt="mv dashboard" className="w-full h-full" /> */}
            <iframe
              width="550"
              height="315"
              className="rounded-xl"
              src="https://www.youtube.com/embed/oG7wT3uRZvA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute bottom-0 flex flex-row gap-20 justify-center items-start pb-8">
            <div className="flex flex-col gap-2  max-w-60">
              <div className="text-xl font-bold">Customizable</div>
              <div className="text-base">
                Personalize your dashboard with widgets, backgrounds, and
                layouts to suit your style and needs.
              </div>
            </div>
            <div className="flex flex-col gap-2  max-w-60">
              <div className="text-xl font-bold">Productivity Tools</div>
              <div className="text-base">
                Boost your efficiency with integrated tools like calendars,
                reminders, and quick links.
              </div>
            </div>
            <div className="flex flex-col gap-2  max-w-60">
              <div className="text-xl font-bold">
                Sticky Notes & To-do Lists
              </div>
              <div className="text-base">
                Stay organized by adding sticky notes and managing your daily
                tasks directly from your dashboard.
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-60">
              <div className="text-xl font-bold">Access Apps</div>
              <div className="text-base">
                Quickly launch your favorite apps and services, all from one
                convenient place.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-20 bg-black"></div>

      {/* Make it like the momentum's career page */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
        <div className="flex flex-row max-w-6xl justify-center items-start gap-2 p-10">
          <div className="flex-col flex-1/2 gap-2 justify-center items-center">
            <div className="text-xl text-gray-700 font-semibold">
              What is MeaVana?
            </div>
            <div className="text-lg text-gray-700 font-normal">
              Transform your boring Chrome with the exciting MeaVana Chrome
              Extension. MeaVana is your all-the-time, all-the-basics dashboard.
              We provide a rich experience through a beautiful daily background
              visual, streamlined digital desktop basics, and deep, rich
              functionality. Transform your Chrome, Choose your Topic, and
              Customize Your Features - it's as easy as that.
            </div>
          </div>
          <div className="flex-1/2 relative">
            {/* Gradient background shape 1*/}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-b from-violet-400 via-red-300 to-transparent rounded-md rotate-45 z-0" />

            {/* Image on top */}
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQEQfnFXZwpqcQ/feedshare-shrink_800/B56ZZXV_anGQAg-/0/1745222108288?e=1754524800&v=beta&t=SHpnEHU-tfivM_wJIC5HdJwDfCU2nj0VBAgB6LArl5s"
              alt="team"
              className="relative z-10 rounded-lg shadow-lg shadow-gray-200"
            />
            <div className="absolute bottom-0 right-0 w-20 h-40 bg-gradient-to-b from-pink-400 via-violet-400 to-transparent rounded-full rotate-290 z-0"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex flex-row justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-start gap-2 w-96">
          <div className="text-xl text-gray-700 font-semibold">
            The MeaVana Team
          </div>
          <div className="text-xl text-gray-500 font-semibold">
            MeaVana is run by a passionate group of entrepreneurs committed to
            transforming your online browsing experience. The team is fully
            global and remote.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
