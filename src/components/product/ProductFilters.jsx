import { useState } from 'react';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { categories } from '../../data/products';
import products from '../../data/products';

const allColors = [...new Set(products.flatMap(p => p.colors))].sort();
const allSizes = [...new Set(products.flatMap(p => p.sizes))];

const colorMap = {
  'Maroon': '#7B1E3A', 'Royal Blue': '#2563eb', 'Emerald Green': '#10b981',
  'Deep Red': '#dc2626', 'Purple': '#9333ea', 'Teal': '#14b8a6',
  'Peach': '#fda4af', 'Mint Green': '#86efac', 'Powder Blue': '#93c5fd',
  'Rose Gold': '#e8a598', 'Silver': '#c0c0c0', 'Black': '#111827',
  'Gold': '#D4AF37', 'Navy Blue': '#1e3a5f', 'Champagne': '#f7e7ce',
  'Pink': '#ec4899', 'Red': '#ef4444', 'White': '#ffffff',
  'Wine': '#722f37', 'Dusty Rose': '#d4a5a5', 'Sage Green': '#9caf88',
  'Ivory': '#fffff0', 'Coral': '#ff7f50', 'Magenta': '#ff00ff',
  'Rani Pink': '#e84393', 'Forest Green': '#228b22', 'Rust': '#b7410e',
  'Sky Blue': '#87ceeb', 'Yellow': '#eab308', 'Burgundy': '#800020',
  'Cream': '#fffdd0', 'Olive': '#808000', 'Lavender': '#e6e6fa',
  'Turquoise': '#40e0d0', 'Orange': '#f97316', 'Brown': '#92400e',
  'Beige': '#f5f5dc', 'Grey': '#6b7280', 'Indigo': '#4f46e5',
};

function FilterSection({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 pb-5 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <h3 className="font-semibold text-charcoal text-[13px] uppercase tracking-wider">{title}</h3>
        {isOpen ? <FiChevronUp size={14} className="text-gray-400" /> : <FiChevronDown size={14} className="text-gray-400" />}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  selectedColors = [],
  setSelectedColors = () => {},
  selectedSizes = [],
  setSelectedSizes = () => {},
}) {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'discount', label: 'Biggest Discount' },
  ];

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filterContent = (
    <div className="space-y-5">
      {/* Categories */}
      <FilterSection title="Category">
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between ${
              selectedCategory === 'all'
                ? 'bg-maroon-800 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-charcoal'
            }`}
          >
            <span>All Products</span>
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between ${
                selectedCategory === cat.id
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-charcoal'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
              }`}>{cat.count}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="px-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Min</span>
              <p className="text-sm font-semibold text-charcoal">₹{priceRange[0].toLocaleString()}</p>
            </div>
            <span className="text-gray-300">—</span>
            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Max</span>
              <p className="text-sm font-semibold text-charcoal">₹{priceRange[1].toLocaleString()}</p>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="30000"
            step="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-maroon-800 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {[
            { label: 'Under ₹2K', range: [0, 2000] },
            { label: '₹2K - ₹5K', range: [2000, 5000] },
            { label: '₹5K - ₹15K', range: [5000, 15000] },
            { label: '₹15K+', range: [15000, 30000] },
          ].map(({ label, range }) => (
            <button
              key={label}
              onClick={() => setPriceRange(range)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                priceRange[0] === range[0] && priceRange[1] === range[1]
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Colors">
        <div className="flex flex-wrap gap-2">
          {allColors.map(color => {
            const bg = colorMap[color] || '#9ca3af';
            const isSelected = selectedColors.includes(color);
            return (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                title={color}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  isSelected
                    ? 'border-maroon-800 ring-2 ring-maroon-200 scale-110'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={{ backgroundColor: bg }}
              >
                {isSelected && (
                  <span className="flex items-center justify-center w-full h-full text-white text-[10px] font-bold drop-shadow-md">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Size" defaultOpen={false}>
        <div className="flex flex-wrap gap-2">
          {allSizes.map(size => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-maroon-800 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-maroon-300 hover:text-maroon-800'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* Sort (mobile only) */}
      <div className="lg:hidden">
        <FilterSection title="Sort By">
          <div className="space-y-1">
            {sortOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setSortBy(opt.value)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  sortBy === opt.value
                    ? 'bg-maroon-800 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </FilterSection>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          setSelectedCategory('all');
          setPriceRange([0, 30000]);
          setSortBy('featured');
          setSelectedColors([]);
          setSelectedSizes([]);
        }}
        className="w-full py-2.5 text-sm font-medium text-maroon-800 border border-maroon-200 rounded-lg hover:bg-maroon-50 transition-colors"
      >
        Reset All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[260px] flex-shrink-0">
        <div className="sticky top-28 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-semibold text-charcoal">Filters</h2>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded-md">Refine Results</span>
          </div>
          {filterContent}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <h2 className="font-display text-lg font-semibold text-charcoal">Filters</h2>
                <p className="text-[11px] text-gray-400">Refine your search</p>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="p-5">
              {filterContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
