import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import StartWarsRandomName from "./Names/StartWarsRandomName";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <StartWarsRandomName />
  </React.StrictMode>
);
