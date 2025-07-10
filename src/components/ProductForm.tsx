import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Plus } from 'lucide-react';
import type { CategoryResponseModel } from '@/types/category.model';
import type { CreateProductPayload } from '@/types/product.model';
import { useNavigate } from 'react-router-dom';

interface ProductFormProps {
  formData: CreateProductPayload;
  uploadedImageUrl?: string;
  status: 'idle' | 'pending' | 'success' | 'error';
  categories: CategoryResponseModel[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  formType: 'Create' | 'Edit';
}

const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  uploadedImageUrl,
  status,
  categories,
  onChange,
  onFileChange,
  onCategoryChange,
  onQuantityChange,
  onSubmit,
  formType,
}) => {
  const navigate = useNavigate();
  const baseUrl = 'https://qbc9.liara.run/uploads/';

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-lg font-bold mb-4">
          {formType === 'Create' ? 'محصول جدید' : 'ویرایش محصول'}
        </h2>

        <div className="w-full mb-6">
          {(uploadedImageUrl || formData.image) && (
            <img
              src={baseUrl + (uploadedImageUrl || formData.image)}
              alt="Uploaded"
              className="mb-4 h-96 w-full max-w-md rounded-lg object-cover shadow-lg mx-auto"
            />
          )}

          <label
            htmlFor="product-image"
            className="bg-white dark:bg-neutral-800 w-full cursor-pointer border-1 border-dashed border-gray-200 rounded-lg h-24 flex items-center justify-center text-gray-500 text-md"
          >
            آپلود عکس
          </label>
          <Input id="product-image" type="file" className="hidden " onChange={onFileChange} />
        </div>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <label className="block mb-1 text-lg">نام</label>
            <Input
              type="text"
              name="name"
              placeholder="نام محصول"
              className="py-6 text-md dark:bg-neutral-800"
              value={formData.name}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-md">قیمت</label>
            <Input
              name="price"
              placeholder="قیمت محصول "
              className="py-6 text-md dark:bg-neutral-800"
              value={formData.price}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="block mb-1 text-md">توضیحات</label>
            <textarea
              name="description"
              placeholder="توضیحات محصول"
              rows={4}
              className="bg-white w-full border border-gray-200 rounded-md px-3 py-6 dark:bg-neutral-800"
              value={formData.description}
              onChange={onChange}
            />
          </div>

          <div className="flex items-center gap-2">
            <Select onValueChange={onCategoryChange} value={formData.category}>
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
            <Button
              className="py-6 px-6 cursor-pointer"
              type="button"
              variant="outline"
              size="icon"
              onClick={() => {
                navigate('/category');
              }}
            >
              <Plus className="w-6 h-6" />
            </Button>
          </div>

          <div>
            <label className="block mb-1 text-md">موجودی</label>
            <Select value={formData.quantity.toString()} onValueChange={onQuantityChange}>
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
            <Button type="submit" className="text-md py-6" disabled={status === 'pending'}>
              {formType === 'Create'
                ? status === 'pending'
                  ? 'در حال ساخت...'
                  : 'ساخت محصول جدید'
                : status === 'pending'
                  ? 'در حال ویرایش...'
                  : 'ویرایش محصول'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
