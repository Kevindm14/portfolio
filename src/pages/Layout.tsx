import { Outlet } from "react-router-dom";
import { Navigation } from "../components";

export function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}