import Header from "../../components/Header/Header"
import { Outlet } from "react-router"
import './SiteLayout.css'

export default function SiteLayout() {
    return (
        <>
            <Header />
            <div className="site-layout">
                <Outlet/>
            </div>
        </>
    )
}