import React, { useState } from 'react';
import ProductForm from '@/components/ProductForm';
import { useProductStore } from '@/store/use-create-product-store';
import useGetCategories from '@/hooks/use-get-categories';
import useUploadImage from '@/hooks/use-upload-image';
import useCreateProduct from '@/hooks/use-create-product';
import type { CreateProductPayload } from '@/types/product.model';
import toast from 'react-hot-toast';

const CreateProduct: React.FC = () => {
  const { productForm, setProductForm, resetProductForm } = useProductStore();
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const { data: categories = [] } = useGetCategories();
  const { mutateAsync: uploadImage } = useUploadImage();
  const { mutate: createProduct, status } = useCreateProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const correctedValue = ['price', 'quantity'].includes(name) ? Number(value) : value;
    setProductForm(name as keyof CreateProductPayload, correctedValue);
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
    const { name, description, price, quantity, category, image } = productForm;

    if (!name || !description || !price || !quantity || !category || !image) {
      toast.error('لطفاً همه فیلدها را کامل پر کنید.');
      return;
    }
    createProduct(productForm);
    resetProductForm();
  };

  return (
    <ProductForm
      formData={productForm}
      uploadedImageUrl={uploadedImageUrl}
      status={status}
      categories={categories}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onCategoryChange={(val) => setProductForm('category', val)}
      onQuantityChange={(val) => setProductForm('quantity', Number(val))}
      onSubmit={handleSubmit}
      formType="Create"
    />
  );
};

export default CreateProduct;
