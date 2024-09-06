import { useState } from 'react';
import axios from 'axios';
import  useShowToast  from './useShowToast';
import { apiClient } from '../libs/apiClient';
import { ADD_TO_CART_ROUTE } from '../utils/constants';

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
  const { showToast } : any = useShowToast();

  const addToCart = async (productId: string, quantity: number): Promise<AddToCartResponse | undefined> => {
   
    setLoading(true);
    try {
      const response = await apiClient.post<AddToCartResponse>(ADD_TO_CART_ROUTE, { productId, quantity });
     showToast({
        title: 'Product is saved in a Cart.',
        description: "We've added the product to your cart",
        status: 'success',
      })
      return response.data;
    } catch (err) {
      showToast({
        title: 'An error occurred.',
        description: (err as Error).message,
        status: 'error',
      })
      setError((err as Error).message);
    } finally {
      setLoading(false);
      
    }
  };

  return { addToCart, loading, error };
};

export default useAddToCart;
