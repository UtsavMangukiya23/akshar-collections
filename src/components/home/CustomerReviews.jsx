import { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../../data/products';

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;

  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-16 lg:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">Real stories from women who love Akshar Collection</p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:text-maroon-800 transition-colors hidden md:flex"
            aria-label="Previous review"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:text-maroon-800 transition-colors hidden md:flex"
            aria-label="Next review"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-4 md:px-8">
            {getVisible().map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-8 card-shadow transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      className={i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-300'}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{review.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>

                {/* Product */}
                <p className="mt-3 text-xs text-maroon-800 bg-maroon-50 px-3 py-1 rounded-full inline-block">
                  Purchased: {review.product}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-maroon-800 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
