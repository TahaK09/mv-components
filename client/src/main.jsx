import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./animation.css";
import App from "./app.jsx";
import { AppContextProvider } from "./Context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
