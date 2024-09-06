import { useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await axios.get<FetchCartResponse>('/api/cart');
        setCart(response.data.cart);
      } catch (err) {
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
