import { useMemo } from 'react';
import { Product } from '../types/product';

export const useProductFilters = (
  products: Product[],
  searchTerm: string,
  sortBy: 'price' | 'rating' | null,
  sortOrder: 'asc' | 'desc'
) => {
  return useMemo(() => {
    let filtered = [...products];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortBy) {
      filtered.sort((a, b) => {
        const valueA = sortBy === 'price' ? a.price : a.rating.rate;
        const valueB = sortBy === 'price' ? b.price : b.rating.rate;
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      });
    }

    return filtered;
  }, [products, searchTerm, sortBy, sortOrder]);
};