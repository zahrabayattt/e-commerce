import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mr-14 px-8 py-8 min-h-screen bg-[#EEEFF1] dark:bg-[#0F0F10]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
