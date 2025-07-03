import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ShopCard from '../components/ShopCard';
import { products, type Product } from '@/components/ProductsForShow';

const ShopPage = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [tempPrice, setTempPrice] = useState('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchPrice = maxPrice === null || parseInt(product.price.replace(/,/g, '')) <= maxPrice;
    return matchBrand && matchPrice;
  });

  const brands = Array.from(new Set(products.map((p) => p.brand)));
  return (
    <div className="flex ">
      
      <div className=" bg-gray-200 min-w-[230px] h-[600px] px-6 py-6 flex flex-col mt-2 mr-4 rounded-xl ">
        <div
          className="bg-white rounded-3xl text-sm text-center py-2 mb-4 shadow "
        >
          <h2>فیلتر برند</h2>
        </div>

        {brands.map((brand) => (
          <div
            key={brand}
            className="flex  items-center justify-start gap-1 w-full pr-2 mb-2 mt-2   "
          >
            <Checkbox
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandChange(brand)}
              className="border border-gray-400 rounded-full cursor-pointer bg-white "
            />
            <span className="text-sm ">{brand}</span>
          </div>
        ))}

        <div
          className="bg-white rounded-3xl text-sm text-center py-2 shadow mt-4 "
        >
          <h2> فیلتر قیمت </h2>
        </div>
        <Input
          className="mt-5 bg-white placeholder:text-[12px] "
          value={tempPrice}
          onChange={(e) => {
            const value = e.target.value;
            setTempPrice(value);
            setMaxPrice(value ? parseInt(value) : null);
          }}
          placeholder="قیمت را وارد نمایید"
        />

        <Button
          variant="outline"
          className="mt-5 w-full text-sm bg-gray-100 hover:bg-gray-300"
          onClick={() => {
            setSelectedBrands([]);
            setMaxPrice(null);
            setTempPrice('');
          }}
        >
          حذف فیلتر ها
        </Button>
      </div>
      <div className=" grid grid-cols-3 gap-6 mt-2  mr-14 ml-10">
        {filteredProducts.slice(0, 10).map((product) => (
          <ShopCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
