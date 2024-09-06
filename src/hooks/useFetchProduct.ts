import { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_PRODUCTS_ROUTE } from '../utils/constants';
import  useShowToast  from './useShowToast';
import { useStore } from '../store/store';
import { apiClient } from '../libs/apiClient';

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  // Add more fields as needed
}

interface FetchCartResponse {
  cart: CartItem[];
}

interface UseFetchCartReturn {
  products: CartItem[];
  loading: boolean;
  error: string | null;
}

const useFetchCart = (): UseFetchCartReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { products, setProducts }: any = useStore(); // Zustand store
  const { showToast } : any = useShowToast();

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        if (products.length > 0) return; // If carts already exist, no need to fetch
        const response = await apiClient.get<FetchCartResponse>(GET_PRODUCTS_ROUTE);

        // Show success toast notification
        showToast({
            title: 'Products is loaded successfully.',
            description: "We've loaded your cart",
            status: 'success',
          })

        // Update the Zustand store and local state
        setProducts(response.data.cart);
      } catch (err) {
        // Show error toast notification
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

    fetchCart();
  }, [products, setProducts, showToast]); // Add dependencies

  return { products: products, loading, error };
};

export default useFetchCart;
