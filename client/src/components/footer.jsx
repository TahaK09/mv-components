import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
  FaPinterest,
  FaMedium,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 bg-white pt-12 pb-20 text-gray-600 border-t border-[#6952dc66] w-full">
      {/* Grid Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm px-6 text-gray-700">
        <div>
          <h4 className="font-semibold mb-2">MeaVana</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">MeaVana Plus</a>
            </li>
            <li>
              <a href="#">MeaVana For Schools</a>
            </li>
            <li>
              <a href="#">Chrome Extension</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">CONNECT</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Partner with Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">HELP & SUPPORT</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Privacy & Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">User Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">FOLLOW US</h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaDiscord /> Discord
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaYoutube /> Youtube
              </a>
            </li>
            <li className="flex flex-row items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaPinterest /> Pinterest
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2">
                <FaMedium /> Medium
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Icon */}
      <div className="flex justify-center mt-12 mb-2">
        <div className="w-12 h-12">
          <svg
            width="739"
            height="739"
            viewBox="0 0 739 739"
            class="h-8 w-8 md:h-14 md:w-14 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="718.999"
              height="718.999"
              rx="79.8887"
              fill="#380C9C"
              stroke="#F9F9F9"
              stroke-width="20"
            ></rect>
            <path
              d="M127.291 458.976C148.042 419.323 247.745 229.411 255.543 228.131C255.543 228.131 193.164 435.696 264.064 435.696C264.064 435.696 330.618 396.596 406.206 238.279C406.206 238.279 369.009 391.778 438.077 599.087C440.676 606.889 454.524 607.87 457.719 604.075C459.04 602.455 463.685 596.017 464.068 595.548C472.036 586.38 598.966 340.313 634.842 302.877C636.175 301.466 637.132 299.743 637.623 297.865C638.115 295.987 638.125 294.015 637.655 292.132C634.033 277.294 622.273 247.745 590.444 292.686C590.444 292.686 472.036 505.879 460.063 530.865C460.063 530.865 427.34 415.997 444.852 300.233C445.832 293.965 446.343 288.166 447.408 281.344C455.461 229.155 472.59 153.429 458.444 135.307C458.444 135.307 427.979 112.453 390.483 186.9C390.483 186.9 283.962 367.815 272.969 377.963C272.969 377.963 266.621 387.386 267.686 375.064C268.751 362.741 307.567 189.629 306.843 170.74C306.119 151.851 293.081 121.407 266.237 138.079L108.118 410.965C108.118 410.965 85.6629 444.096 115.446 462.132C116.426 462.723 117.514 463.11 118.647 463.271C119.779 463.432 120.932 463.364 122.038 463.069C123.143 462.775 124.178 462.261 125.081 461.557C125.983 460.854 126.735 459.976 127.291 458.976Z"
              fill="#F9F9F9"
              stroke="#F9F9F9"
              stroke-width="18.1367"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></path>
          </svg>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4">
        <p className="max-w-60 mx-auto">
          Enhance your browsing experience with our powerful extension.
        </p>
      </div>

      {/* Mountain background simulation (SVG-like shape) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-[-1]"></div>
    </footer>
  );
}
