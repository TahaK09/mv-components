import React from "react";

function FAQs() {
  const questions = [
    {
      question: "Why was MeaVana created?",
      answer:
        "We saw that our mobile phones were effectively dashboardized, but our browsers were not. We were tired of seeing the blank empty space every time we opened a new tab. With these observations, MeaVana was born.",
    },
    {
      question: "How do I get in touch?",
      answer: "Feel free to email support@meavana.com or use our Contact Form.",
    },
    {
      question: "Why should I use MeaVana?",
      answer:
        "MeaVana provides a rich online experience through a beautiful daily background visual, streamlined digital desktop basics, and deep, rich functionality.",
    },
    {
      question: "How can I use MeaVana?",
      answer: "Install us with a single click at Click Me and enjoy!",
    },
    {
      question: "Where can I follow MeaVana on social media?",
      answer:
        "You can follow us on Twitter, Facebook, LinkedIn, and Instagram.",
    },
    {
      question: "How much does MeaVana cost?",
      answer:
        "MeaVana is completely free (for the time being) — so hurry up and get your access!",
    },
    {
      question: "What are the terms of using MeaVana?",
      answer:
        "You can find all terms in our User Agreement and Privacy Policy.",
    },
    {
      question: "Are there any privacy issues with using MeaVana?",
      answer:
        "MeaVana takes extreme pains to protect its user's privacy. You can find our detailed policies in the Privacy Policy.",
    },
    {
      question: "What is the team behind MeaVana?",
      answer:
        "MeaVana was founded by a team with a very strong track record in the startup tech space. It is founder-run, and the core team comprises extremely passionate and committed people who are hungry to make an impact.",
    },
    {
      question: "Where can I learn about the features that MeaVana offers?",
      answer: "Check out our Tours page!",
    },
    {
      question: "How do I join the team?",
      answer:
        "We are always on the lookout for passionate people. Feel free to drop us a note at: support@meavana.com and check out our careers page.",
    },
    {
      question: "Where did the name MeaVana come from?",
      answer: `"Mea" means "my" in Latin, "Vana" means "revival" in slang, and "forest" in Hindi. Just like "Nirvana" is your place of perfect peace, "MeaVana" is intended to be your digital sanctuary.`,
    },
    {
      question: "What is a MeaVana topic?",
      answer:
        "A MeaVana topic includes daily background wallpapers, relevant quotes, and a pre-customized feature set. MeaVana has hundreds of topics to choose from, including top-performing themes like landscapes, zen, wildlife, space, and fandoms like Lionel Messi and Lord of the Rings — with more added regularly.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-6xl mx-auto my-10 p-8">
      <h1 className="text-center font-bold text-5xl text-[#444546] mb-6 tracking-wide">
        Frequently asked Questions
      </h1>
      <p className="text-center mb-20 text-xl text-violet-400">
        The most common questions about how your MeaVana works and what it can
        do for you
      </p>
      <div>
        {questions.map((faq, idx) => (
          <div
            key={idx}
            className={`mb-4 rounded-xl bg-[#f5f8fa] transition-shadow ${
              openIndex === idx ? "shadow-lg" : ""
            }`}
          >
            <button
              onClick={() => handleToggle(idx)}
              className="w-full bg-transparent border-none outline-none text-left px-5 py-4 text-lg font-semibold text-[#2a3a4b] cursor-pointer flex items-center justify-between"
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span
                className={`text-2xl text-[#4e8cff] transition-transform ${
                  openIndex === idx ? "rotate-90" : ""
                }`}
              >
                &gt;
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 text-[#3d4d5c] text-base leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-8px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.3s;
                    }
                `}
      </style>
    </div>
  );
}

export default FAQs;
