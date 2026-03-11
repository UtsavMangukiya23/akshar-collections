import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPackage, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp, FiShoppingBag } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { ordersAPI } from '../services/api';

const STATUS_COLORS = {
  confirmed: 'bg-blue-100 text-blue-700',
  processing: 'bg-yellow-100 text-yellow-700',
  shipped: 'bg-purple-100 text-purple-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};

export default function OrdersPage() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/orders' } });
      return;
    }
    ordersAPI.getAll()
      .then(data => setOrders(data.orders))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-maroon-800 to-maroon-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white">My Orders</h1>
          <p className="text-white/60 text-sm mt-1">
            Welcome, {user?.name} — view your order history below
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-3 border-maroon-800 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-maroon-50 flex items-center justify-center">
              <FiShoppingBag size={32} className="text-maroon-300" />
            </div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">No Orders Yet</h2>
            <p className="text-gray-500 mb-8">Start shopping to see your orders here.</p>
            <Link to="/shop" className="btn-primary inline-block">Browse Collection</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.order_id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Order Header */}
                <button
                  onClick={() => setExpandedOrder(expandedOrder === order.order_id ? null : order.order_id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-maroon-50 flex items-center justify-center flex-shrink-0">
                      <FiPackage size={22} className="text-maroon-800" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-semibold text-charcoal">Order #{order.order_id}</p>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[order.status] || STATUS_COLORS.confirmed}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={12} />
                          {new Date(order.order_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span>{order.items?.length || 0} item{(order.items?.length || 0) !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-maroon-800 text-lg">₹{order.total_amount?.toLocaleString()}</p>
                    {expandedOrder === order.order_id ? <FiChevronUp size={18} className="text-gray-400" /> : <FiChevronDown size={18} className="text-gray-400" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedOrder === order.order_id && (
                  <div className="border-t border-gray-100 p-5 animate-fade-in">
                    {/* Shipping & Payment */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-5 text-sm">
                      {order.shipping_address && (
                        <div className="flex items-start gap-2.5">
                          <FiMapPin size={16} className="text-maroon-800 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500">Shipping Address</p>
                            <p className="text-charcoal">{order.shipping_address}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-2.5">
                        <span className="text-maroon-800 font-bold text-sm mt-0.5">₹</span>
                        <div>
                          <p className="text-xs text-gray-500">Payment</p>
                          <p className="text-charcoal capitalize">{order.payment_method || 'COD'} • Shipping: {order.shipping_amount === 0 ? 'FREE' : `₹${order.shipping_amount}`}</p>
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <h4 className="text-sm font-semibold text-charcoal mb-3">Items Ordered</h4>
                    <div className="space-y-3">
                      {order.items?.map(item => (
                        <div key={item.item_id} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                          {item.image && (
                            <div className="w-14 h-18 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                              <img src={item.image} alt={item.product_name} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-charcoal text-sm truncate">{item.product_name}</p>
                            <p className="text-xs text-gray-500">
                              {[item.size, item.color].filter(Boolean).join(' • ')} • Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="font-semibold text-charcoal text-sm flex-shrink-0">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
