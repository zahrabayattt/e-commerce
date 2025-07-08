import React from 'react';
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

const ProductForm: React.FC = () => {
  const { productForm, setProductForm, resetProductForm } = useProductStore();
  const [brand, setBrand] = React.useState('');
  const [purchasableCount, setPurchasableCount] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = React.useState('');

  const { data: categories = [] } = useGetCategories();
  const { mutateAsync: uploadImage } = useUploadImage();
  const { mutate: createProduct, status } = useCreateProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductForm(
      name as keyof CreateProductPayload,
      name === 'price' || name === 'quantity' ? Number(value) : value
    );
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      try {
        const { image } = await uploadImage({ image: selectedFile });
        setUploadedImageUrl(image);
        setProductForm('image', image);
      } catch (err) {
        console.error('خطا در آپلود تصویر', err);
      }
    }
  };

  const handleCategoryChange = (value: string) => {
    setProductForm('category', value);
  };

  const handleStockChange = (value: string) => {
    setProductForm('quantity', Number(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: CreateProductPayload = {
      ...productForm,
    };
    createProduct(payload, {
      onSuccess: () => {
        resetProductForm();
        setBrand('');
        setPurchasableCount('');
        setFile(null);
        setUploadedImageUrl('');
      },
    });
  };
  const baseUrl = 'https://qbc9.liara.run/uploads/';

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-bold mb-4 text-right">محصول جدید</h2>

        <div className="w-full mb-6">
          {uploadedImageUrl && (
            <img
              src={baseUrl + uploadedImageUrl}
              alt="Uploaded"
              className="mb-2 h-32 object-contain mx-auto"
            />
          )}
          <label
            htmlFor="product-image"
            className="bg-white w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-md h-24 flex items-center justify-center text-gray-500"
          >
            آپلود عکس
          </label>
          <input id="product-image" type="file" className="hidden" onChange={handleFileChange} />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm">نام</label>
            <input
              type="text"
              name="name"
              placeholder="نام محصول"
              className="bg-white w-full border border-gray-300 rounded px-3 py-2"
              value={productForm.name}
              onChange={handleChange}
            />
          </div>

          <div className="md:flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm">قیمت</label>
              <input
                name="price"
                placeholder="قیمت محصول"
                className="bg-white w-full border border-gray-300 rounded px-3 py-2"
                value={productForm.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm">برند</label>
              <input
                type="text"
                placeholder="برند محصول"
                className="bg-white w-full border border-gray-300 rounded px-3 py-2"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">توضیحات</label>
            <textarea
              name="description"
              placeholder="توضیحات محصول"
              rows={4}
              className="bg-white w-full border border-gray-300 rounded px-3 py-2 resize-none"
              value={productForm.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">دسته‌بندی</label>
            <div className="flex items-center gap-2">
              <Select onValueChange={handleCategoryChange} value={productForm.category}>
                <SelectTrigger className="w-full text-right h-12 bg-white" dir="rtl">
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
              <Button variant="outline" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="md:flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm">تعداد قابل خرید</label>
              <input
                type="number"
                placeholder="تعداد قابل خرید"
                className="bg-white w-full border border-gray-300 rounded px-3 py-2"
                value={purchasableCount}
                onChange={(e) => setPurchasableCount(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm">موجودی</label>
              <Select value={productForm.quantity.toString()} onValueChange={handleStockChange}>
                <SelectTrigger className="w-full text-right h-12 bg-white" dir="rtl">
                  <SelectValue placeholder="انتخاب موجودی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" disabled={status === 'pending'}>
              {status === 'pending' ? 'در حال ساخت...' : 'ساخت محصول جدید'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
