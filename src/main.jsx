import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Mural from "./pages/Mural";
import News from "./pages/News";
import Register from "./pages/Register";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mural" element={<Mural/>}/>
        <Route path="/noticias" element={<News/>}/>
        <Route path="/cadastro" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
