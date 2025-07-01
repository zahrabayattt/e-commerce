import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems, authNavItems } from '@/utils/NavbarItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <NavLink
            key={item.address}
            to={item.address}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
                isActive ? 'text-red-500' : ''
              }`
            }
          >
            {item.icon}
            <span
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-2 border-t pt-3">
        {authNavItems.map((item) => (
          <NavLink
            key={item.address}
            to={item.address}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
                isActive ? 'text-red-500' : ''
              }`
            }
          >
            {item.icon}
            <span
              className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Navbar;
