import React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";


export default function App() {
  const [cart, setCart] = useState([]);



  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);