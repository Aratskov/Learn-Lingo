import { HomePage } from "../components/HomePage/HomePage"
import { Outlet } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <HomePage/>
            <Outlet/>
        </>
       
        )
}