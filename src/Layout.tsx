import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mr-14 px-8 py-3 min-h-screen bg-[#EEEFF1]">
        <Outlet />
      </div>
    </>
  );
};
 
export default Layout;
