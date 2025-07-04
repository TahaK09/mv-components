import React, { useRef, useState, useEffect } from "react";
import MVlogo from "../assets/meavana.svg";
import { useAppContext } from "../Context/AppContext";
import GetExtenBtn from "./getExtenBtn.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuRef = useRef(null);
  const { navigate, path } = useAppContext();
  const [colorHeaderText, setColorHeaderText] = useState("text-gray");
  const [navBg, setNavBg] = useState("backdrop-blur-lg backdrop-saturate-150");

  useEffect(() => {
    if (path === "/meavana-schools") {
      setColorHeaderText("text-white");
      setNavBg(" ");
    } else {
      setNavBg("backdrop-blur-lg backdrop-saturate-150");
      setColorHeaderText("text-gray");
    }
  }, [path]);

  const navLink = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact" },
    { name: "About Us", link: "/about" },
    { name: "Schools", link: "/meavana-schools" },
  ];

  return (
    <header
      className={`fixed top-0 flex items-center justify-between px-40 py-3 md:py-4 mx-auto w-full z-1000 duration-300 bg-transparent transition-transform ${navBg} cursor-pointer`}
    >
      <a
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="flex flex-row gap-2 items-center"
      >
        <img src={MVlogo} alt="Logo" className="w-10 h-auto" />
        <div
          className={`__className_af5235 text-3xl font-bold ${colorHeaderText}`}
        >
          MeaVana
        </div>
      </a>
      <nav
        ref={menuRef}
        className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] flex-col md:flex-row flex gap-8 text-gray-900 text-base font-normal"
      >
        {navLink.map((item, index) => (
          <div key={index} className={`inline ${colorHeaderText}`}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </div>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <GetExtenBtn />
      </div>
    </header>
  );
};

export default Navbar;
