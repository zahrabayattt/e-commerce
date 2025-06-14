import { BrowserRouter, Routes } from 'react-router-dom';
import Layout from './Layout';
import FeaturedWithSide from "./components/FeaturedWithSide";
import SpecialProductsSection from "./components/SpecialProductsSection";
import "./index.css";
import { products } from "./components/Product2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <div className="p-4">
            <FeaturedWithSide
            featuredItems={products.slice(0, 1)}
            sideItems={products.slice(1, 5)}
            />
            <SpecialProductsSection products={products.slice(5)} />
          </div>
        </Layout>
        <Routes>
          {/* I commented Button component which was implanted as an instant
          <Button>کلیک</Button> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
