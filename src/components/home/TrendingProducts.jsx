import { Link } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function TrendingProducts() {
  const trending = products.filter(p => p.tags.includes('trending')).slice(0, 8);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2">What's Hot</p>
          <h2 className="section-heading">Trending Now</h2>
          <p className="section-subheading">The most loved pieces from our collection, curated just for you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trending.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-secondary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
