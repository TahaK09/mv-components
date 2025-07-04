import React from "react";
import BlogCard from "../components/blogCard.jsx";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      time: "2 mins",
      summary:
        "A quick introduction to React Hooks and how to use them effectively.",
      image:
        "https://t4.ftcdn.net/jpg/01/22/85/65/360_F_122856512_UQLjx1TRrc1LpNB0CQYbBmdVNKjmD5GY.jpg",
    },
    {
      id: 2,
      title: "Styling in React",
      time: "4 mins",
      summary: "Explore various ways to style your React components.",
      image:
        "https://th.bing.com/th/id/OIP.RTLjFHPynVt6TZZ4vrv0gAHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      title: "State Management with Redux",
      time: "5 mins",
      summary:
        "Learn how Redux can help manage state in large React applications.",
      image: "https://redux.js.org/img/redux-logo-landscape.png",
    },
    {
      id: 4,
      title: "Building Responsive Layouts",
      time: "3 mins",
      summary: "Tips and tricks for creating responsive layouts in React.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "React Router Basics",
      time: "4 mins",
      summary: "A beginner's guide to navigation in React using React Router.",
      image: "https://reactrouter.com/_brand/react-router-stacked-color.png",
    },
    {
      id: 6,
      title: "Optimizing React Performance",
      time: "6 mins",
      summary:
        "Best practices for improving the performance of your React apps.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Wc1Qw1nQnQnQnQnQnQnQnQ.png",
    },
    {
      id: 7,
      title: "Deploying React Apps",
      time: "3 mins",
      summary: "A step-by-step guide to deploying your React application.",
      image: "https://www.netlify.com/v3/img/components/logomark.png",
    },
    {
      id: 8,
      title: "Using Context API",
      time: "4 mins",
      summary: "How to use React's Context API for state sharing.",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 9,
      title: "Testing React Components",
      time: "5 mins",
      summary:
        "Introduction to testing React components with Jest and React Testing Library.",
      image: "https://testing-library.com/img/octopus-128x128.png",
    },
    {
      id: 10,
      title: "React and TypeScript",
      time: "6 mins",
      summary: "Benefits and basics of using TypeScript with React.",
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      id: 11,
      title: "Animating in React",
      time: "4 mins",
      summary: "Simple ways to add animations to your React apps.",
      image:
        "https://cdn.dribbble.com/users/63407/screenshots/3453310/react-animation.gif",
    },
    {
      id: 12,
      title: "React Best Practices",
      time: "7 mins",
      summary: "A collection of best practices for writing clean React code.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q.png",
    },
    {
      id: 13,
      title: "Server-Side Rendering with Next.js",
      time: "8 mins",
      summary: "How to use Next.js for server-side rendering in React.",
      image: "https://nextjs.org/static/twitter-cards/home.jpg",
    },
    {
      id: 14,
      title: "Managing Forms in React",
      time: "5 mins",
      summary: "Techniques for handling forms and validation in React.",
      image:
        "https://www.kindpng.com/picc/m/495-4952535_create-react-app-logo-hd-png-download.png",
    },
    {
      id: 15,
      title: "React and REST APIs",
      time: "6 mins",
      summary: "How to fetch and manage data from REST APIs in React.",
      image:
        "https://www.freecodecamp.org/news/content/images/2022/01/react-rest-api.png",
    },
  ];

  return (
    <>
      <div className="min-h-screen py-10 mt-20">
        <div className="max-w-8xl mx-auto px-5">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-[#222] text-center tracking-wide">
              Discover MeaVana: Blog Articles and More
            </h1>
            <p className="text-lg text-gray-700 mb-20 text-center">
              Stay updated with the latest trends and insights in the world of
              technology and design.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog, id) => (
              <BlogCard
                key={id}
                Title={blog.title}
                Description={blog.summary}
                Time={blog.time}
                Image={blog.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
