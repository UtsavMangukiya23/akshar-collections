import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function FeaturedCategories() {
  const displayCategories = categories.filter(c => ['sarees', 'lehengas', 'kurtis', 'dresses'].includes(c.id));

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2">Explore Our</p>
          <h2 className="section-heading">Featured Categories</h2>
          <p className="section-subheading">Discover our curated collections of India's finest ethnic wear</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayCategories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] card-shadow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-maroon-800/80 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 group-hover:text-gold-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-white/70 text-sm mb-3 hidden sm:block">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore Collection →
                </span>
              </div>

              {/* Product count badge */}
              <div className="absolute top-3 right-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                {cat.count} Items
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
