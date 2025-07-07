import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProductModel } from '@/types/product.model';
import useAuthStore from './use-auth-store';
type FavoriteStoreType = {
  favorites: Record<string, ProductModel[]>;
  addFavorite: (product: ProductModel) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getUserFavorites: () => ProductModel[];
};

const useFavoriteStore = create<FavoriteStoreType>()(
  persist(
    (set, get) => ({
      favorites: {},

      addFavorite: (product) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        const current = get().favorites[userId] ?? [];
        const exists = current.find((p: ProductModel) => p._id === product._id);
        if (!exists) {
          set((state) => ({
            favorites: {
              ...state.favorites,
              [userId]: [...current, product],
            },
          }));
        }
      },

      removeFavorite: (id) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        const current = get().favorites[userId] ?? [];
        set((state) => ({
          favorites: {
            ...state.favorites,
            [userId]: current.filter((p: ProductModel) => p._id !== id),
          },
        }));
      },

      isFavorite: (id) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return false;
        const current = get().favorites[userId] ?? [];
        return current.some((p: ProductModel) => p._id === id);
      },

      getUserFavorites: () => {
        const userId = useAuthStore.getState().id;
        if (!userId) return [];
        return get().favorites[userId] ?? [];
      },
    }),
    {
      name: 'favorite-storage',
    }
  )
);

export default useFavoriteStore;
