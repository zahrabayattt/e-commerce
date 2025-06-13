import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { authNavItems, NavbarItems } from "@/utils/NavbarItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <aside
      className={`bg-white border-l border-gray-200 shadow-md h-screen transition-all duration-300 ${
        isOpen ? "w-56" : "w-16"
      } flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        <span
          className={`font-bold text-lg transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          منو
        </span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex flex-col gap-2 p-2">
        {NavbarItems.map((item) => (
          <Link
            key={item.address}
            to={item.address}
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all ${
              location.pathname === item.address ? "text-red-500" : ""
            }`}
          >
            {item.icon}
            <span
              className={`transition-all ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
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
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            {item.icon}
            <span
              className={`transition-all ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
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
