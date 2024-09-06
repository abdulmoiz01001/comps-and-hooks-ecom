

// types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  // Add more fields as needed
}

export interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}
export const fetchProductSlice = (set: any): ProductState => ({
  products: [],
  setProducts: (products) => set({ products }),
});
