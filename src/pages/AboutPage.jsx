import { Link } from 'react-router-dom';
import { FiHeart, FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import Newsletter from '../components/home/Newsletter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 to-maroon-950" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Weaving Dreams<br />Into Reality
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            At Akshar Collection, we believe every woman deserves to feel like royalty. Our journey began with a simple dream — to bring India's finest ethnic wear to your doorstep.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Our workshop"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Since 2018</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                A Heritage of<br />Craftsmanship
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in the vibrant city of Ahmedabad, Gujarat, Akshar Collection was born from a passion for preserving India's rich textile heritage while making it accessible to the modern woman.
                </p>
                <p>
                  We work directly with over 50 artisan communities across India — from the Banarasi silk weavers of Varanasi to the Chikankari craftspeople of Lucknow, the Patola artisans of Gujarat to the Kanjivaram masters of Tamil Nadu.
                </p>
                <p>
                  Every piece in our collection is a testament to the skill, dedication, and artistry that has been passed down through generations. We don't just sell ethnic wear — we curate stories woven into fabric.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Stand For</h2>
            <p className="section-subheading">Our core values guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FiHeart,
                title: 'Artisan Love',
                desc: 'We support traditional craftspeople by providing fair wages and sustainable partnerships that keep ancient arts alive.'
              },
              {
                icon: FiAward,
                title: 'Premium Quality',
                desc: 'Every piece undergoes rigorous quality checks. We use only the finest fabrics and materials in our collections.'
              },
              {
                icon: FiUsers,
                title: 'Customer First',
                desc: 'Your satisfaction is our priority. From personalized styling advice to hassle-free returns, we\'re here for you.'
              },
              {
                icon: FiGlobe,
                title: 'Sustainable Fashion',
                desc: 'We believe in conscious fashion. Our packaging is eco-friendly and we support sustainable weaving practices.'
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl hover:bg-cream-50 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-maroon-50 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                  <Icon size={28} className="text-maroon-800" />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 gradient-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '500+', label: 'Unique Designs' },
              { value: '50+', label: 'Artisan Partners' },
              { value: '15+', label: 'States Served' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold-400 mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Promise */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">Our Promise to You</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            When you choose Akshar Collection, you're not just buying clothes — you're investing in artistry, tradition, and quality. We promise to deliver the finest Indian ethnic wear with an experience that makes you feel valued and beautiful.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Explore Our Collection
          </Link>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
