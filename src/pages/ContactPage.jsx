import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 to-maroon-950" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            We'd love to hear from you. Whether it's a question about our products, styling advice, or just to say hello!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: FiMapPin,
                    title: 'Visit Our Store',
                    lines: ['Shop No. 12, Fashion Street', 'C.G. Road, Ahmedabad', 'Gujarat 380006, India']
                  },
                  {
                    icon: FiPhone,
                    title: 'Call Us',
                    lines: ['+91 98765 43210', '+91 79 2656 1234']
                  },
                  {
                    icon: FiMail,
                    title: 'Email Us',
                    lines: ['hello@aksharcollection.com', 'support@aksharcollection.com']
                  },
                  {
                    icon: FiClock,
                    title: 'Store Hours',
                    lines: ['Mon–Sat: 10 AM – 8 PM', 'Sun: 11 AM – 6 PM']
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-maroon-800" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm mb-1">{title}</p>
                      {lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-charcoal mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Related</option>
                    <option value="returns">Returns & Exchange</option>
                    <option value="styling">Styling Advice</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-maroon-800 focus:ring-2 focus:ring-maroon-100 outline-none text-sm transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                >
                  <FiSend size={16} />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* FAQ teaser */}
            <div className="mt-8 bg-maroon-50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-charcoal mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: 'What is your return policy?', a: 'We offer 7-day hassle-free returns on all products. Items must be unused and in original packaging.' },
                  { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee.' },
                  { q: 'Do you offer international shipping?', a: 'Yes! We ship to select international destinations. Shipping charges and delivery times vary by location.' },
                  { q: 'Can I customize or alter my order?', a: 'We offer customization on select products including lehengas and gowns. Please contact us for more details.' },
                ].map(({ q, a }) => (
                  <details key={q} className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium text-charcoal hover:text-maroon-800 transition-colors">
                      {q}
                      <span className="text-maroon-800 group-open:rotate-45 transition-transform text-lg ml-2">+</span>
                    </summary>
                    <p className="text-sm text-gray-600 pb-2 leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
