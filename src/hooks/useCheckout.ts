import { useState } from 'react';
import axios from 'axios';
import { PRODUCT_CHECKOUT_ROUTE } from '../utils/constants';
import  useShowToast  from './useShowToast';
import { apiClient } from '../libs/apiClient';

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

  const { showToast } : any = useShowToast();

  const checkout = async (orderDetails: OrderDetails): Promise<CheckoutResponse | undefined> => {
    setLoading(true);
    try {
      const response = await apiClient.post<CheckoutResponse>(PRODUCT_CHECKOUT_ROUTE, orderDetails);
      showToast({
        title: 'Order is placed successfully.',
        description: "We've received your order",
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

  return { checkout, loading, error };
};

export default useCheckout;
