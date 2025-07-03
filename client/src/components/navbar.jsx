import React, { useRef } from "react";
import MVlogo from "../assets/meavana.svg";
import { useAppContext } from "../Context/AppContext";
import GetExtenBtn from "./getExtenBtn.jsx";

const Navbar = () => {
  const menuRef = useRef(null);
  const { navigate } = useAppContext();

  const handleOpenMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-0");
      menuRef.current.classList.add("max-md:w-full");
    }
  };

  const handleCloseMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-full");
      menuRef.current.classList.add("max-md:w-0");
    }
  };

  return (
    <header className="fixed  top-0 flex items-center justify-between px-40 py-3 md:py-4 mx-auto w-full z-1000 transition-all duration-300 bg-transparent backdrop-blur-lg backdrop-saturate-150 cursor-pointer">
      <a
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="flex flex-row gap-2 items-center"
      >
        <img src={MVlogo} alt="Logo" className="w-10 h-auto" />
        <div class="__className_af5235 text-3xl font-bold text-gray-900">
          MeaVana
        </div>
      </a>
      <nav
        ref={menuRef}
        className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal"
      >
        <a
          className="hover:text-indigo-600 cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            navigate("/");
          }}
        >
          Home
        </a>
        <a
          className="hover:text-indigo-600 cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            navigate("/blogs");
          }}
        >
          Blogs
        </a>
        <a
          className="hover:text-indigo-600 cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            navigate("/contact");
          }}
        >
          Contact Us
        </a>
        <a
          className="hover:text-indigo-600 cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            navigate("/about");
          }}
        >
          About Us
        </a>
        <a
          className="hover:text-indigo-600 cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            navigate("/meavana-schools");
          }}
        >
          Schools
        </a>
        <button
          type="button"
          className="md:hidden text-gray-600"
          onClick={handleCloseMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      <div className="flex items-center space-x-4">
        {/* <button
          type="button"
          className="size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
              stroke="#353535"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}

        {/* <button
          type="button"
          className="md:hidden text-gray-600"
          onClick={handleOpenMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
        <GetExtenBtn />
      </div>
    </header>
  );
};

export default Navbar;
