import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import products from '../../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase();
      const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSelect = (product) => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    navigate(`/product/${product.id}`);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/shop/sarees', label: 'Sarees' },
    { to: '/shop/lehengas', label: 'Lehengas' },
    { to: '/shop/kurtis', label: 'Kurtis' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-maroon-800 text-white text-center py-2 text-xs sm:text-sm font-body tracking-wide">
        <span className="hidden sm:inline">✨ Free Shipping on Orders Above ₹2,999 | </span>
        Use Code <span className="font-semibold text-gold-400">AKSHAR20</span> for 20% Off
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-maroon-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full gradient-maroon flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-xl lg:text-2xl font-bold text-maroon-800 leading-tight">
                  Akshar Collection
                </h1>
                <p className="text-[10px] text-gold-400 tracking-[0.2em] uppercase -mt-1">
                  Elegance in Every Thread
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 xl:px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? 'text-maroon-800 bg-maroon-50'
                        : 'text-charcoal hover:text-maroon-800 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-charcoal hover:text-maroon-800 transition-colors"
                  aria-label="Search"
                >
                  <FiSearch size={20} />
                </button>

                {searchOpen && (
                  <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 animate-slide-down overflow-hidden z-50">
                    <div className="p-4">
                      <input
                        type="text"
                        placeholder="Search for sarees, lehengas, kurtis..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                        autoFocus
                      />
                    </div>
                    {searchResults.length > 0 && (
                      <div className="border-t border-gray-100 max-h-80 overflow-y-auto">
                        {searchResults.map(product => (
                          <button
                            key={product.id}
                            onClick={() => handleSearchSelect(product)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-cream-50 transition-colors text-left"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-charcoal truncate">{product.name}</p>
                              <p className="text-xs text-gray-500">{product.subcategory}</p>
                            </div>
                            <span className="text-sm font-semibold text-maroon-800">₹{product.price.toLocaleString()}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {searchQuery.trim().length > 1 && searchResults.length === 0 && (
                      <div className="px-4 py-6 text-center text-gray-500 text-sm border-t border-gray-100">
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link to="/shop" className="p-2 text-charcoal hover:text-maroon-800 transition-colors relative hidden sm:block">
                <FiHeart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-maroon-800 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* User */}
              <div ref={userMenuRef} className="relative hidden sm:block">
                <button
                  onClick={() => isAuthenticated ? setUserMenuOpen(!userMenuOpen) : navigate('/login')}
                  className="p-2 text-charcoal hover:text-maroon-800 transition-colors"
                  aria-label="User account"
                >
                  <FiUser size={20} />
                </button>
                {userMenuOpen && isAuthenticated && (
                  <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 animate-slide-down overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-100 bg-cream-50">
                      <p className="text-sm font-semibold text-charcoal">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        to="/orders"
                        onClick={() => setUserMenuOpen(false)}
                        className="block w-full px-4 py-2 text-left text-sm text-charcoal hover:bg-cream-50 transition-colors"
                      >
                        My Orders
                      </Link>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link to="/cart" className="p-2 text-charcoal hover:text-maroon-800 transition-colors relative">
                <FiShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-maroon-800 bg-maroon-50'
                        : 'text-charcoal hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3 flex flex-col gap-1">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/orders"
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-charcoal font-medium px-4 py-2 hover:bg-cream-50 rounded-lg"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => { logout(); setMobileOpen(false); }}
                      className="text-sm text-red-600 font-medium px-4 py-2 text-left"
                    >
                      Sign Out ({user.name})
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-maroon-800 font-medium px-4 py-2"
                  >
                    Login / Register
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
