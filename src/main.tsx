import "./index.css";
import App from "./App";
import React from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
