import { useState } from 'react';
import axios from 'axios';
import { REMOVE_ADD_TO_CART_ROUTE } from '../utils/constants';
import { apiClient } from '../libs/apiClient';
import  useShowToast  from './useShowToast';

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
  const { useToast } : any = useShowToast();

  const removeFromCart = async (productId: string): Promise<RemoveFromCartResponse | undefined> => {
    setLoading(true);
    try {
      const response = await apiClient.post<RemoveFromCartResponse>(REMOVE_ADD_TO_CART_ROUTE, { productId });
      useToast({
        title: 'Cart is removed successfully.',
        description: "We've loaded your cart",
        status: 'success',
      })
      return response.data;
    } catch (err) {
      useToast({
        title: 'An error occurred.',
        description: (err as Error).message,
        status: 'error',
      })
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { removeFromCart, loading, error };
};

export default useRemoveCart;
