import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import ShopCard from "./ShopCard";
import Navbar from "./Navbar";



const ShopPage = () => {

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [tempPrice, setTempPrice] = useState('');


  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
        prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchPrice = maxPrice === null || product.price <= maxPrice;
    return matchBrand && matchPrice;
  });

const brands = Array.from(new Set(products.map((p) => p.brand)));
  return (
     <div className="flex ">
       <div className="fixed">
        <Navbar/>
       </div>
        <div className=" bg-gray-100  p-3 flex flex-col mt-8  max-w-2xs  items-center h-[600px] mr-60 ">
            <div className="shadow-xs border-gray-200 bg-white rounded-2xl 
            w-[250px] text-center py-2 justify-center items-center  ">
                <h2  >فیلتر برند</h2>
            </div>

            {brands.map((brand) => (
            <div
              key={brand}
              className="flex  items-center justify-start gap-2 w-full pr-2 mb-2 mt-3 "
            >
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
                className="border border-gray-500 rounded-full cursor-pointer "
              />
              <span className="text-sm ">{brand}</span>
            </div>
            ))}

            <div className="shadow-xs border-gray-200 bg-white rounded-2xl
             w-[250px] text-center py-2 justify-center items-center ">
                <h2> فیلتر قیمت </h2>
            </div>
                <Input
                 className="mt-5 max-w-52 py-6 bg-white"
                 
                 value={tempPrice}
                  onChange={e => {
                    const value = e.target.value;
                    setTempPrice(value);
                    setMaxPrice(value ? parseInt(value) : null);
                  }}
                 placeholder="قیمت را وارد نمایید" />

                <Button  variant="outline" className="mt-5 w-52 bg-gray-100 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                    setSelectedBrands([]);
                    setMaxPrice(null);
                    setTempPrice('');

                }}>حذف فیلتر ها</Button>
              
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mr-10 mt-2">
               {filteredProducts.slice(0, 10).map(product => (
                    <ShopCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        brand={product.brand}
                        description={product.description}
                    />
                ))}
        </div> 
     </div>   
    
  )
}

export default ShopPage