import create from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  // Add more fields as needed
}

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
