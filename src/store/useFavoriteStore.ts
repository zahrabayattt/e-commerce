import { create } from 'zustand';
import type { Product } from "@/components/ProductsForShow";



type FavoriteStoreType = {
    favorites : Product[];
    addFavorite :(product:Product)=>void;
    removeFavorite :(id:string)=>void;
    isFavorite :(id:string)=>boolean;
};


const useFavoriteStore= create <FavoriteStoreType>()((set,get)=>({
    favorites:[],
    addFavorite:(product)=>{
        const exists = get().favorites.find((p)=>p.id===product.id);
        if(!exists){
            set((state)=>({
                favorites:[...state.favorites,product],
            }));
        }
    },
    removeFavorite:(id)=>{
        set((state)=>({favorites:state.favorites.filter((p)=>p.id!==id),}))
    },
    isFavorite:(id)=>{
        return get().favorites.some((p)=>p.id===id)
    }
}));

export default useFavoriteStore;
   