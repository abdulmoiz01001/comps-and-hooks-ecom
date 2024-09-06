import { useProductStore } from './useProductStore'; // Adjust the path according to your folder structure
import axios from 'axios';
import { useEffect , useState } from 'react';

interface Product {
  // Define the properties of the Product type here
}

interface UseSetProductInStoreReturn {
  loading: boolean;
  error: string | null;
}

const useSetProductInStore = (): UseSetProductInStoreReturn => {
  const { setProducts } = useProductStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Product[]>('/api/products'); // Adjust the endpoint to your API
        setProducts(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return { loading, error };
};

export default useSetProductInStore;
