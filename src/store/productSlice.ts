import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductState } from '../types/product';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
  }
);

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchTerm: '',
  sortBy: null,
  sortOrder: 'asc',
  currentPage: 1,
  itemsPerPage: 8
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.currentPage = 1;
    },
    setSortBy: (state, action: PayloadAction<'price' | 'rating' | null>) => {
      state.sortBy = action.payload;
      if (action.payload) {
        state.filteredProducts.sort((a, b) => {
          const valueA = action.payload === 'price' ? a.price : a.rating.rate;
          const valueB = action.payload === 'price' ? b.price : b.rating.rate;
          return state.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        });
      }
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
      if (state.sortBy) {
        state.filteredProducts.reverse();
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setSearchTerm, setSortBy, setSortOrder, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;