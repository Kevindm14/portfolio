import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className='h-screen w-screen relative overflow-x-hidden scroll-smooth'>
      <Outlet />
    </div>
  );
}
