import useStore from '../store/store';
import { useState, useEffect } from 'react';

interface Product {
  name: string;
  // add other properties here
}

interface UseSearchProductsReturn {
  filteredProducts: Product[];
  query: string;
  setQuery: (query: string) => void;
}

const useSearchProducts = (): UseSearchProductsReturn => {
  const { products } : any = useStore();
  const [query, setQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const matchedProducts = products.filter((product : any) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(matchedProducts);
  }, [query, products]);

  return { filteredProducts, query, setQuery };
};

export default useSearchProducts;

// use Case  const { filteredProducts, query, setQuery } = useSearchProducts();