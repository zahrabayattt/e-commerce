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
import FavoritePage from './pages/FavoritePage';
import UsersPage from './pages/UsersPage';
import CreateProduct from './pages/CreateProduct';
import OrderShippingDetails from '@/components/OrderShippingDetails';
import OrderSummary from '@/components/OrderSummary';


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
      { path: 'favorites', Component: FavoritePage },
      {
        Component: PrivateRoutes,
        children: [
          { path: 'profile', Component: ProfilePage },
          {
            path: 'shopping-progress',
            Component: ShoppingProgress,
            children: [
              { path: 'address', Component: OrderShippingDetails },
              { path: 'summary', Component: OrderSummary },
            ],
          },
          { path: 'checkout', Component: CheckoutPage },
          { path: 'orders', children: [
              { index: true, Component: OrdersPage },
              { path: ':id', Component: OrderDetailsPage }
            ],
          },
          { path: 'dashboard', Component: Dashboard },
          { path: 'users', Component: UsersPage },
          { path: 'create-product', Component: CreateProduct }
        ],
      },
    ],
  },
]);

export default router;
