import { House, ShoppingBag, ShoppingCart, Heart, LogIn, UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';

type NavItem = {
  title: string;
  address: string;
  icon: ReactNode;
};

export const NavbarItems: NavItem[] = [
  { title: 'داشبورد', address: 'dashboard', icon: <House size={20} /> },
  { title: 'فروشگاه', address: 'shop', icon: <ShoppingBag size={20} /> },
  { title: 'سبد خرید', address: 'cart', icon: <ShoppingCart size={20} /> },
  { title: 'علاقه‌مندی‌ها', address: 'favorite', icon: <Heart size={20} className="fill-black" /> },
];

export const authNavItems: NavItem[] = [
  { title: 'ورود', address: 'auth?mode=login', icon: <LogIn size={20} /> },
  { title: 'ثبت نام', address: 'auth?mode=register', icon: <UserPlus size={20} /> },
];
