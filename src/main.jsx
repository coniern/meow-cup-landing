import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
