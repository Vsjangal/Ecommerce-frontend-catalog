import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchProducts } from './store/productSlice';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import Pagination from './components/Pagination';
import ThemeToggle from './components/ThemeToggle';
import { Loader2, PackageSearch } from 'lucide-react';
import { useProductFilters } from './hooks/useProductFilters';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, searchTerm, sortBy, sortOrder, currentPage, itemsPerPage } = 
    useSelector((state: RootState) => state.products);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const filteredProducts = useProductFilters(products, searchTerm, sortBy, sortOrder);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <Loader2 className="animate-spin text-gray-900 dark:text-gray-100" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <SearchBar />
            <ThemeToggle />
          </div>
          <SortControls />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <PackageSearch className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No items found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              We couldn't find any items matching "{searchTerm}". 
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {getCurrentPageProducts().map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

export default App;