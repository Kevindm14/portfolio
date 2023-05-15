import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../routes/routes"
import { useState } from "react"

export const Navigation = () => {
    const classesNav = 'py-8 text-white px-40 flex justify-between top-0 sticky transition ease-in-out delay-150 z-50'
    const [color, setColor] = useState(false);

    window.addEventListener('scroll', () => setColor(window.scrollY >= 90))

    return (
        <BrowserRouter>
            <nav className={ color ? `${classesNav} bg-black` : classesNav }>
                <h1>Portfolio</h1>

                <ul className="flex space-x-10">
                    {
                        routes.map(({ to, path, name }) => (
                            <li key={path}>
                                <NavLink
                                    to={to}
                                    className={ ({ isActive }) => isActive ? "isActive" : "" }>{name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <Routes>
                <Route path="/*" element={<Navigate to="/home" replace />}/>
                {
                    routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    )
}