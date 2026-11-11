import './Footer.css'
import { NavLink } from 'react-router'
import { FaSquareXTwitter, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";


export default function Footer() {
    return (
        <>
            <div className="footer-box">
                <div className='footer-left'>
                    <div className='footer-col'>
                        <h4>Navegação</h4>
                        <NavLink to="/">Início</NavLink>
                        <NavLink to="/info">Saneamento</NavLink>
                        <NavLink to="/noticias">Notícias</NavLink>
                        <NavLink to="/mural">Mural</NavLink>
                    </div>

                    <div className='footer-col'>
                        <h4>APIs</h4>
                        <a href="https://react.dev/">React</a>
                        <a href="https://reactrouter.com/">React Router</a>
                        <a href="https://react-icons.github.io/react-icons/">React Icons</a>
                        <a href="https://supabase.com/">Supabase</a>
                        <a href="https://www.chartjs.org/">Chart JS</a>
                    </div>

                </div>

                <div className='footer-right'>
                    <div className='socials'>
                        <a href="https://github.com/lucca-sayuri/car-agua/tree/main"><FaSquareGithub /></a>
                        <a href="https://x.com"><FaSquareXTwitter /></a>
                        <a href="https://instagram.com"><FaSquareInstagram/></a>
                    </div>

                </div>
            </div>
        </>
    )
}