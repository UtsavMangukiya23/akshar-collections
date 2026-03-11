import { FiShield, FiRefreshCw, FiTruck, FiAward } from 'react-icons/fi';

const badges = [
  { icon: FiShield, title: 'Secure Payments', desc: '100% protected checkout' },
  { icon: FiRefreshCw, title: 'Easy Returns', desc: '7-day return policy' },
  { icon: FiTruck, title: 'Fast Delivery', desc: 'Free shipping over ₹2,999' },
  { icon: FiAward, title: '100% Original', desc: 'Authentic products only' },
];

export default function TrustBadges({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-2 text-sm text-gray-600">
            <Icon size={16} className="text-maroon-800 flex-shrink-0" />
            <span>{title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream-50 flex items-center justify-center group-hover:bg-maroon-50 transition-colors">
                <Icon size={28} className="text-maroon-800" />
              </div>
              <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
