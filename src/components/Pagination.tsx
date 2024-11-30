import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentPage } from '../store/productSlice';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredProducts, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.products
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="flex justify-center gap-2">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => dispatch(setCurrentPage(index + 1))}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;