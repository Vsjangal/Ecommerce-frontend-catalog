export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortBy: 'price' | 'rating' | null;
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
}