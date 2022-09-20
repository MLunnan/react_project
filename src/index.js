import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes";
import About from "./routes/About";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="About" element={<About />} />
        <Route index element={<Index />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
