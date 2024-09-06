import { useState } from 'react';
import axios from 'axios';

interface AddToCartResponse {
  success: boolean;
  message: string;
  cart: any; // Adjust this to your cart data structure
}

interface UseAddToCartReturn {
  addToCart: (productId: string, quantity: number) => Promise<AddToCartResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useAddToCart = (): UseAddToCartReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addToCart = async (productId: string, quantity: number): Promise<AddToCartResponse | undefined> => {
    setLoading(true);
    try {
      const response = await axios.post<AddToCartResponse>('/api/cart/add', { productId, quantity });
      return response.data;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading, error };
};

export default useAddToCart;
