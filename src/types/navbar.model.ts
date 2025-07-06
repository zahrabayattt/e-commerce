import type { ReactNode } from "react";

export type NavItem = {
  title: string;
  menuId?: string;
  address?: string;
  icon?: ReactNode;
  subItems?: NavItem[];
  adminOnly?: boolean;
  userOnly?: boolean;
};