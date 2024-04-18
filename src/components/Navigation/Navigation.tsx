import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { IconsNav } from '../Icons/Navigation';
import { Menu } from '../Menu/Menu';
import './navigation.modules.css';

export const Navigation = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const classesLink = 'text-white rounded-lg hover:bg-white hover:text-neutrals-900 transition ease-in-out duration-300';

  return (
    <nav className={`nav fixed p-2 rounded-l-md bg-zaffre text-white font-bold top-[50%] right-4 transition ease-in-out delay-150 z-40`}>
      <div className="md:hidden">
        <GiHamburgerMenu size={30} style={{ cursor: 'pointer' }} onClick={() => openModal('menu')} />
        <Menu isOpen={isModalOpen.menu} onClose={() => closeModal('menu')} />
      </div>

      <ul className="hidden md:flex md:flex-col gap-5 items-center">
        <li>
          <NavLink to="/#home" className={({ isActive }) => isActive ? `text-[#3E4140] rounded-lg bg-white` : classesLink} >
            <IconsNav.Home className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </NavLink>
        </li>
        <li>
          <NavLink to="/#about" className={({ isActive }) => isActive ? `text-[#3E4140] rounded-lg bg-white` : classesLink} >
            <IconsNav.About className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </NavLink>
        </li>
        <li>
          <NavLink to="/#contact" className={({ isActive }) => isActive ? `text-[#3E4140] rounded-lg bg-white` : classesLink} >
            <IconsNav.Contact className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
