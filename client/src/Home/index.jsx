import React from "react";
import Testimonials from "../components/testimonialSection.jsx";
import HeroSection from "../components/heroSection.jsx";
import FeaturesSection from "../components/featuresSection.jsx";
import MoreSection from "../components/moreSection.jsx";
import AnimationFeatureCard1 from "../components/animationFeatureCard1.jsx";

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

function Home() {
  return (
    <>
      <HeroSection />
      <AnimationFeatureCard1 />
      <Testimonials
        testimonials={testimonials}
        header={"What the community is saying"}
      />
      <MoreSection />
    </>
  );
}

export default Home;
