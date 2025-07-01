import useAuthStore from '@/store/use-auth-store';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { authNavItems, getAuthNavItems, NavbarItems } from '@/utils/NavbarItems';
import useLogout from '@/hooks/use-logout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { id, isAdmin } = useAuthStore();
  const logout = useLogout();
  const authItems = getAuthNavItems(isAdmin);
  const userNavItem = authItems[0];

  const handleMouseLeave = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <aside
      className={`bg-white fixed border-l border-gray-200 shadow-md h-screen 
        transition-all duration-500 ease-in-out ${isOpen ? 'w-45' : 'w-15'}
        flex flex-col`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="flex flex-col gap-2 p-2">
        {NavbarItems.map((item) => (
          <NavLink
            key={item.address}
            to={item.address ?? '#'}
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
        {/* show login/logout when not logged in */}
        {!id &&
          authNavItems.map((item) => (
            <NavLink
              key={item.address}
              to={item.address ?? '#'}
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

        {/* show user/admin when logged in */}
        {id && (
          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className=" hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
            >
              <span className="flex items-center gap-3">
                {userNavItem?.icon || ''}
                <span
                  className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  {userNavItem?.title || 'Menu'}
                </span>
              </span>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 mt-1"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {(!isAdmin ? userNavItem.adminSubItems : userNavItem.userSubItems)?.map(
                    (subItem) => (
                      <li key={subItem.title}>
                        {subItem.title === 'خروج از حساب' ? (
                          <button
                            onClick={() => logout.mutate()}
                            className="block w-full text-right px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subItem.title}
                          </button>
                        ) : (
                          <NavLink
                            to={subItem.address || '#'}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {subItem.title}
                          </NavLink>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Navbar;
