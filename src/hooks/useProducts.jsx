import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async (item) => {
  const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${item}`);
  return data.recipes;
};

export const useProducts = (items) => {
  return useQuery({
    queryKey: ['products', items],
    queryFn: async () => {
      const allProducts = [];
      for (const item of items) {
        const products = await fetchProducts(item);
        allProducts.push(...products);
      }
      return allProducts;
    },
    retry: 100, // Retry once on failure
    refetchOnWindowFocus: true, // Optional: Refetch data when window regains focus
  });
};
