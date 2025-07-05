import { create } from 'zustand';
import type { ProductModel } from '@/types/product.model';



type FavoriteStoreType = {
    favorites : ProductModel[];
    addFavorite :(product:ProductModel)=>void;
    removeFavorite :(id:string)=>void;
    isFavorite :(id:string)=>boolean;
};


const useFavoriteStore= create <FavoriteStoreType>()((set,get)=>({
    favorites:[],
    addFavorite:(product)=>{
        const exists = get().favorites.find((p)=>p._id===product._id);
        if(!exists){
            set((state)=>({
                favorites:[...state.favorites,product],
            }));
        }
    },
    removeFavorite:(id)=>{
        set((state)=>({favorites:state.favorites.filter((p)=>p._id!==id),}))
    },
    isFavorite:(id)=>{
        return get().favorites.some((p)=>p._id===id)
    }
}));

export default useFavoriteStore;
   