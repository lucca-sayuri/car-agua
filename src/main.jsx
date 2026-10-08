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
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import InfoText from "./components/InfoText/InfoText";
import "./index.css";

//Y: até já daria pra trancar as outras páginas se !tiverlogado mas isso dificultaria os tests;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* L: estou tentando fazer várias rotas pro info, e cada uma vai mudar a navbar especifica do info (tá no canva) e também mudar o texto/graficos, mas vou tentar arrumar amanhã */}
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}>
          <Route path="/info/agua" element={<InfoText/>}/>
          <Route path="/info/esgoto"/>
          <Route path="/info/drenagem"/>
          <Route path="/info/residuos"/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mural" element={<Mural/>}/>
        <Route path="/noticias" element={<News/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
);
