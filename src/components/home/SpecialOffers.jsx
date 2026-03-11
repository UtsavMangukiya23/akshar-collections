import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function SpecialOffers() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Offer 1 - Wedding Collection */}
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 to-maroon-950" />
            <img
              src="https://images.pexels.com/photos/12062663/pexels-photo-12062663.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Wedding Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative p-8 sm:p-10 flex flex-col justify-center min-h-[300px]">
              <span className="inline-block px-3 py-1 bg-gold-400 text-white text-xs font-semibold rounded-full w-fit mb-4">
                UP TO 40% OFF
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Wedding Season<br />Special
              </h3>
              <p className="text-white/70 mb-6 max-w-xs">
                Stunning bridal lehengas and wedding sarees crafted for your most special day.
              </p>
              <Link
                to="/shop/lehengas"
                className="group/btn inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors w-fit"
              >
                Shop Bridal Wear
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Offer 2 - Festive Kurtis */}
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/90 to-gold-700" />
            <img
              src="https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Kurti Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative p-8 sm:p-10 flex flex-col justify-center min-h-[300px]">
              <span className="inline-block px-3 py-1 bg-white text-maroon-800 text-xs font-semibold rounded-full w-fit mb-4">
                NEW ARRIVALS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Festive Kurti<br />Collection
              </h3>
              <p className="text-white/80 mb-6 max-w-xs">
                Elevate your festive wardrobe with handcrafted kurtis featuring traditional artistry.
              </p>
              <Link
                to="/shop/kurtis"
                className="group/btn inline-flex items-center gap-2 text-white font-semibold hover:text-cream-50 transition-colors w-fit"
              >
                Shop Kurtis
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
