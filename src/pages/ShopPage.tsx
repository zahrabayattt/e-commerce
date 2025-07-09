import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ShopCard from '../components/ShopCard';
import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/use-Products';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [tempPrice, setTempPrice] = useState('');

  

const { data, isLoading, isError } = useQuery({
  queryKey: ['products'],
  queryFn: useProducts,
});



  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطا در دریافت محصولات</p>;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter((b) => b !== category) : [...prev, category]
    );
  };

  const filteredProducts = data?.filter((product) => {
    const matchCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category._id);
    const matchPrice = maxPrice === null || product.price <= maxPrice;
    return matchCategory && matchPrice;
  });

  const categories: { _id: string; name: string }[] = [];
  data?.forEach((p) => {
  if (!categories.some(c => c.name === p.category.name)) {
    categories.push(p.category);
  }
  });


  return (
    <div className="flex ">
      
      <div className=" bg-gray-200 min-w-[230px] h-[600px] px-6 py-6 flex flex-col mt-2 mr-4 rounded-xl ">
        <div
          className="bg-white rounded-3xl text-sm text-center py-2 mb-4 shadow "
        >
          <h2>فیلتر برند</h2>
        </div>

        {categories.map((category) => (
          <div
            key={category._id}
            className="flex  items-center justify-start gap-1 w-full pr-2 mb-2 mt-2   "
          >
            <Checkbox
              checked={selectedCategory.includes(category._id)}
              onCheckedChange={() => handleCategoryChange(category._id)}
              className="border border-gray-400 rounded-full cursor-pointer bg-white "
            />
            <span className="text-sm ">{category.name}</span>
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
            setSelectedCategory([]);
            setMaxPrice(null);
            setTempPrice('');
          }}
        >
          حذف فیلتر ها
        </Button>
      </div>
      <div className=" grid grid-cols-3 gap-6 mt-2  mr-14 ml-10">
        {(filteredProducts??[]).slice(0, 10).map((product) => (
          <ShopCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ShopPage;
