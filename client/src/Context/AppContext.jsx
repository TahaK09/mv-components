import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  //   const [user, setUser] = useState(null);
  const [browser, setBrowser] = useState(null);
  const [path, setPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const checkBrowser = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Edg/")) return "Edge";
    if (userAgent.includes("OPR") || userAgent.includes("Opera"))
      return "Opera";
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Safari")) return "Safari";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("MSIE") || userAgent.includes("Trident/"))
      return "Internet Explorer";

    return 0;
  };
  useEffect(() => {
    setBrowser(checkBrowser());
  }, []);

  const value = {
    navigate,
    browser,
    setPath,
    path: location.pathname,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
