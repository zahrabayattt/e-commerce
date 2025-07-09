import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { useProductStore } from '@/store/use-create-product-store';
import useGetCategories from '@/hooks/use-get-categories';
import useUploadImage from '@/hooks/use-upload-image';
import useCreateProduct from '@/hooks/use-create-product';
import type { CategoryResponseModel } from '@/types/category.model';
import type { CreateProductPayload } from '@/types/product.model';
import { Input } from './ui/input';

const ProductForm: React.FC = () => {
  const { productForm, setProductForm } = useProductStore();
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const { data: categories = [] } = useGetCategories();
  const { mutateAsync: uploadImage } = useUploadImage();
  const { mutate: createProduct, status } = useCreateProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const Correctvalue = ['price', 'quantity'].includes(name) ? Number(value) : value;
    setProductForm(name as keyof CreateProductPayload, Correctvalue);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { image } = await uploadImage({ image: file });
    setUploadedImageUrl(image);
    setProductForm('image', image);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProduct(productForm);
  };

  const baseUrl = 'https://qbc9.liara.run/uploads/';

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-bold mb-4">محصول جدید</h2>

        <div className="w-full mb-6">
          {uploadedImageUrl && (
            <img
              src={baseUrl + uploadedImageUrl}
              alt="Uploaded"
              className="mb-4 h-1/3 w-2/3 rounded-lg object-cover object-center shadow-lg mx-auto"
            />
          )}
          <label
            htmlFor="product-image"
            className="bg-white w-full cursor-pointer border-1 border-dashed border-gray-200 rounded-lg h-24 flex items-center justify-center text-gray-500 text-md"
          >
            آپلود عکس
          </label>
          <Input id="product-image" type="file" className="hidden" onChange={handleFileChange} />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-lg">نام</label>
            <Input
              type="text"
              name="name"
              placeholder="نام محصول"
              className='py-6 text-md'
              value={productForm.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-md">قیمت</label>
            <Input
              name="price"
              placeholder="قیمت محصول"
              className='py-6 text-md'
              value={productForm.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-md">توضیحات</label>
            <textarea
              name="description"
              placeholder="توضیحات محصول"
              rows={4}
              className="bg-white w-full border border-gray-200 rounded-md px-3 py-6"
              value={productForm.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-md">دسته‌بندی</label>
            <div className="flex items-center gap-2">
              <Select
                onValueChange={(value) => setProductForm('category', value)}
                value={productForm.category}
              >
                <SelectTrigger className="w-full text-right text-md h-14 py-6 bg-white" dir="rtl">
                  <SelectValue placeholder="انتخاب دسته‌بندی" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat: CategoryResponseModel) => (
                    <SelectItem key={cat._id} value={cat._id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className='py-6 px-6'>
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-md">موجودی</label>
            <Select
              value={productForm.quantity.toString()}
              onValueChange={(value) => setProductForm('quantity', Number(value))}
            >
              <SelectTrigger className="w-full text-right text-md py-6 h-12 bg-white" dir="rtl">
                <SelectValue placeholder="انتخاب موجودی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-8">
            <Button type="submit" className='text-md py-6' disabled={status === 'pending'}>
              {status === 'pending' ? 'در حال ساخت...' : 'ساخت محصول جدید'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
