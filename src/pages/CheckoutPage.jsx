import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCheck, FiLock, FiMail, FiPhone, FiPackage, FiCalendar, FiMapPin, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import TrustBadges from '../components/ui/TrustBadges';
import { buildOrderSummary, sendWhatsAppNotification, sendEmailNotification } from '../services/notificationService';
import { ordersAPI } from '../services/api';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState({ whatsapp: false, email: false });
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  const shipping = cartTotal >= 2999 ? 0 : 199;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    for (const field of required) {
      if (!formData[field].trim()) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }

    setSubmitting(true);

    try {
      // Build order summary for notifications
      const summary = buildOrderSummary({ formData, cart, cartTotal, shipping, total });

      // Try saving order to database via API (optional — works without backend)
      try {
        const shippingAddress = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
        const apiResponse = await ordersAPI.create({
          items: cart.map(item => ({
            productName: item.name,
            productId: item.id,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
          })),
          totalAmount: total,
          shippingAmount: shipping,
          shippingAddress,
          paymentMethod: formData.paymentMethod,
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
        });
        summary.orderId = apiResponse.order.order_id;
      } catch {
        // Backend unavailable — continue with local order ID
      }

      setOrderSummary(summary);
      setOrderPlaced(true);
      clearCart();
      toast.success('Order placed successfully!');

      // Send WhatsApp notification
      try {
        sendWhatsAppNotification(summary);
        setNotificationStatus(prev => ({ ...prev, whatsapp: true }));
        toast.success('WhatsApp delivery details sent!');
      } catch {
        toast('Could not open WhatsApp. You can send manually from the confirmation page.', { icon: '📱' });
      }

      // Send Email notification
      try {
        sendEmailNotification(summary);
        setNotificationStatus(prev => ({ ...prev, email: true }));
        toast.success('Email with delivery details opened!');
      } catch {
        toast('Could not open email client. You can send manually from the confirmation page.', { icon: '📧' });
      }
    } catch (err) {
      toast.error(err.message || 'Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (orderPlaced && orderSummary) {
    return (
      <div className="min-h-screen bg-cream-50 py-12">
        <div className="max-w-2xl mx-auto px-4 animate-fade-in">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
              <FiCheck size={40} className="text-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">Order Confirmed!</h2>
            <p className="text-gray-500">Thank you for shopping with Akshar Collection.</p>
          </div>

          {/* Order & Delivery Details Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-2 mb-5">
              <FiPackage className="text-maroon-800" size={20} />
              <h3 className="font-display text-lg font-bold text-charcoal">Delivery Details</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiPackage size={16} className="text-maroon-800" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Order ID</p>
                  <p className="font-semibold text-charcoal">#{orderSummary.orderId}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCalendar size={16} className="text-maroon-800" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Estimated Delivery</p>
                  <p className="font-semibold text-charcoal">{orderSummary.estimatedDelivery}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin size={16} className="text-maroon-800" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Shipping To</p>
                  <p className="font-semibold text-charcoal">{orderSummary.shippingAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-maroon-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-maroon-800 font-bold text-xs">₹</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Total Amount</p>
                  <p className="font-semibold text-charcoal">₹{orderSummary.total.toLocaleString()} ({orderSummary.paymentMethod})</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Status Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="font-display text-lg font-bold text-charcoal mb-4">Delivery Notifications Sent</h3>
            <p className="text-sm text-gray-500 mb-5">We've sent your order & delivery details via:</p>

            <div className="space-y-3">
              {/* WhatsApp Status */}
              <div className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                notificationStatus.whatsapp ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <FaWhatsapp size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">WhatsApp</p>
                    <p className="text-xs text-gray-500">
                      {notificationStatus.whatsapp
                        ? `Sent to ${orderSummary.phone}`
                        : 'Click to send delivery details'}
                    </p>
                  </div>
                </div>
                {notificationStatus.whatsapp ? (
                  <span className="text-green-600 text-xs font-medium flex items-center gap-1"><FiCheck size={14} /> Sent</span>
                ) : (
                  <button
                    onClick={() => {
                      sendWhatsAppNotification(orderSummary);
                      setNotificationStatus(prev => ({ ...prev, whatsapp: true }));
                    }}
                    className="text-xs font-medium text-green-600 hover:text-green-700 px-3 py-1.5 rounded-lg border border-green-300 hover:bg-green-50 transition-all"
                  >
                    Send Now
                  </button>
                )}
              </div>

              {/* Email Status */}
              <div className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                notificationStatus.email ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <FiMail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">Email</p>
                    <p className="text-xs text-gray-500">
                      {notificationStatus.email
                        ? `Sent to ${orderSummary.email}`
                        : 'Click to send delivery details'}
                    </p>
                  </div>
                </div>
                {notificationStatus.email ? (
                  <span className="text-blue-600 text-xs font-medium flex items-center gap-1"><FiCheck size={14} /> Sent</span>
                ) : (
                  <button
                    onClick={() => {
                      sendEmailNotification(orderSummary);
                      setNotificationStatus(prev => ({ ...prev, email: true }));
                    }}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    Send Now
                  </button>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              You'll also receive tracking updates once your order is shipped.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <Link to="/orders" className="btn-primary">View My Orders</Link>
            <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Add some items to proceed with checkout.</p>
          <Link to="/shop" className="btn-primary inline-block">Shop Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-maroon-800 to-maroon-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white">Checkout</h1>
          <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
            <FiLock size={14} />
            Secure Checkout
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Shipping Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">Contact Information</h3>
              {!isAuthenticated && (
                <p className="text-sm text-gray-500 mb-4">
                  Already have an account? <Link to="/login" className="text-maroon-800 font-medium hover:underline">Log in</Link>
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">Shipping Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House/Flat No., Street, Locality"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all bg-white"
                      required
                    >
                      <option value="">Select</option>
                      {['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'].map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      maxLength={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { value: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives' },
                  { value: 'upi', label: 'UPI Payment', desc: 'GPay, PhonePe, Paytm' },
                  { value: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                  { value: 'netbanking', label: 'Net Banking', desc: 'All major banks supported' },
                ].map(method => (
                  <label
                    key={method.value}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === method.value
                        ? 'border-maroon-800 bg-maroon-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={handleChange}
                      className="w-4 h-4 text-maroon-800 focus:ring-maroon-800"
                    />
                    <div>
                      <p className="font-medium text-charcoal text-sm">{method.label}</p>
                      <p className="text-xs text-gray-500">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">Order Summary</h3>

              {/* Items */}
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1 mb-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.size} · {item.color}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-charcoal flex-shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
                <span className="font-semibold text-charcoal">Total</span>
                <span className="text-xl font-bold text-maroon-800">₹{total.toLocaleString()}</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-6 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? <FiLoader size={16} className="animate-spin" /> : <FiLock size={16} />}
                {submitting ? 'Placing Order...' : 'Place Order'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                By placing this order, you agree to our Terms of Service and Privacy Policy.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <TrustBadges variant="compact" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
