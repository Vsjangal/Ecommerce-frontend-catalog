import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] group overflow-hidden">
        <div className="absolute inset-0 bg-transparent dark:bg-gray-700 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/10 dark:to-gray-800/10" />
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply dark:mix-blend-normal dark:opacity-90 dark:contrast-125 dark:brightness-90"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold line-clamp-2 mb-3 text-gray-900 dark:text-gray-100 flex-grow">
          {product.title}
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {renderStars(product.rating.rate)}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ({product.rating.count})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);