import React from "react";

function About() {
  return (
    <div className="max-w-7xl mx-auto my-20 p-8">
      <h1 className="text-4xl font-bold mb-4 text-[#2a3b4c]">About MeaVana</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
          What is MeaVana?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Transform your boring Chrome with the exciting MeaVana Chrome
          Extension. MeaVana is your all-the-time, all-the-basics dashboard. We
          provide a rich experience through a beautiful daily background visual,
          streamlined digital desktop basics, and deep, rich functionality.
        </p>
        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>Transform your Chrome</li>
          <li>Choose your Topic</li>
          <li>Customize Your Features</li>
        </ul>
        <p className="text-lg mt-2 text-gray-700">— it's as easy as that.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          MeaVana is working towards building the world's most customizable
          personal dashboard. The bigger vision, as the name MeaVana itself
          suggests, is to build an entire digital ecosystem to start your online
          journey, whatever device you're on.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
          How We Started our journey?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We saw that our mobile phones were effectively dashboardized, but our
          browsers were not. We were tired of seeing the blank empty space every
          time we opened a new tab. With these observations, MeaVana was born,
          and there has been no looking back since.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-[#3e5c76] mb-2">
          The MeaVana Team
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          MeaVana is run by a passionate group of entrepreneurs committed to
          transforming your online browsing experience. The team is fully global
          and remote.
        </p>
      </section>
    </div>
  );
}

export default About;
