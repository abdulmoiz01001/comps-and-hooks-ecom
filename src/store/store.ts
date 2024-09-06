import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchProductSlice } from './slices/productSlices';
import { fetchCartSlice } from './slices/cartSlices';
import { fetchUserSlice } from './slices/userSlices';

export const useStore = create(
  devtools((set, get) => ({
   ...fetchProductSlice(set),
   ...fetchCartSlice(set),
   ...fetchUserSlice(set),

  }))
);
export default useStore;
