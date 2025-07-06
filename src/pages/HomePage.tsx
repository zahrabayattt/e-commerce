import ProductRow from "../components/ProductRow";
import ProductCarousel from "../components/ProductCarousel";
import SpecialProductsSection from "../components/SpecialProductsSection";

export default function HomePage() {
  return (
    <main className="container mx-auto p-2">
      <div className="flex justify-between">
      <ProductRow />
      <ProductCarousel />
      </div>
      {<SpecialProductsSection />}
    </main>
  );
}
