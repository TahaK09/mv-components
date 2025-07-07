import React from "react";
import mvplus from "../assets/meavana_plus.png";
import mvblogs from "../assets/meavana_blogs.jpg";
import mvschools from "../assets/meavana_schools.jpg";
import ApplyCard from "../components/applyCard";
const Jobs = [];
const jb = [
  {
    title: "Software Engineer Intern",
    description:
      "Join our team as a Software Engineer Intern and work on exciting projects that shape the future of MeaVana.",
    imageUrl:
      "https://www.training.com.au/wp-content/uploads/software-developer.jpg",
  },
  {
    title: "Product Manager",
    description:
      "Lead product development and strategy to enhance MeaVana's offerings.",
    imageUrl:
      "https://images.ctfassets.net/xri6xnn81z4a/7jdLCa5xoAiTKltPhAuJdu/3f2727214b7b3b644485de91cd3a6ebc/Product-Manager.jpg",
  },
  {
    title: "Marketing Specialist",
    description: "Drive marketing campaigns and brand awareness for MeaVana.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U2dTow7eKymVIpjAbV0ugXzZphSuOmhOUQ&s",
  },
  {
    title: "Data Analyst",
    description:
      "Analyze data to provide insights and support decision-making at MeaVana.",
    imageUrl:
      "https://www.tableau.com/sites/default/files/2020-04/data-analyst-job-description-template.jpg",
  },
  {
    title: "UX/UI Designer",
    description:
      "Design user-friendly interfaces and enhance user experience for MeaVana.",
    imageUrl:
      "https://www.creativebloq.com/best/ux-designer-job-description-template",
  },
  {
    title: "Customer Support Specialist",
    description:
      "Provide exceptional support to MeaVana users and resolve their queries.",
    imageUrl:
      "https://www.zendesk.com/blog/wp-content/uploads/2019/01/customer-support-specialist.jpg",
  },
];

function Careers() {
  return (
    <>
      <section className="px-6 py-12 bg-white flex flex-col items-center  justify-center">
        <h2 className="text-5xl font-extrabold text-[#282828] text-center mt-20">
          Hey, Future MeaVana Team Member!
        </h2>{" "}
        <h2 className="text-2xl max-w-3xl font-extrabold text-violet-400 text-center mt-16 mb-20">
          We're looking for passionate people who are hungry to join a startup
          aiming to make a big impact We are founder run and have an incredible
          committed and motivated team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-green-100  flex flex-col justify-center items-center rounded-lg  py-7 px-16 shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1 text-xl text-green-700">
              MeaVana Blog
            </h3>
            <p className="text-green-600 text-sm">
              Find out what we are up to!
            </p>
            <img
              src={mvblogs}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
          <div className="bg-violet-100 flex flex-col justify-center items-center rounded-lg  py-7 px-16 shadow-lg cursor-pointer">
            <h3 className="mb-1 text-xl font-bold text-violet-700">
              MeaVana Plus
            </h3>
            <p className="text-violet-600 text-sm">
              Unlock more with MeaVana Plus.
            </p>
            <img
              src={mvplus}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
          <div className="bg-[#efdec3] flex flex-col justify-center items-center rounded-lg py-7 px-16 shadow-lg cursor-pointer">
            <h3 className="font-extrabold mb-1 text-xl text-[#745f3e]">
              MeaVana For Schools
            </h3>
            <p className="text-[#745f3e] text-sm">
              Empower students with MeaVana.
            </p>
            <img
              src={mvschools}
              alt="meavana plus"
              className="w-64 h-auto mt-3.5 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className=" py-6 bg-white flex flex-col items-center justify-center w-full mb-20 ">
        <div className="flex flex-row items-center justify-between w-full mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-[#282828] text-center mt-20">
            Open Positions
          </h2>
          <p className="flex flex-row justify-center items-center gap-0.5 text-sm font-normal px-4 py-1.5 rounded-full text-violet-800 bg-violet-100 hover:bg-violet-200 text-center mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-graduation-cap mr-2 h-4 w-4"
              aria-hidden="true"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            Student? View University Opportunities
          </p>
        </div>
        {Jobs && Jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-start w-full max-w-6xl mt-14">
            {Jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                description={job.description}
                imageUrl={job.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full min-h-[20vh] mt-14">
            <NotAvailable />
          </div>
        )}
      </section>
      <section className="pt-16 pb-10 bg-gradient-to-br from-violet-50 to-violet-100 flex flex-col items-center justify-center w-full mb-20">
        <div className="w-full max-w-5xl px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#f72585] text-transparent bg-clip-text mb-12 text-center">
            Benefits of Working at MeaVana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Remote Friendly
              </h3>
              <p className="text-gray-600 text-sm">
                Work from anywhere and enjoy flexible hours that fit your
                lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Growth Opportunities
              </h3>
              <p className="text-gray-600 text-sm">
                Accelerate your career with mentorship, learning, and leadership
                chances.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Supportive Team
              </h3>
              <p className="text-gray-600 text-sm">
                Collaborate with passionate, motivated, and friendly colleagues.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Cutting-edge Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Work on innovative products that make a real-world impact.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Diverse & Inclusive
              </h3>
              <p className="text-gray-600 text-sm">
                We celebrate diversity and foster an inclusive, welcoming
                environment.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <svg
                className="w-12 h-12 text-violet-400 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v20" />
                <path d="M5 12h14" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-violet-700">
                Competitive Compensation
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy a competitive salary and performance-based rewards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ApplyCard
        title={`Students & Recent Graduates`}
        description={
          "Kickstart your career with our university hiring program. Get hands-on experience, mentorship, and work on real projects that make a difference."
        }
        button={"Apply to University Program"}
      />
    </>
  );
}

export default Careers;

export function JobCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 max-w-md mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export function NotAvailable() {
  return (
    <div className="flex flex-col items-center justify-center w-full italic">
      <h1 className="text-lg font-medium text-center text-gray-800 mb-2">
        We have no job postings currently available.
      </h1>
      <p className="text-gray-600 text-center mb-4">
        If you would love to join us, please reach out to{" "}
        <span className="text-violet-400">careers@meavana.com</span>.
      </p>
    </div>
  );
}
