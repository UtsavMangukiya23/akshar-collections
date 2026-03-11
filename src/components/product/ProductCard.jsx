import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import StarRating from '../ui/StarRating';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist', {
      icon: wishlisted ? '💔' : '❤️'
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discount > 0 && (
            <span className="px-2.5 py-1 bg-maroon-800 text-white text-[11px] font-bold rounded-md tracking-wide shadow-lg">
              {product.discount}% OFF
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="px-2.5 py-1 bg-gold-400 text-white text-[11px] font-bold rounded-md tracking-wide shadow-lg">
              BESTSELLER
            </span>
          )}
          {product.tags.includes('new-arrival') && !product.tags.includes('bestseller') && (
            <span className="px-2.5 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-md tracking-wide shadow-lg">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button - always visible */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
            wishlisted
              ? 'bg-red-500 text-white scale-110'
              : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500 hover:scale-110'
          }`}
        >
          <FiHeart size={15} className={wishlisted ? 'fill-current' : ''} />
        </button>

        {/* Bottom actions - slide up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-charcoal py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-maroon-800 hover:text-white transition-colors shadow-xl"
          >
            <FiShoppingBag size={14} />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Cart</span>
          </button>
          <Link
            to={`/product/${product.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-10 flex items-center justify-center bg-white text-charcoal rounded-lg shadow-xl hover:bg-maroon-800 hover:text-white transition-colors"
          >
            <FiEye size={14} />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1">
        <p className="text-[11px] text-gold-600 font-semibold uppercase tracking-widest mb-1.5">{product.subcategory}</p>
        <h3 className="font-medium text-charcoal text-sm sm:text-[15px] leading-snug mb-2 group-hover:text-maroon-800 transition-colors line-clamp-2 flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2.5">
          <StarRating rating={product.rating} size={13} />
          <span className="text-[11px] text-gray-400 font-medium">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <span className="text-lg sm:text-xl font-bold text-maroon-800 tracking-tight">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            </>
          )}
        </div>

        {/* Color dots */}
        {product.colors && product.colors.length > 1 && (
          <div className="flex items-center gap-1.5 mt-2.5">
            {product.colors.slice(0, 4).map(color => (
              <span
                key={color}
                title={color}
                className="w-4 h-4 rounded-full border-2 border-gray-200 shadow-sm"
                style={{ backgroundColor: color.toLowerCase().replace(/\s+/g, '') }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-gray-400 ml-0.5">+{product.colors.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
