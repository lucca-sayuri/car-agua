import Placeholder from "../../assets/placeholder.png"
import Caragua from "../../assets/caragua.jpg"
import Obra from '../../assets/obra.jpg'
import './Home.css'
import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <div className="home-area">
                    <div className="gradient-overlay"> </div>
                        <div className="banner-scroll">
                            <figure className="banner banner-1">
                                <img src={Placeholder} alt="caragua" />

                                <div className="banner-text">
                                    <h1>CarÁgua</h1>
                                    <p>Acesse nossa página de informações, com dados, explicações e mais sobre o meio ambiente e o saneamento básico:</p>
                                    <NavLink to="/info/agua">Saneamento</NavLink>
                                </div>
                            </figure>

                            <figure className="banner banner-2">
                                <img src={Caragua} alt="santo-antonio" />

                                <div className="banner-text">
                                    <h1>CarÁgua</h1>
                                    <p>Visite a página de notícias, com acontecimentos atuais sobre Caraguatatuba, sua infraestrutura, meio ambiente, saneamento e etc.</p>
                                    <NavLink to="/noticias">Notícias</NavLink>
                                </div>
                            </figure>

                            <figure className="banner banner-3">
                                <img src={Obra} alt="Obra" />

                                <div className="banner-text">
                                    <h1>CarÁgua</h1>
                                    <p>Converse em nosso mural, relate acontecimentos da cidade e discuta com outros cidadãos sobre Caraguá:</p>
                                    <NavLink to="/mural">Mural</NavLink>
                                </div>
                            </figure>

                        </div>

            </div>
        </>
    )
}