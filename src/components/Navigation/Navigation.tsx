import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Menu } from "../Menu/Menu"
import { useModal } from "../../hooks/useModal"
import { routes } from "../../router/routes"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const classesNav = 'py-8 text-white px-5 sm:px-12 font-bold md:px-20 flex justify-between items-center top-0 sticky transition ease-in-out delay-150 z-50 relative'
    const classesLink = 'py-2 px-5 text-white border-2 border-white hover:bg-white hover:text-blue transition ease-in-out'
    const [color, setColor] = useState(false);
    const { isModalOpen, openModal, closeModal } = useModal();

    window.addEventListener('scroll', () => setColor(window.scrollY >= 90))

    return (
        <div className="bg-purple">
            <nav className={ color ? `${classesNav} bg-blue` : classesNav }>
                <h1 className="text-lg font-extrabold">Portfolio</h1>

                <div className="md:hidden">
                    <GiHamburgerMenu
                        size={30}
                        style={{ cursor: "pointer" }}
                        onClick={() => openModal('menu')}
                    />

                    <Menu
                        isOpen={isModalOpen.menu}
                        onClose={() => closeModal('menu')}
                    />
                </div>

                <ul className="hidden md:flex space-x-10">
                    {routes.routes.map(({ path, id }) => (
                        <li key={path}>
                            <NavLink
                                to={path as string}
                                className={ ({ isActive }) => isActive ? `isActive ${classesLink}` : `${classesLink}` }>{id}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}