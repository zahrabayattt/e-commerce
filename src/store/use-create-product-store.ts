import { create } from 'zustand';
import type { CreateProductPayload, ProductResponseModel } from '@/types/product.model';

interface IProductState {
  productForm: CreateProductPayload;
  selectedProduct: ProductResponseModel | null;
  setProductForm: (name: keyof CreateProductPayload, value: string | number) => void;
  setSelectedProduct: (product: ProductResponseModel) => void;
  resetProductForm: () => void;
}

export const useProductStore = create<IProductState>()((set) => ({
  productForm: {
    name: '',
    description: '',
    price: 0,
    category: '',
    quantity: 0,
    image: '',
  },
  selectedProduct: null,

  setProductForm: (name, value) =>
    set((state) => ({
      productForm: {
        ...state.productForm,
        [name]: value,
      },
    })),

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  resetProductForm: () =>
    set({
      productForm: {
        name: '',
        description: '',
        price: 0,
        category: '',
        quantity: 0,
        image: '',
      },
      selectedProduct: null,
    }),
}));
