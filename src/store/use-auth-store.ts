import { create } from 'zustand';

type AuthStoreType = {
  id: string | null;
  setId: (id: string) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  username: string | null;
  setUserName: (username: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
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
  username: localStorage.getItem('username'),
  setUserName: (username: string) => {
    set({ username });
    localStorage.setItem('username', username);
  },
  email: localStorage.getItem('email'),
  setEmail: (email: string) => {
    set({ email });
    localStorage.setItem('email', email);
  },
  reset: () => {
    set({ id: null, isAdmin: false });
    localStorage.removeItem('id');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  },
}));

export default useAuthStore;
