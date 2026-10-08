import { Outlet } from "react-router"
import Header from "../../components/Header/Header"
import './Info.css'

export default function Info() {
    return (
        <>
            <Header/>

            <Outlet/>
        </>
    )
}