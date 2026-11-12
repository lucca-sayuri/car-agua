import Placeholder from "../../assets/placeholder.png"
import './Home.css'
import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <div className="home-area">
                <div className="banner-scroll">
                    <figure className="banner">
                        <img src={Placeholder} alt="" />

                        <div className="banner-text">
                            <h1>CarÁgua</h1>
                            <p>Lorem ipsum</p>
                            <NavLink to="/info">sla</NavLink>
                        </div>
                    </figure>

                    <figure className="banner">
                        <img src={Placeholder} alt="" />

                        <div className="banner-text">
                            <h1>CarÁgua</h1>
                            <p>Lorem ipsum</p>
                            <NavLink to="/info">sla</NavLink>
                        </div>
                    </figure>

                </div>
            </div>
        </>
    )
}