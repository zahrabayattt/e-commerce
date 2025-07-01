import { createBrowserRouter } from 'react-router';
import PrivateRoutes from './PrivateRoutes';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import ShoppingProgress from './pages/ShoppingProgress';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'auth', Component: AuthPage },
      { path: 'product/:id', Component: ProductPage },
      { path: 'shop', Component: ShopPage },
      { path: 'cart', Component: CartPage },
      {
        Component: PrivateRoutes,
        children: [
          { path: 'profile', Component: ProfilePage },
          { path: 'shoppingprogress', Component: ShoppingProgress },
          { path: 'checkout', Component: CheckoutPage },
          { path: 'order', Component: OrdersPage },
          { path: 'orderdetail', Component: OrderDetailsPage },
          { path: 'dashboard', Component: Dashboard },
        ],
      },
    ],
  },
]);

export default router;
