import useAuthStore from '@/store/use-auth-store';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { authNavItems, getAuthNavItems, NavbarItems } from '@/utils/NavbarItems';
import useLogout from '@/hooks/use-logout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { id, isAdmin } = useAuthStore();
  const logout = useLogout();

  const authItems = getAuthNavItems(isAdmin);
  const userNavItem = authItems[0];
  const dashboardNavItem = NavbarItems.find((item) => item.menuId === 'dashboard-menu');

  const handleDashboard = (menuId: string) => {
    if (menuId === 'dashboard-menu') {
      setDashboardDropdownOpen(!dashboardDropdownOpen);
    }
  };

  return (
    <aside
      className={`bg-white fixed border-l border-gray-200 shadow-md h-screen 
        transition-all duration-500 ease-in-out ${isOpen ? 'w-45' : 'w-15'}
        flex flex-col`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setUserDropdownOpen(false);
        setDashboardDropdownOpen(false);
      }}
    >
      <nav className="flex flex-col gap-2 p-2">
        {NavbarItems.map((item) => (
          <div key={item.address} className="relative">
            <NavLink
              to={item.address ?? '#'}
              onClick={() => handleDashboard(item.menuId ?? '')}
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

            {item.menuId === 'dashboard-menu' && dashboardDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 mt-1"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {dashboardNavItem?.subItems
                    ?.filter((subItem) => !subItem.adminOnly)
                    .map((subItem) => (
                      <li key={subItem.title}>
                        <NavLink
                          to={subItem.address || '#'}
                          className="block w-full text-right px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => setDashboardDropdownOpen(false)}
                        >
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto p-2 border-t pt-3">
        {!id ? (
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
          ))
        ) : (
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
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

            {userDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 mt-1"
              >
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
                            className="block w-full text-right px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subItem.title}
                          </button>
                        ) : (
                          <NavLink
                            to={subItem.address || '#'}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
