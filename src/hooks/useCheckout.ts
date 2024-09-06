import { useState } from 'react';
import axios from 'axios';

interface CheckoutResponse {
  success: boolean;
  message: string;
  order: any; // Adjust this to your order data structure
}

interface OrderDetails {
  items: { productId: string; quantity: number }[];
  paymentMethod: string;
  shippingAddress: string;
  // Add more fields as needed
}

interface UseCheckoutReturn {
  checkout: (orderDetails: OrderDetails) => Promise<CheckoutResponse | undefined>;
  loading: boolean;
  error: string | null;
}

const useCheckout = (): UseCheckoutReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async (orderDetails: OrderDetails): Promise<CheckoutResponse | undefined> => {
    setLoading(true);
    try {
      const response = await axios.post<CheckoutResponse>('/api/checkout', orderDetails);
      return response.data;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { checkout, loading, error };
};

export default useCheckout;
