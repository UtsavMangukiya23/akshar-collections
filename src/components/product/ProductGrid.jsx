import ProductCard from './ProductCard';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

export default function ProductGrid({ products, gridCols = 4 }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-maroon-50 flex items-center justify-center">
          <FiSearch className="text-maroon-300" size={32} />
        </div>
        <h3 className="text-xl font-display font-semibold text-charcoal mb-2">No Products Found</h3>
        <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
          We couldn't find any products matching your filters. Try adjusting your criteria or browse all collections.
        </p>
        <button
          onClick={() => window.location.href = '/shop'}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-maroon-800 text-white text-sm font-medium rounded-lg hover:bg-maroon-900 transition-colors"
        >
          <FiShoppingBag size={14} />
          Browse All Products
        </button>
      </div>
    );
  }

  const gridClass = gridCols === 3
    ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6'
    : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6';

  return (
    <div className={gridClass}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: `${Math.min(index * 50, 400)}ms`, animationFillMode: 'both' }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
