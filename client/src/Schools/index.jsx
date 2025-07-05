import React from "react";

function School() {
  const Cloud =
    "https://www.pngkey.com/png/full/1-18114_vector-clouds-png-cloud-png-clip-art.png";
  const SchoolImage =
    "https://nextadmit.com/assets/images/school-with-path.webp";

  const collabImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOPEnOnDOaixbIumLcOz1aAUdfKRh5cPLgw&s",
    "https://evolvingweb.com/sites/default/files/2024-03/Princeton%20University%20Logo%20Black.png",
  ];
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]"></div> */}
      <div className="bg-gradient-to-b from-[#6336f5] via-[#9ba5eb] to-[#caeea1] w-full h-screen"></div>

      <img
        src={Cloud}
        alt="Cloud"
        className="absolute top-30 left-20 w-50 h-auto floating-image-1 select-none"
      />
      <img
        src={Cloud}
        alt="Cloud"
        className="absolute top-[180px] w-60 h-auto floating-image-2 select-none"
      />
      <img
        src={Cloud}
        alt="Cloud"
        className="absolute top-30 right-40 w-50 h-auto floating-image-3 select-none"
      />
      {/* Cloud should move/flow rather */}
      <img
        src={SchoolImage}
        alt="school"
        className="absolute bottom-0 right-10 w-3xl h-auto object-cover select-none"
      />

      <div className="container w-full flex flex-col items-center justify-center h-screen absolute top-0">
        <div className=" w-3xl">
          <h1 className="text-6xl/18 font-black text-white text-center">
            Transform Your School's Digital Experience.
          </h1>
        </div>
        <div className="text-xl mt-10 font-light text-white w-xl text-center italic">
          Discover how MeaVana can help you create a more connected,
          collaborative, and successful school community.
        </div>
        <div className="mt-20">
          {/* add popup transition to this button */}
          <button className="px-8 py-2.5 bg-gradient-to-l from-[#5f23eb] to-[#a041f4] text-lg font-semibold text-white rounded-full hover:scale-105 transition-all duration-400">
            Sign Up Today
          </button>
        </div>
      </div>

      <div className="h-[50vh] w-full bg-gradient-to-b from-[#caeea1] via-[#ffffff] to-[#ffffff]">
        <div className="text-3xl w-full text-center py-10 text-gray-700 font-bold">
          Schools We Have Collab So Far With:
        </div>
        <div className="flex flex-row gap-10 justify-center items-center">
          <img
            src="https://evolvingweb.com/sites/default/files/2024-03/Princeton%20University%20Logo%20Black.png"
            className="h-24"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOPEnOnDOaixbIumLcOz1aAUdfKRh5cPLgw&s"
            className="h-16"
          />
        </div>
      </div>
      <MVbenefits />
    </>
  );
}

export default School;

const MVbenefits = () => {
  return (
    <div className="w-full py-20 bg-[#ffffff] flex flex-col items-center">
      <h1 className="text-3xl text-gray-900 font-extrabold mb-12 text-center max-w-2xl">
        Discover the Power of MeaVana for Schools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full mx-auto px-60">
        <div className="bg-white p-8 flex flex-col items-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-violet-500 text-start">
            Create Sense of Community
          </h3>
          <p className="text-gray-500 text-sm italic">
            Foster connections among students, teachers, and alumni, creating a
            vibrant community that extends beyond the classroom and into the
            future.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col items-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-violet-500 text-start">
            Quick Access to Digital Resources
          </h3>
          <p className="text-gray-500 text-sm italic">
            Provide a centralized hub for accessing important documents, links,
            and tools, streamlining communication and organization for students,
            teachers, and staff.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col items-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-violet-500 text-start">
            Share Interesting Facts and Info
          </h3>
          <p className="text-gray-500 text-sm italic">
            Facilitate knowledge sharing among students, teachers, and staff,
            promoting collaboration, innovation, and collective growth.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col items-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-violet-500 text-start">
            Event Notification
          </h3>
          <p className="text-gray-500 text-sm italic">
            Receive timely notifications about important events, deadlines, and
            announcements, ensuring you stay informed and up-to-date on school
            activities.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col items-center hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2 text-violet-500 text-start">
            Productivity Tools
          </h3>
          <p className="text-gray-500 text-sm italic">
            Access a suite of tools designed to help students stay organized,
            focused, and productive, including task managers, calendars, and
            note-taking apps.
          </p>
        </div>
      </div>
    </div>
  );
};
