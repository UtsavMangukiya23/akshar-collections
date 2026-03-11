import { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';

export default function ImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const next = () => setActiveIndex(prev => (prev + 1) % images.length);
  const prev = () => setActiveIndex(prev => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px]">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
              index === activeIndex
                ? 'border-maroon-800 shadow-md'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 group">
        <div
          ref={imageRef}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setZoomed(true)}
          onMouseLeave={() => setZoomed(false)}
        >
          <img
            src={images[activeIndex]}
            alt={productName}
            className="w-full h-full object-cover"
            style={
              zoomed
                ? {
                    transform: 'scale(2)',
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transition: 'transform-origin 0.1s ease',
                  }
                : {}
            }
          />

          {/* Zoom hint */}
          {!zoomed && (
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <FiZoomIn size={14} />
              Hover to zoom
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-charcoal hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-charcoal hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight size={18} />
            </button>
          </>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
