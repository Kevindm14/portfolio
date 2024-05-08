import { Menu } from '@/components';
import { IconsNav } from '@/components/Icons';
import { useModal } from '@/hooks/useModal';
import './navigation.modules.css';

export const Navigation = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const classesLink = 'text-white rounded-lg hover:bg-white hover:text-neutrals-900 transition ease-in-out duration-300';

  return (
    <nav className={`nav fixed p-2 rounded-l-md bg-zaffre text-white font-bold top-[50%] right-4 transition ease-in-out delay-150 z-40`}>
      <div className="md:hidden">
        <IconsNav.HamburguerMenu size={30} style={{ cursor: 'pointer' }} onClick={() => openModal('menu')} />
        <Menu isOpen={isModalOpen.menu} onClose={() => closeModal('menu')} />
      </div>

      <ul className="hidden md:flex md:flex-col gap-5 items-center">
        <li>
          <a href="/#home" className={classesLink} >
            <IconsNav.Home className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </a>
        </li>
        <li>
          <a href="/#about" className={classesLink} >
            <IconsNav.About className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </a>
        </li>
        <li>
          <a href="/#contact" className={classesLink} >
            <IconsNav.Contact className='w-9 h-9 text-white hover:text-honeyDew transition ease-in-out' />
          </a>
        </li>
      </ul>
    </nav>
  );
};
