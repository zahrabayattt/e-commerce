import { Button } from "./components/ui/button";
import ProductCard from "./components/ui/productCard";

function App() {
  return (
    <>
      <Button>کلیک</Button>
      <ProductCard
        productId={2}
        productTitle="ژل شست و شو مناسب پوست چرب و مختلط"
        productImage={'./src/assets/images/auth-light.png'}
        price={500000}
        componentSize="small"
      />
      <ProductCard
        productId={2}
        productTitle="ژل شست و شو مناسب پوست چرب"
        productImage={'./src/assets/images/auth-light.png'}
        price={500000}
        componentSize="large"
      />
    </>
  );
}

export default App;
