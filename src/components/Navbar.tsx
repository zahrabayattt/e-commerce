import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarItems, authNavItems } from '@/utils/NavbarItems';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`bg-white fixed border-l border-gray-200 shadow-md h-screen 
        transition-all duration-500 ease-in-out ${isOpen ? 'w-45' : 'w-15'}
        flex flex-col`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <nav className="flex flex-col gap-2 p-2">
        {NavbarItems.map((item) => (
          <Link
            key={item.address}
            to={item.address}
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
              location.pathname === item.address ? 'text-red-500' : ''
            }`}
          >
            {item.icon}
            <span
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-2 border-t pt-3">
        {authNavItems.map((item) => (
          <Link
            key={item.address}
            to={item.address}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
          >
            {item.icon}
            <span
              className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0 absolute'

              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Navbar;