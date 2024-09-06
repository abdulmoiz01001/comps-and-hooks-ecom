import { useState } from 'react';
import axios from 'axios';

interface UpdateCartQuantityResponse {
  success: boolean;
  message: string;
  cart: any; // Adjust this to your cart data structure
}

interface UseUpdateCartQuantityReturn {
  updateCartQuantity: (productId: string, quantity: number) => Promise<UpdateCartQuantityResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useUpdateCartQuantity = (): UseUpdateCartQuantityReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateCartQuantity = async (productId: string, quantity: number): Promise<UpdateCartQuantityResponse | undefined> => {
    setLoading(true);
    try {
      const response = await axios.post<UpdateCartQuantityResponse>('/api/cart/update', { productId, quantity });
      return response.data;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { updateCartQuantity, loading, error };
};

export default useUpdateCartQuantity;
