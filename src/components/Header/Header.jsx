import { NavLink } from "react-router"
import "./Header.css"
function navLinkClass({ isActive }) {
    return isActive ? "highlighted-nav-link" : ""   
}   


export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <NavLink to="/" id="logo-text">CarÁgua</NavLink>
                </div>

                <nav className="nav-bar">
                    <NavLink to="/" className={navLinkClass}>Início</NavLink>
                    <NavLink to="/info/agua" className={navLinkClass}>Saneamento</NavLink>
                    <NavLink to="/noticias" className={navLinkClass}>Notícias</NavLink>
                    <NavLink to="/mural" className={navLinkClass}>Mural</NavLink>
                    <NavLink to="/login" className={navLinkClass}>Entrar</NavLink>
                </nav>
            </header>
        </>
    )
}