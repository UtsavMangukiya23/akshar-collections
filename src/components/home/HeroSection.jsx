import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212,175,55,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(212,175,55,0.2) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 30%)`,
            }}
          />
        </div>
        {/* Gold accent lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Hero Image Side */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <img
          src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
          alt="Elegant Indian ethnic wear"
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800 via-maroon-800/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-2xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-sm text-gold-300 font-medium tracking-wide">New Collection 2026</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Discover
            <br />
            <span className="text-gold-400">Timeless</span>
            <br />
            Elegance
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 max-w-lg mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Handcrafted ethnic wear that celebrates the artistry of Indian traditions. Each piece tells a story of heritage, grace, and sophistication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 bg-gold-400 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/shop/lehengas"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Bridal Collection
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '10K+', label: 'Happy Customers' },
              { value: '500+', label: 'Unique Designs' },
              { value: '50+', label: 'Artisan Partners' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-display font-bold text-gold-400">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="#FFF8F0"/>
        </svg>
      </div>
    </section>
  );
}
