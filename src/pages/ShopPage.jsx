import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiFilter, FiGrid, FiX, FiChevronRight } from 'react-icons/fi';
import { HiViewGrid } from 'react-icons/hi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import products from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';

const categoryBanners = {
  all: { title: 'All Collections', subtitle: 'Explore our curated selection of ethnic wear' },
  sarees: { title: 'Sarees', subtitle: 'Timeless elegance woven in every thread' },
  lehengas: { title: 'Lehengas', subtitle: 'Celebrate every occasion in style' },
  kurtis: { title: 'Kurtis', subtitle: 'Effortless style for everyday grace' },
  dresses: { title: 'Dresses', subtitle: 'Contemporary designs for the modern woman' },
  ethnic: { title: 'Ethnic Wear', subtitle: 'Tradition meets contemporary fashion' },
};

export default function ShopPage() {
  const { category: urlCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'all');
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(4);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    if (urlCategory) setSelectedCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedColors.length > 0) {
      filtered = filtered.filter(p =>
        p.colors.some(c => selectedColors.includes(c))
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p =>
        p.sizes.some(s => selectedSizes.includes(s))
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default:
        filtered.sort((a, b) => {
          const aFeat = a.tags.includes('bestseller') ? 2 : a.tags.includes('trending') ? 1 : 0;
          const bFeat = b.tags.includes('bestseller') ? 2 : b.tags.includes('trending') ? 1 : 0;
          return bFeat - aFeat;
        });
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, selectedColors, selectedSizes]);

  const banner = categoryBanners[selectedCategory] || categoryBanners.all;
  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 30000 || selectedColors.length > 0 || selectedSizes.length > 0;

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 30000]);
    setSortBy('featured');
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,175,55,0.2) 0%, transparent 40%)',
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <FiChevronRight size={12} />
            <span className="text-gold-400">{banner.title}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            {banner.title}
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl font-light">
            {banner.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-white/80 text-sm">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-maroon-50 text-maroon-800 rounded-lg text-sm font-medium hover:bg-maroon-100 transition-colors"
            >
              <FiFilter size={15} />
              Filters
            </button>
            <span className="hidden sm:block text-sm text-gray-500">
              Showing <span className="font-semibold text-charcoal">{filteredProducts.length}</span> results
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Grid View Toggle - Desktop only */}
            <div className="hidden lg:flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 transition-colors ${gridCols === 3 ? 'bg-maroon-800 text-white' : 'bg-white text-gray-400 hover:text-charcoal'}`}
              >
                <HiViewGrid size={16} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 transition-colors ${gridCols === 4 ? 'bg-maroon-800 text-white' : 'bg-white text-gray-400 hover:text-charcoal'}`}
              >
                <BsGrid3X3GapFill size={14} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-charcoal bg-white focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        {/* Active Filters Bar */}
        {hasActiveFilters && (
          <div className="flex items-center flex-wrap gap-2 mb-5">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mr-1">Active:</span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-maroon-50 text-maroon-800 text-xs font-medium rounded-full border border-maroon-100 hover:bg-maroon-100 transition-colors"
              >
                {banner.title}
                <FiX size={12} />
              </button>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 30000) && (
              <button
                onClick={() => setPriceRange([0, 30000])}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-maroon-50 text-maroon-800 text-xs font-medium rounded-full border border-maroon-100 hover:bg-maroon-100 transition-colors"
              >
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                <FiX size={12} />
              </button>
            )}
            {selectedColors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColors(prev => prev.filter(c => c !== color))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-maroon-50 text-maroon-800 text-xs font-medium rounded-full border border-maroon-100 hover:bg-maroon-100 transition-colors"
              >
                {color}
                <FiX size={12} />
              </button>
            ))}
            {selectedSizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSizes(prev => prev.filter(s => s !== size))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-maroon-50 text-maroon-800 text-xs font-medium rounded-full border border-maroon-100 hover:bg-maroon-100 transition-colors"
              >
                {size}
                <FiX size={12} />
              </button>
            ))}
            <button
              onClick={clearAllFilters}
              className="text-xs text-maroon-700 underline underline-offset-2 hover:text-maroon-900 transition-colors ml-1"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex gap-8">
          <ProductFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
          />

          <div className="flex-1 min-w-0">
            <ProductGrid products={filteredProducts} gridCols={gridCols} />
          </div>
        </div>
      </div>
    </div>
  );
}
