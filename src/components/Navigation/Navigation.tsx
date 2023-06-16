import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Menu } from "../Menu/Menu"
import { useModal } from "../../hooks/useModal"

export const Navigation = () => {
    const [color, setColor] = useState(false);
    const { isModalOpen, openModal, closeModal } = useModal();

    const classesNav = 'py-5 text-white px-5 sm:px-12 font-bold md:px-20 flex justify-between items-center top-0 sticky transition ease-in-out delay-150 z-50 relative'
    const classesLink = 'py-2 px-5 text-white border-2 border-white hover:bg-white hover:text-neutrals-900 transition ease-in-out'

    window.addEventListener('scroll', () => setColor(window.scrollY >= 90))

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={ color ? `${classesNav} backdrop-blur-3xl bg-transparent` : classesNav }>
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
                <li>
                    <button onClick={() => scrollTo('contact')} id="contact-tab" className={classesLink}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}