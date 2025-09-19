import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Person from "../assets/person.png";

const testimonials1 = [
  {
    company: "Growth Alliance",
    text: "We no longer have to ask ourselves, where did that PDF go?",
    link: "#",
  },
  {
    company: "ITALIC",
    text: "How Jeremy finally found a shared inbox his team was willing to adopt",
    link: "#",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const testimonials2 = {
  company: "canny",
  text: "I would hate going back to Gmail because I would lose so many superpowers.",
  link: "#",
  image: Person,
};

const testimonials3 = [
  {
    company: "smplrspace",
    text: "From customer support tool to foundation for the whole business",
    link: "#",
  },
  {
    company: "YachtChat",
    text: "From endless email forwarding to increased productivity",
    link: "#",
  },
];

export default function Testimonials2() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 mt-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Hear from customers like you
        </h2>
        <p className="mt-3 text-gray-600">
          Learn what led them to use our platform, what else they tried, and
          what their work looks like today.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid md:grid-row-2 gap-6">
          {testimonials1.map((item, idx) => (
            <>
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="col-span-1"
              >
                <Card className="h-full rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        {item.company}
                      </p>
                      <p className="text-lg font-medium text-gray-900 mb-4">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Read story
                      </a>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.company}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          ))}
        </div>{" "}
        <Card className="h-full rounded-2xl shadow-md bg-[#e7decc] border border-gray-200 overflow-hidden">
          <CardContent className="p-6  bg-[#e7decc] flex flex-col justify-between h-full">
            <div>
              <p className="text-xl font-semibold text-gray-700 mb-2 font-asimovian ">
                {testimonials2.company}
              </p>
              <p className="text-lg font-medium text-gray-900 mb-4">
                {testimonials2.text}
              </p>
              <a
                href={testimonials2.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read story
              </a>
            </div>
            <div className="flex items-end justify-end mt-auto -mb-12 -mr-6">
              {testimonials2.image && (
                <img
                  src={testimonials2.image}
                  alt={testimonials2.company}
                  className="w-auto h-60"
                />
              )}
            </div>
          </CardContent>
        </Card>
        <div className="grid md:grid-row-2 gap-6">
          {testimonials3.map((item, idx) => (
            <>
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="col-span-1"
              >
                <Card className="h-full rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        {item.company}
                      </p>
                      <p className="text-lg font-medium text-gray-900 mb-4">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Read story
                      </a>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.company}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
