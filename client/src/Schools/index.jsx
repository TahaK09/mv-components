import React from "react";
import Testimonials from "../components/testimonialSection.jsx";
import ApplyCard from "../components/applyCard.jsx";

const testimonials = [
  {
    name: "James Gunt",
    image: "https://i.pravatar.cc/100?img=1",
    stars: 5,
    title: "The vision is really motivating",
    text: "MeaVana’s vision is inspiring. The Android app is still new but shows great promise. I love how quotes match the background and the crypto integration lets me track BTC and ETH easily. Huge step beyond typical new tab pages like Momentum.",
  },
  {
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/100?img=2",
    stars: 5,
    title: "SUPER excited about what they have coming soon",
    text: "It took me a few days to get used to it, but it’s totally worth it. The product is evolving quickly and the roadmap looks exciting. Great job team!",
  },
  {
    name: "Simone",
    image: "https://i.pravatar.cc/100?img=3",
    stars: 5,
    title: "So easy to find what I need",
    text: "I open hundreds of tabs daily. MeaVana saves me so much time getting to the right one.",
  },
  {
    name: "Sandra",
    image: "https://i.pravatar.cc/100?img=4",
    stars: 5,
    title: "My go-to tool every day",
    text: "I use MeaVana for everything now – quotes, bookmarks, to-dos. The customization options are endless. It’s become part of my daily routine, and I genuinely feel more productive using it. Thank you!",
  },
  {
    name: "Houssem",
    image: "https://i.pravatar.cc/100?img=5",
    stars: 5,
    title: "One-stop-shop",
    text: "All my needs in one extension. Period.",
  },
  {
    name: "Ogechukwu Ada Lorretta Anoliefo",
    image: "https://i.pravatar.cc/100?img=6",
    stars: 5,
    title: "Sleek and beautiful!",
    text: "Very polished design. The UI is buttery smooth, and everything feels premium.",
  },
  {
    name: "Jordan Gamarra",
    image: "https://i.pravatar.cc/100?img=7",
    stars: 5,
    title: "Beyond aesthetics",
    text: "I initially downloaded it for looks, but now I use it to organize my day. Surprising value.",
  },
  {
    name: "Emily Zhang",
    image: "https://i.pravatar.cc/100?img=8",
    stars: 4,
    title: "Impressive growth",
    text: "The product has grown a lot since I first installed it. Bugs still exist but the team fixes them quickly. Solid experience overall!",
  },
  {
    name: "Daniel Kim",
    image: "https://i.pravatar.cc/100?img=9",
    stars: 5,
    title: "Efficient and well thought-out",
    text: "I love how intuitive the interface is. Everything is logically placed and quick to access. Helps reduce decision fatigue during work hours.",
  },
  {
    name: "Priya Mehta",
    image: "https://i.pravatar.cc/100?img=10",
    stars: 5,
    title: "Daily dose of motivation",
    text: "The quotes inspire me every time I open a tab.",
  },
  {
    name: "Lucas Fernández",
    image: "https://i.pravatar.cc/100?img=11",
    stars: 5,
    title: "Helpful & lightweight",
    text: "No lag, no clutter – just useful tools that enhance my workflow.",
  },
  {
    name: "Aisha Mohammed",
    image: "https://i.pravatar.cc/100?img=12",
    stars: 5,
    title: "A productivity companion",
    text: "As someone juggling tasks and tabs constantly, I finally feel like I have a digital workspace that adapts to me. Highly customizable, intuitive, and supportive of my workflow.",
  },
  {
    name: "Kenji Takahashi",
    image: "https://i.pravatar.cc/100?img=13",
    stars: 5,
    title: "Perfect for students",
    text: "Helps me manage links, reminders, and even chill between classes. I recommend it to all my friends at university.",
  },
  {
    name: "Natalie Carter",
    image: "https://i.pravatar.cc/100?img=14",
    stars: 5,
    title: "Quick setup, big results",
    text: "Took less than 2 minutes to install. Been using it for months now. Never going back!",
  },
  {
    name: "Mohammed Yusuf",
    image: "https://i.pravatar.cc/100?img=15",
    stars: 5,
    title: "Total game changer",
    text: "My tabs used to be chaotic. Now, it’s like my dashboard is calm, organized, and motivating. MeaVana brought calm to my workflow.",
  },
  {
    name: "Clara Müller",
    image: "https://i.pravatar.cc/100?img=16",
    stars: 4,
    title: "Nice addition to my tools",
    text: "Very clean UI, though I’d love better sync across devices. Otherwise, it’s solid.",
  },
  {
    name: "Andre Silva",
    image: "https://i.pravatar.cc/100?img=17",
    stars: 5,
    title: "Feels personal",
    text: "Love how I can make the tab page feel like mine. Colors, layout, widgets – all customizable!",
  },
  {
    name: "Chloe Nguyen",
    image: "https://i.pravatar.cc/100?img=18",
    stars: 5,
    title: "The only extension I use daily",
    text: "Simple, beautiful, powerful. What more do you need?",
  },
  {
    name: "Aditya Rao",
    image: "https://i.pravatar.cc/100?img=19",
    stars: 5,
    title: "Designed for modern needs",
    text: "Incorporates crypto tracking, reminders, notes, quotes, and news – all in one tab. Perfect for the modern multitasker.",
  },
  {
    name: "Lina Svensson",
    image: "https://i.pravatar.cc/100?img=20",
    stars: 5,
    title: "Beautiful updates keep coming",
    text: "Every update improves performance and design. I feel like this tool is made by people who listen to their users. Bravo!",
  },
];

function School() {
  const Cloud =
    "https://www.pngkey.com/png/full/1-18114_vector-clouds-png-cloud-png-clip-art.png";
  const SchoolImage =
    "https://nextadmit.com/assets/images/school-with-path.webp";

  const collabImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOPEnOnDOaixbIumLcOz1aAUdfKRh5cPLgw&s",
    "https://evolvingweb.com/sites/default/files/2024-03/Princeton%20University%20Logo%20Black.png",
    "https://cdn.freebiesupply.com/images/large/2x/harvard-logo-black-transparent.png",
    "https://questbridge.imgix.net/content/uploads/partners/massachusetts-institute-of-technology/mit_lockup_std-three-line_rgb_black.png?auto=compress%2Cformat&fit=clip&h=384&q=90&s=f74b2f23c783b213d96131a6256007b2",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/University_of_Illinois_at_Urbana-Champaign_Wordmark.svg/2560px-University_of_Illinois_at_Urbana-Champaign_Wordmark.svg.png",
    "https://1000logos.net/wp-content/uploads/2018/08/University-of-Michigan-Logo.png",
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
          {collabImages.map((items, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-40 h-auto p-0"
            >
              <img src={items} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
      <MVbenefits />
      <Testimonials
        testimonials={testimonials}
        header={"What Our Partner Schools Say"}
      />
      <ApplyCard
        title={`Ready to Elevate Your College Experience?`}
        description={
          "Join MeaVana today and start building your professional future while still in school."
        }
        button={"Apply Now >"}
      />
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
