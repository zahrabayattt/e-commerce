import useAuthStore from '@/store/use-auth-store';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { authNavItems, getAuthNavItems, NavbarItems } from '@/components/NavbarItems';
import useLogout from '@/hooks/use-logout';
import { useCartStore } from '@/store/use-cart-store';
import ModToggle from './ModToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { cartItems } = useCartStore();
  const logout = useLogout();

  const { id, isAdmin } = useAuthStore();
  const authItems = getAuthNavItems(isAdmin);
  const navbarItems = NavbarItems;
  const userNavItem = authItems[0];

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dropdownIcon = (
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
  );

  return (
    <aside
      className={`bg-white dark:bg-black fixed z-10 border-l border-gray-200 dark:border-gray-700 shadow-md h-screen 
        transition-all duration-500 ease-in-out ${isOpen ? 'w-45' : 'w-15'}
        flex flex-col`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setUserDropdownOpen(false);
      }}
    >
      <ModToggle />
      <nav className="flex flex-col gap-2 p-2">
        {navbarItems.map((item) => (
          <div key={item.address} className="relative">
            <NavLink
              to={item.address ?? '#'}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive ? 'text-red-500' : ''
                }`
              }
            >
              {item.title === 'سبد خرید' && totalQuantity > 0 ? (
                <div className="relative">
                  {item.icon}
                  <span className="absolute -top-3 -right-3 bg-red-600 text-white  text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalQuantity}
                  </span>
                </div>
              ) : (
                item.icon
              )}

              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {item.title}
              </span>
            </NavLink>
          </div>
        ))}
      </nav>

      <div className="mt-auto p-2 border-t pt-3">
        {!id ? (
          authNavItems.map((item) => (
            <NavLink
              key={item.address}
              to={item.address ?? '#'}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800  ${
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
          ))
        ) : (
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="hover:bg-gray-200 dark:hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
            >
              <span className="flex items-center gap-3">
                {userNavItem.icon}
                <span
                  className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  {userNavItem.title}
                </span>
              </span>
              {dropdownIcon}
            </button>
            {userDropdownOpen && (
              <div className="z-10 bg-white dark:bg-black divide-y divide-gray-100 rounded-lg shadow-sm w-full  mt-1">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {userNavItem.subItems
                    ?.filter((subItem) => !subItem.adminOnly || isAdmin)
                    .map((subItem) => (
                      <li key={subItem.title}>
                        {subItem.title === 'خروج از حساب' ? (
                          <button
                            onClick={() => logout.mutate()}
                            className="block w-full text-right px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {subItem.title}
                          </button>
                        ) : (
                          <NavLink
                            to={subItem.address || '#'}
                            className={({ isActive }) =>
                              `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-800 ${
                                isActive ? 'text-red-500' : ''
                              }`
                            }
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            {subItem.title}
                          </NavLink>
                        )}
                      </li>
                    ))}
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
