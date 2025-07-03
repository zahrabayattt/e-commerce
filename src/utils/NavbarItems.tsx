import {
  House,
  ShoppingBag,
  ShoppingCart,
  Heart,
  LogIn,
  UserPlus,
  User,
  UserCog,
} from 'lucide-react';
import type { ReactNode } from 'react';

export type NavItem = {
  title: string;
  menuId?: string;
  address?: string;
  icon?: ReactNode;
  subItems?: NavItem[];
  adminOnly?: boolean;
  userOnly?: boolean;
};

export const NavbarItems: NavItem[] = [
  {
    title: 'داشبورد',
    menuId: 'dashboard-menu',
    icon: <House size={20} />,
    subItems: [
      { title: 'داشبورد', address: 'dashboard' },
      { title: 'محصول جدید', address: 'shop/new', adminOnly: true },
      { title: 'مدیریت کاربران', address: 'users', adminOnly: true },
      { title: 'سفارشات', address: 'orders', adminOnly: true },
    ],
  },
  { title: 'فروشگاه', address: 'shop', icon: <ShoppingBag size={20} /> },
  { title: 'سبد خرید', address: 'cart', icon: <ShoppingCart size={20} /> },
  { title: 'علاقه‌مندی‌ها', address: 'favorite', icon: <Heart size={20} className="fill-black" /> },
];

export const authNavItems: NavItem[] = [
  { title: 'ورود', address: 'auth?mode=login', icon: <LogIn size={20} /> },
  { title: 'ثبت نام', address: 'auth?mode=register', icon: <UserPlus size={20} /> },
];

export const getAuthNavItems = (isAdmin: boolean): NavItem[] => [
  {
    title: isAdmin ? 'ادمین' : 'کاربر',
    icon: isAdmin ? <UserCog size={20} /> : <User size={20} />,
    subItems: [
      { title: 'پروفایل', address: 'profile' },
      ...(isAdmin
        ? [
            { title: 'محصول جدید', address: 'shop' },
            { title: 'مدیریت کاربران', address: 'users' },
            { title: 'سفارشات', address: 'cart' },
            { title: 'پروفایل', address: 'profile' },
          ]
        : []),
      { title: 'خروج از حساب', address: 'auth?mode=logout' },
    ],
  },
];
