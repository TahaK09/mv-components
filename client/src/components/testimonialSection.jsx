import { useState, useEffect } from "react";

export default function Testimonials({ testimonials, header }) {
  const [testNums, setTestNums] = useState(9);
  const [columns, setColumns] = useState([[], [], []]);

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
      <h2 className="text-4xl font-extrabold text-[#282828] text-center my-20">
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
      </div>
    </section>
  );
}
