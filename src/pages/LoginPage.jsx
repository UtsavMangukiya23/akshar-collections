import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiEye, FiEyeOff, FiArrowRight, FiLoader } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const { login, register, isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/';
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4 py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-maroon-100 flex items-center justify-center">
            <span className="text-maroon-800 font-display font-bold text-2xl">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-500 mb-2">{user.email}</p>
          <p className="text-xs text-gray-400 mb-8">Member since {new Date(user.created_at || user.joinDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/orders" className="btn-primary">My Orders</Link>
            <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
            <button onClick={logout} className="btn-secondary">Sign Out</button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!formData.email || !formData.password) {
        toast.error('Please fill in all fields');
        return;
      }
      const result = await login(formData.email, formData.password);
      if (result.success) {
        toast.success(`Welcome back, ${result.user.name}!`);
        navigate(redirectTo);
      } else {
        toast.error(result.error || 'Login failed');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        toast.error('Please fill in all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }
      const result = await register(formData.name, formData.email, formData.password);
      if (result.success) {
        toast.success(`Welcome to Akshar Collection, ${result.user.name}!`);
        navigate(redirectTo);
      } else {
        toast.error(result.error || 'Registration failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 rounded-full gradient-maroon flex items-center justify-center shadow-md">
              <span className="text-white font-display font-bold text-xl">A</span>
            </div>
          </Link>
          <h1 className="font-display text-2xl font-bold text-charcoal mt-4">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin ? 'Sign in to your Akshar Collection account' : 'Join the Akshar Collection family'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-maroon-800 rounded focus:ring-maroon-800" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <span className="text-maroon-800 cursor-pointer hover:underline">Forgot Password?</span>
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading ? <FiLoader size={16} className="animate-spin" /> : null}
              {isLogin ? 'Sign In' : 'Create Account'}
              {!loading && <FiArrowRight size={16} />}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Toggle */}
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({ name: '', email: '', password: '', confirmPassword: '' });
              }}
              className="text-maroon-800 font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Info note */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Register a new account or sign in to place orders
        </p>
      </div>
    </div>
  );
}
