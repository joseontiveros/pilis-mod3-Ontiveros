import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CardLocationContextProvider } from "./context/CardLocationContext";
import { HashRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <CardLocationContextProvider>
          <App />
        </CardLocationContextProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
