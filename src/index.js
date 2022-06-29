import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import "./index.css";

console.log(`back end port`, process.env.REACT_APP_BACKEND_PORT);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", root.render);
}
