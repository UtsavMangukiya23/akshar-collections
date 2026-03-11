import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TrendingProducts from '../components/home/TrendingProducts';
import SpecialOffers from '../components/home/SpecialOffers';
import CustomerReviews from '../components/home/CustomerReviews';
import InstagramGallery from '../components/home/InstagramGallery';
import Newsletter from '../components/home/Newsletter';
import TrustBadges from '../components/ui/TrustBadges';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <TrustBadges />
      <TrendingProducts />
      <SpecialOffers />
      <CustomerReviews />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
