import { FiInstagram } from 'react-icons/fi';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Royal Banarasi silk saree with gold zari work' },
  { src: 'https://images.pexels.com/photos/12062663/pexels-photo-12062663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Bridal velvet lehenga with embroidery' },
  { src: 'https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Anarkali embroidered kurti set' },
  { src: 'https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Indo-Western fusion dress' },
  { src: 'https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Kundan bridal jewelry set' },
  { src: 'https://images.pexels.com/photos/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Banarasi silk stole and dupatta' },
];

export default function InstagramGallery() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2">Follow Us</p>
          <h2 className="section-heading">@AksharCollection</h2>
          <p className="section-subheading">Tag us in your ethnic wear looks for a chance to be featured</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
          {galleryImages.map((img, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-maroon-800/0 group-hover:bg-maroon-800/60 transition-all duration-300 flex items-center justify-center">
                <FiInstagram
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
