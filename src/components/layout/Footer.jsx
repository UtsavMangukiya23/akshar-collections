import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-maroon flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Akshar Collection</h3>
                <p className="text-[10px] text-gold-400 tracking-[0.2em] uppercase">Elegance in Every Thread</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Curating the finest Indian ethnic wear since 2018. Every piece tells a story of tradition, craftsmanship, and timeless beauty.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiInstagram, href: '#' },
                { icon: FiFacebook, href: '#' },
                { icon: FiTwitter, href: '#' },
                { icon: FiYoutube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon-800 transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/shop', label: 'All Collections' },
                { to: '/shop/sarees', label: 'Sarees' },
                { to: '/shop/lehengas', label: 'Lehengas' },
                { to: '/shop/kurtis', label: 'Kurtis' },
                { to: '/shop/dresses', label: 'Dresses' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Customer Service</h4>
            <ul className="space-y-3">
              {[
                'Track Order',
                'Returns & Exchanges',
                'Shipping Policy',
                'Size Guide',
                'FAQs',
                'Privacy Policy',
                'Terms & Conditions',
              ].map(label => (
                <li key={label}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer hover:pl-1 inline-block">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold-400">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:hello@aksharcollection.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <FiMail size={18} className="mt-0.5 group-hover:text-gold-400" />
                <span className="text-sm">hello@aksharcollection.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <FiPhone size={18} className="mt-0.5 group-hover:text-gold-400" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <FiMapPin size={18} className="mt-0.5 text-gold-400 flex-shrink-0" />
                <span className="text-sm">
                  Shop No. 12, Fashion Street,<br />
                  C.G. Road, Ahmedabad,<br />
                  Gujarat 380006, India
                </span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Store Hours</p>
              <p className="text-sm text-white">Mon–Sat: 10 AM – 8 PM</p>
              <p className="text-sm text-white">Sun: 11 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-gray-500 mr-2">Secure Payments:</span>
              {['Visa', 'Mastercard', 'UPI', 'Paytm', 'GPay', 'COD'].map(method => (
                <span key={method} className="px-3 py-1 bg-white/10 rounded text-xs text-gray-400">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Akshar Collection. All rights reserved. Crafted with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
