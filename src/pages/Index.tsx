
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoriesSection from '@/components/CategoriesSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      <HeroSection />
      <FeaturedProducts />
      <ProjectsShowcase />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
