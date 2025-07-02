
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const MovingImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of craft images with descriptions - focused on pottery and leather crafts
  const craftImages = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop&crop=center",
      title: "فخار تقليدي",
      subtitle: "Poterie traditionnelle"
    },
    {
      url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center",
      title: "حرف جلدية",
      subtitle: "Maroquinerie artisanale"
    },
    {
      url: "https://images.unsplash.com/photo-1587829797736-f6dc8ab4dc13?w=600&h=600&fit=crop&crop=center",
      title: "أواني فخارية",
      subtitle: "Céramique traditionnelle"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&crop=center",
      title: "صناعة الجلود",
      subtitle: "Artisanat du cuir"
    },
    {
      url: "https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=600&h=600&fit=crop&crop=center",
      title: "نسيج بربري",
      subtitle: "Tissage berbère"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === craftImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [craftImages.length]);

  return (
    <div className="relative w-full h-full">
      {/* Main carousel container */}
      <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-craft-orange/20 border border-craft-orange/20">
        {craftImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-craft-orange/10 via-transparent to-copper-accent/10"></div>
            
            {/* Image caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <Card className="p-4 bg-white/90 backdrop-blur-sm border border-craft-orange/20 shadow-lg">
                <h4 className="font-bold text-craft-orange font-arabic mb-1">{image.title}</h4>
                <p className="text-sm text-heritage-brown/70">{image.subtitle}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {craftImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-craft-orange shadow-lg shadow-craft-orange/50' 
                : 'bg-craft-orange/30 hover:bg-craft-orange/60'
            }`}
          />
        ))}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-craft-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-copper-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default MovingImageGallery;
