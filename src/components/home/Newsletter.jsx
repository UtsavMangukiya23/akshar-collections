import { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    toast.success('Welcome to Akshar Collection! Check your inbox for a surprise.');
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-maroon" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212,175,55,0.4) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(212,175,55,0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
          <FiMail size={28} className="text-gold-400" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Join the Akshar Family
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          Subscribe to get exclusive access to new collections, special offers, and style inspirations. Get <span className="text-gold-400 font-semibold">15% off</span> your first order!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gold-400 text-white font-semibold rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {subscribed ? (
              <>
                <FiCheck /> Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        <p className="text-white/40 text-xs mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
