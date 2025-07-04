import { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext.jsx";

function GetExtenBtn() {
  const [browser, setBrowser] = useState(6); // Default to "Unknown Browser"
  const [spin, setSpin] = useState(false);
  const { path } = useAppContext();
  const [colorHeaderText, setColorHeaderText] = useState("text-blue-800");

  useEffect(() => {
    if (path === "/meavana-schools") {
      setColorHeaderText("text-white");
    } else {
      setColorHeaderText("text-blue-800");
    }
  }, [path]);

  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;

      if (userAgent.includes("Edg/")) return 0;
      if (userAgent.includes("OPR") || userAgent.includes("Opera")) return 1;
      if (userAgent.includes("Chrome")) return 2;
      if (userAgent.includes("Safari")) return 3;
      if (userAgent.includes("Firefox")) return 4;
      if (userAgent.includes("MSIE") || userAgent.includes("Trident/"))
        return 5;

      return 6;
    };

    setBrowser(detectBrowser());
  }, []);

  const browserNames = [
    { name: "Edge", icon: "edge" },
    { name: "Opera", icon: "opera" },
    { name: "Chrome", icon: "chrome" },
    { name: "Safari", icon: "safari" },
    { name: "Firefox", icon: "firefox" },
    { name: "Internet Explorer", icon: "ie" },
    { name: "Unknown Browser", icon: "unknown" },
  ];

  const browserIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png",
    "https://images.icon-icons.com/2552/PNG/512/opera_browser_logo_icon_152972.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Internet_Explorer_10%2B11_logo.svg/2085px-Internet_Explorer_10%2B11_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7hARjRLHiURBxleWuDNKvtuvHf7KW13ZPA&s",
  ];

  const handleClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 2000); // stop spin after 2 seconds
  };

  return (
    <a
      href="https://chromewebstore.google.com/detail/meavana-productivity-moti/kgbcoelgfffkmkpfnldemdinmcbpjlaa"
      target="_blank"
      className="flex flex-row justify-center items-center w-auto px-6 py-2 border border-[#380c9c] rounded-lg text-md gap-3"
    >
      <img
        src={browserIcons[browser]}
        alt={browserNames[browser].icon}
        className={`w-7 h-7 ${spin ? "animate-spin-once" : ""}`}
      />
      <div className={`${colorHeaderText}`}>
        Get {browserNames[browser].name} Extension
      </div>
      <div className={`${colorHeaderText}`}>|</div>
      <div className={`${colorHeaderText}`}>It's free</div>
    </a>
  );
}

export default GetExtenBtn;
