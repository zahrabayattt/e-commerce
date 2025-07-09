import ProductForm from '@/components/ProductForm';
import useGetCategories from '@/hooks/use-get-categories';
import useUpdateProduct from '@/hooks/use-update-product';
import useUploadImage from '@/hooks/use-upload-image';
import { useProduct } from '@/hooks/use-Product';
import { useProductStore } from '@/store/use-create-product-store';
import type { CreateProductPayload } from '@/types/product.model';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { productForm, setProductForm, resetProductForm } = useProductStore();
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const { data: categories = [] } = useGetCategories();
  const { mutateAsync: uploadImage } = useUploadImage();
  const { mutate: updateProduct, status } = useUpdateProduct();
  const { id } = useParams();

  const { data: product } = useProduct(id!);

  useEffect(() => {
    if (product) {
      setProductForm('name', product.name);
      setProductForm('price', product.price);
      setProductForm('description', product.description);
      setProductForm('category', product.category);
      setProductForm('quantity', product.quantity);
      setProductForm('image', product.image.split('uploads/')[1]);
      if (product.image) {
        setUploadedImageUrl(product.image.split('uploads/')[1]);
      }
    }
  }, [product]);

  if (!id) return <p className="mx-auto">شناسه معتبر نیست</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const fieldName = name as keyof CreateProductPayload;

    const correctedValue =
      fieldName === 'price' || fieldName === 'quantity' ? Number(value) : value;

    setProductForm(fieldName, correctedValue as CreateProductPayload[typeof fieldName]);
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
    updateProduct({ id, payload: productForm });
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
      formType="Edit"
    />
  );
};

export default EditProduct;
