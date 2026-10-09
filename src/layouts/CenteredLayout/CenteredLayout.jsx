import { Outlet } from "react-router"
import Header from "../../components/Header/Header"
import './CenteredLayout.css'

export default function CenteredLayout() {
    return (
        <>
            <Header/>
            <div className="centered-layout">
                <Outlet/>
            </div>
        </>
    )
}