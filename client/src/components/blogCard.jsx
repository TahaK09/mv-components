import React from "react";
import TimeSvg from "../assets/icons8-time.svg";

function BlogCard({ Title, Description, Time, Image }) {
  return (
    <div className="cursor-pointer max-w-84 rounded-xl overflow-hidden shadow-lg bg-white transition-shadow duration-200 hover:shadow-2xl">
      <div className="overflow-hidden max-h-[160px]">
        <img
          src={Image}
          alt="Blog"
          className="w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(.4,2,.6,.8)] group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg/6 mb-2 font-bold text-[#222]">{Title}</h2>
        <p className="text-[#555] text-sm">
          {Description.length > 100
            ? `${Description.slice(0, 100)}...`
            : Description}
        </p>
        <div className="mt-3 text-[#363636] text-sm flex items-center gap-1.5">
          <img src={TimeSvg} alt="Time" className="w-4 h-4 rotate-315" />
          <span>{Time} read</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
