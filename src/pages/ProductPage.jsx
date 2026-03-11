import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiTruck, FiRefreshCw, FiShield, FiMinus, FiPlus, FiChevronRight } from 'react-icons/fi';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ImageGallery from '../components/product/ImageGallery';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/product/ProductCard';
import TrustBadges from '../components/ui/TrustBadges';
import toast from 'react-hot-toast';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Set defaults once product loads
  useState(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor || product.colors[0], quantity);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor || product.colors[0], quantity);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-maroon-800 transition-colors">Home</Link>
          <FiChevronRight size={14} />
          <Link to="/shop" className="hover:text-maroon-800 transition-colors">Shop</Link>
          <FiChevronRight size={14} />
          <Link to={`/shop/${product.category}`} className="hover:text-maroon-800 transition-colors capitalize">{product.category}</Link>
          <FiChevronRight size={14} />
          <span className="text-charcoal font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <ImageGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags.includes('bestseller') && (
                <span className="px-3 py-1 bg-gold-400 text-white text-xs font-semibold rounded-full">Bestseller</span>
              )}
              {product.tags.includes('new-arrival') && (
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">New Arrival</span>
              )}
              {product.tags.includes('premium') && (
                <span className="px-3 py-1 bg-maroon-800 text-white text-xs font-semibold rounded-full">Premium</span>
              )}
            </div>

            <p className="text-sm text-gray-500 mb-1">{product.subcategory}</p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} size={18} />
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-maroon-800">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-sm font-semibold rounded">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-xs text-gray-500 mb-6">Inclusive of all taxes. Free shipping on orders above ₹2,999.</p>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-charcoal mb-3">
                  Color: <span className="font-normal text-gray-600">{selectedColor || product.colors[0]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg text-sm border-2 transition-all ${
                        (selectedColor || product.colors[0]) === color
                          ? 'border-maroon-800 bg-maroon-50 text-maroon-800 font-medium'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-charcoal mb-3">
                Size: <span className="font-normal text-gray-600">{selectedSize || product.sizes[0]}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] px-4 py-2 rounded-lg text-sm border-2 transition-all ${
                      (selectedSize || product.sizes[0]) === size
                        ? 'border-maroon-800 bg-maroon-800 text-white font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border-2 border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 text-charcoal hover:bg-gray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <FiMinus size={16} />
                </button>
                <span className="px-6 py-2 font-semibold text-charcoal border-x border-gray-200 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => Math.min(10, q + 1))}
                  className="px-4 py-2 text-charcoal hover:bg-gray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button onClick={handleAddToCart} className="flex-1 btn-primary flex items-center justify-center gap-2">
                <FiShoppingBag size={18} />
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="flex-1 btn-gold flex items-center justify-center gap-2">
                Buy Now
              </button>
              <button
                onClick={() => {
                  toggleWishlist(product.id);
                  toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist ❤️');
                }}
                className={`w-14 flex items-center justify-center rounded-md border-2 transition-all ${
                  wishlisted
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500'
                }`}
              >
                <FiHeart size={20} className={wishlisted ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl border border-gray-100">
              {[
                { icon: FiTruck, label: 'Free Delivery' },
                { icon: FiRefreshCw, label: 'Easy Returns' },
                { icon: FiShield, label: '100% Original' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon size={20} className="mx-auto mb-1 text-maroon-800" />
                  <p className="text-xs text-gray-600">{label}</p>
                </div>
              ))}
            </div>

            {/* Product Details */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Fabric:</span>
                  <span className="ml-2 text-charcoal font-medium">{product.fabric}</span>
                </div>
                <div>
                  <span className="text-gray-500">Occasion:</span>
                  <span className="ml-2 text-charcoal font-medium">{product.occasion}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Care:</span>
                  <span className="ml-2 text-charcoal font-medium">{product.careInstructions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-100">
            {[
              { key: 'description', label: 'Description' },
              { key: 'reviews', label: `Reviews (${product.reviews.length})` },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 sm:flex-none px-8 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'text-maroon-800 border-b-2 border-maroon-800'
                    : 'text-gray-500 hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-3xl">
                {product.reviews.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review this product!</p>
                ) : (
                  <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                      <div key={i} className="pb-6 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-maroon-100 flex items-center justify-center">
                            <span className="text-maroon-800 font-semibold text-sm">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-charcoal text-sm">{review.name}</p>
                            <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size={14} />
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="section-heading mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
