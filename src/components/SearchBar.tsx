import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;