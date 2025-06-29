import { create } from 'zustand';

type AuthStoreType = {
  id: string | null;
  setId: (id: string) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  reset: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  id: localStorage.getItem('id'),
  setId: (id: string) => {
    set({ id });
    localStorage.setItem('id', id);
  },
  isAdmin: localStorage.getItem('isAdmin') === 'true' ? true : false,
  setIsAdmin: (isAdmin: boolean) => {
    set({ isAdmin });
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  },
  reset: () => {
    set({ id: null, isAdmin: false });
    localStorage.removeItem('id');
    localStorage.removeItem('isAdmin');
  },
}));

export default useAuthStore;
