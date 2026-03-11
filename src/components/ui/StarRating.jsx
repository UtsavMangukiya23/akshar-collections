import { FiStar } from 'react-icons/fi';

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <FiStar
          key={star}
          size={size}
          className={
            star <= Math.floor(rating)
              ? 'text-gold-400 fill-gold-400'
              : star <= rating
              ? 'text-gold-400 fill-gold-400 opacity-50'
              : 'text-gray-300'
          }
        />
      ))}
    </div>
  );
}
