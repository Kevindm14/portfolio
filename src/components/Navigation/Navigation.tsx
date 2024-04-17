import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { Menu } from '../Menu/Menu';
import { Container } from '../styles/Container';

export const Navigation = () => {
  const [color, setColor] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const classesNav = 'py-5 bg-spaceCadet text-white px-5 sm:px-12 md:px-52 font-bold flex justify-between items-center top-0 sticky transition ease-in-out delay-150 z-40 relative';
  const classesLink = 'py-2 px-5 text-white rounded-lg hover:bg-white hover:text-neutrals-900 transition ease-in-out duration-300';

  useEffect(() => {
    window.addEventListener('scroll', () => setColor(window.scrollY >= 90));

    return () => {
      window.removeEventListener('scroll', () => setColor(window.scrollY >= 90));
    };
  }, []);

  return (
    <nav className={color ? `${classesNav} backdrop-blur-3xl bg-transparent` : classesNav}>
      <Container className="flex justify-end items-center">
        <div className="md:hidden">
          <GiHamburgerMenu size={30} style={{ cursor: 'pointer' }} onClick={() => openModal('menu')} />

          <Menu isOpen={isModalOpen.menu} onClose={() => closeModal('menu')} />
        </div>

        <ul className="hidden md:flex gap-5 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? `text-[#3E4140] py-2 px-5 rounded-lg bg-white` : classesLink} >
              .Inicio()
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? `text-[#3E4140] py-2 px-5 rounded-lg bg-white` : classesLink} >
              .Proyectos()
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `text-[#3E4140] py-2 px-5 rounded-lg bg-white` : classesLink} >
              .Contacto()
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
