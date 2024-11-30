import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setSortOrder } from '../store/productSlice';

const SortControls: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <select
        onChange={(e) => dispatch(setSortBy(e.target.value as 'price' | 'rating' | null))}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <select
        onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortControls;