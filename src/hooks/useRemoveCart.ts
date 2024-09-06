import { useState } from 'react';
import axios from 'axios';

interface RemoveFromCartResponse {
  success: boolean;
  message: string;
  cart: any; // Adjust this to your cart data structure
}

interface UseRemoveCartReturn {
  removeFromCart: (productId: string) => Promise<RemoveFromCartResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useRemoveCart = (): UseRemoveCartReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removeFromCart = async (productId: string): Promise<RemoveFromCartResponse | undefined> => {
    setLoading(true);
    try {
      const response = await axios.post<RemoveFromCartResponse>('/api/cart/remove', { productId });
      return response.data;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { removeFromCart, loading, error };
};

export default useRemoveCart;
