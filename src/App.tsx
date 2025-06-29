import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <div>
            <ShopPage/>
          </div>
        </Layout>
        <Routes>
          {/* I commented Button component which was implanted as an instant
          <Button>کلیک</Button> */}
          <Route path="dashboard" />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="shop" />
          <Route path="favorite" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
