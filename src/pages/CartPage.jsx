import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import TrustBadges from '../components/ui/TrustBadges';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <FiShoppingBag size={40} className="text-gray-400" />
          </div>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            Looks like you haven't added anything to your cart yet. Discover our beautiful collections!
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const shipping = cartTotal >= 2999 ? 0 : 199;
  const discount = 0;
  const total = cartTotal + shipping - discount;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-maroon-800 to-maroon-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white">Shopping Cart</h1>
          <p className="text-white/60 text-sm mt-1">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex gap-4 sm:gap-6 animate-fade-in">
                {/* Image */}
                <Link to={`/product/${item.id}`} className="w-24 h-32 sm:w-28 sm:h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <div className="min-w-0">
                      <Link to={`/product/${item.id}`} className="font-medium text-charcoal hover:text-maroon-800 transition-colors line-clamp-2">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{item.subcategory}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>

                  {/* Variant info */}
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    {item.size && <span>Size: <span className="text-charcoal font-medium">{item.size}</span></span>}
                    {item.color && <span>Color: <span className="text-charcoal font-medium">{item.color}</span></span>}
                  </div>

                  {/* Price & Quantity */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="inline-flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="px-3 py-1.5 text-charcoal hover:bg-gray-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-4 py-1.5 font-medium text-sm border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="px-3 py-1.5 text-charcoal hover:bg-gray-50 transition-colors"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-maroon-800 text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                      {item.originalPrice > item.price && (
                        <p className="text-xs text-gray-400 line-through">₹{(item.originalPrice * item.quantity).toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="flex items-center justify-between pt-4">
              <Link to="/shop" className="flex items-center gap-2 text-sm text-maroon-800 hover:text-maroon-900 font-medium transition-colors">
                <FiArrowLeft size={16} />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    🎉 You qualify for free shipping!
                  </p>
                )}
                {shipping > 0 && (
                  <p className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                    Add ₹{(2999 - cartTotal).toLocaleString()} more for free shipping
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                <span className="font-semibold text-charcoal">Total</span>
                <span className="text-2xl font-bold text-maroon-800">₹{total.toLocaleString()}</span>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full mt-6 text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Trust */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <TrustBadges variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
