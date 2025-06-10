
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TraditionalBasket3D from './TraditionalBasket3D';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-sand-beige via-warm-beige to-background py-20 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-heritage-brown rotate-45"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-craft-orange rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-clay-brown rotate-12"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-copper-accent rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Basket */}
          <div className="order-2 lg:order-1">
            <TraditionalBasket3D />
            <p className="text-center text-sm text-muted-foreground mt-2 font-arabic">
              اسحب للدوران • تكبير وتصغير • سلال تقليدية جزائرية ثلاثية الأبعاد
            </p>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-fade-in-up order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-arabic text-heritage-brown leading-tight">
                اكتشف عالم
                <span className="block text-craft-orange">الحرف التقليدية</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-clay-brown">
                Découvrez l'Artisanat Algérien Authentique
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                تواصل مباشرة مع الحرفيين المحليين واكتشف إبداعات فريدة 
                تحكي قصة تراثنا الثقافي العريق.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-6 text-lg font-arabic"
              >
                تصفح المنتجات
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-6 text-lg"
              >
                كن حرفياً
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-craft-orange font-arabic">200+</div>
                <div className="text-sm text-muted-foreground font-arabic">حرفي مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-brown font-arabic">500+</div>
                <div className="text-sm text-muted-foreground">منتج مميز</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-accent font-arabic">48</div>
                <div className="text-sm text-muted-foreground">ولاية مغطاة</div>
              </div>
            </div>

            {/* Product cards moved below content */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float">
                <div className="aspect-square bg-gradient-to-br from-craft-orange to-copper-accent rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center" 
                    alt="فخار تقليدي"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">فخار تقليدي</h3>
                <p className="text-sm text-muted-foreground">إبداعات من الطين الأصيل</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                <div className="aspect-square bg-gradient-to-br from-clay-brown to-heritage-brown rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=200&fit=crop&crop=center" 
                    alt="نسيج وتطريز"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">نسيج وتطريز</h3>
                <p className="text-sm text-muted-foreground">قفاطين وزرابي بربرية</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-copper-accent to-craft-orange rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=center" 
                    alt="مجوهرات بربرية"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">مجوهرات بربرية</h3>
                <p className="text-sm text-muted-foreground">فضة وأحجار طبيعية</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-heritage-brown to-clay-brown rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center" 
                    alt="حرف النحاس"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">حرف النحاس</h3>
                <p className="text-sm text-muted-foreground">مصابيح وأدوات زينة</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
