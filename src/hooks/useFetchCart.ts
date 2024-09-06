import { useState, useEffect } from 'react';
import axios from 'axios';
import { CART_ROUTES } from '../utils/constants';
import  useShowToast  from './useShowToast';
import {  useStore } from '../store/store'
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
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}

const useFetchCart = (): UseFetchCartReturn => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setCarts ,carts } : any = useStore()

  const { showToast } : any = useShowToast();

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        if (carts.length > 0) return;
        const response = await apiClient.get<FetchCartResponse>(CART_ROUTES);
        showToast({
          title: 'Cart is loaded successfully.',
          description: "We've loaded your cart",
          status: 'success',
        })
        setCarts(response.data.cart)
        setCart(response.data.cart);
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

    fetchCart();
  }, []);

  return { cart, loading, error };
};

export default useFetchCart;
