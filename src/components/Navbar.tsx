import { Link } from 'react-router-dom';
import { House, ShoppingBag, ShoppingCart, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="p-4 w-full max-w-xs">
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <House className="" size={20} />
            <span className="font-medium">داشبورد</span>
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <ShoppingBag className="" size={20} />
            <span className="font-medium">فروشگاه</span>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <ShoppingCart className="" size={20} />
            <span className="font-medium">سبد خرید</span>
          </Link>
        </li>
        <li>
          <Link
            to="/favorite"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Heart className="fill-black" size={20} />
            <span className="font-medium">علاقه‌مندی‌ها</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;