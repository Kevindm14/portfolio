import { Outlet } from 'react-router-dom';
import { Navigation } from '../components';

export function Layout() {
  return (
    <div className='h-screen w-screen relative overflow-x-hidden'>
      <Navigation />
      <Outlet />
    </div>
  );
}
