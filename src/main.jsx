import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Login from "./pages/Login/Login";
import Mural from "./pages/Mural/Mural";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";

import "./index.css";
//Y: até já daria pra trancar as outras páginas se !tiverlogado mas isso dificultaria os tests;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
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
      </AuthProvider>
  </StrictMode>,
);
