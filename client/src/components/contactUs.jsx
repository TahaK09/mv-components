import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { CiLocation } from "react-icons/ci";
import contactIllustration from "../assets/about-us.webp";

function ContactUs() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('https://images.pexels.com/photos/16809643/pexels-photo-16809643.jpeg')] bg-cover bg-center h-screen w-full">
        <div className="w-full max-w-5xl bg-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-16 shadow-lg border border-gray-100 relative">
          {/* Left: Contact Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#f72585] text-transparent bg-clip-text mb-5">
              Contact Us At MeaVana
            </h2>
            <p className="text-gray-500 mb-6">
              Email us at{" "}
              <span className="text-[#0b0b0b]">support@meavana.com</span>,
              through the{" "}
              <span className="text-[#8e0ff6]">MeaVana dashboard</span> or the
              contact form below.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
              />
              <select className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400">
                <option disabled selected>
                  Subject
                </option>
                <option>General</option>
                <option>Feedback</option>
                <option>Support</option>
                <option>Bugs</option>
                <option>Enchantments</option>
                <option>Other</option>
              </select>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5124b8] to-[#7523f8] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          {/* <div className=" flex flex-col items-center text-center md:text-left md:items-start justify-center">
            <img
              src={contactIllustration}
              alt="Contact Illustration"
              className="w-80 h-auto rounded-2xl mb-4"
            />
            <p className="text-gray-600 mb-2">
             
              131-2, Michigan, USA
            </p>
            <div className="flex space-x-4 mt-4 text-violet-600">
              <a href="#">
                <FaFacebookF size={20} />
              </a>
              <a href="#">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
