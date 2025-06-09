
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-arabic text-heritage-brown leading-tight">
                اكتشف عالم
                <span className="block text-craft-orange">الحرف التقليدية</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-clay-brown">
                Découvrez l'Artisanat Algérien Authentique
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Connectez-vous directement avec les artisans locaux et découvrez des créations uniques 
                qui racontent l'histoire de notre patrimoine culturel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-6 text-lg font-arabic"
              >
                استكشف المنتجات
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-6 text-lg"
              >
                Devenir Artisan
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-craft-orange font-arabic">٢٠٠+</div>
                <div className="text-sm text-muted-foreground">حرفي مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-brown">500+</div>
                <div className="text-sm text-muted-foreground">Produits Uniques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-accent">48</div>
                <div className="text-sm text-muted-foreground">Wilayas Couvertes</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float">
                <div className="aspect-square bg-gradient-to-br from-craft-orange to-copper-accent rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🏺</span>
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Poterie Traditionnelle</h3>
                <p className="text-sm text-muted-foreground">Créations en argile authentiques</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                <div className="aspect-square bg-gradient-to-br from-clay-brown to-heritage-brown rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🧶</span>
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Textile & Broderie</h3>
                <p className="text-sm text-muted-foreground">Qaftans et tapis berbères</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-copper-accent to-craft-orange rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">💍</span>
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Bijoux Berbères</h3>
                <p className="text-sm text-muted-foreground">Argent et pierres naturelles</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-heritage-brown to-clay-brown rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🕯️</span>
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2">Artisanat du Cuivre</h3>
                <p className="text-sm text-muted-foreground">Lampes et objets décoratifs</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
