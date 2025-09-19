import { useState, useEffect } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function Testimonials({ testimonials, header }) {
  const [testNums, setTestNums] = useState(9);
  const [columns, setColumns] = useState([[], [], []]);
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  const newTestimonials = testimonials.slice(0, testNums);

  useEffect(() => {
    const cols = [[], [], []];
    newTestimonials.forEach((testimonial, index) => {
      cols[index % 3].push(testimonial);
    });

    // Check if it's actually different before setting state
    setColumns((prev) => {
      const isSame = JSON.stringify(prev) === JSON.stringify(cols);
      return isSame ? prev : cols;
    });
  }, [newTestimonials]);

  const handleSeeMore = () => {
    if (testNums < testimonials.length) {
      setTestNums((prev) => Math.min(prev + 6, testimonials.length));
    }
  };
  {
    /* Work on Making this have a button below that on clicking shows more testimonials || Get an opinion on this button  */
  }
  return (
    <section className="px-6 py-12 bg-white">
      <HoverEffect items={projects} />

      {/* <h2 className="text-4xl font-extrabold text-[#282828] text-center my-20">
        {header}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto  transition-all duration-700">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5">
            {column.map((t, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-7 shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <div className="flex text-yellow-400">
                      {Array(t.stars)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{t.title}</h3>
                <p className="text-gray-600 text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full h-auto items-start bottom-10 relative bg-gradient-to-t from-white">
        <button
          onClick={handleSeeMore}
          className="px-8 py-3 text-gray w-98 bg-gray-200 rounded-lg"
        >
          See More
        </button>
      </div> */}
    </section>
  );
}
