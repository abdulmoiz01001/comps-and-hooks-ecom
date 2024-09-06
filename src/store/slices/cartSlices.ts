// types.ts
// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   // Add more fields as needed
// }

export interface CartState {
    carts: any[];
    setCarts: (carts: any[]) => void;
  }
  export const fetchCartSlice = (set: any): CartState => ({
    carts: [],
    setCarts: (carts) => set({ carts }),
  });