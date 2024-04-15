import * as React from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/plus-jakarta-sans/latin.css";
import "@/styles/globals.css";

import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
