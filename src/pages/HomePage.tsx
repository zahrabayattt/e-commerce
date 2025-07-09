import ProductRow from "../components/ProductRow";
import ProductCarousel from "../components/ProductCarousel";
import SpecialProductsSection from "../components/SpecialProductsSection";

export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-col">
      <div className="flex justify-around items-center">
      <ProductRow />
      <ProductCarousel />
      </div>
      {<SpecialProductsSection />}
    </main>
  );
}
