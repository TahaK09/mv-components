import React from "react";

function BlogCard() {
  return (
    <div className="mt-20 max-w-96 rounded-xl overflow-hidden shadow-lg bg-white transition-shadow duration-200 hover:shadow-2xl">
      <div className="overflow-hidden max-h-[200px]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Blog"
          className="w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(.4,2,.6,.8)] group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg mb-1 font-bold text-[#222]">Blog Title</h2>
        <p className="text-[#555] text-sm">
          This is a short description of the blog post. It gives a quick
          overview of the content.
        </p>
      </div>
      <div className="p-3">
        <p className="text-[#1f1f1f] text-sm">2 mins read</p>
      </div>
    </div>
  );
}

export default BlogCard;
