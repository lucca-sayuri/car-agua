import { NavLink } from "react-router"
import './InfoNav.css'
function infoNavClass ({ isActive }) {
    return isActive ? "highlighted-info-link" : ""
}

export default function InfoNav() {

    return (
        <>
            <div className="info-nav-box">
                <h2>SANEAMENTO BÁSICO</h2>
                <hr></hr>
                <div className="info-nav-bar">
                    <NavLink to="/info/agua" className={infoNavClass}>ÁGUA</NavLink>
                    <NavLink to="/info/esgoto" className={infoNavClass}>ESGOTO</NavLink>
                    <NavLink to="/info/drenagem" className={infoNavClass}>DRENAGEM</NavLink>
                    <NavLink to="/info/residuos" className={infoNavClass}>RESÍDUOS SÓLIDOS</NavLink>
                </div>
            </div>
        </>
    )
}