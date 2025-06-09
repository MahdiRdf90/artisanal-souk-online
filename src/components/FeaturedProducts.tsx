
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز',
      name_fr: 'Qaftan Traditionnel Brodé',
      price: 15000,
      currency: 'DZD',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      artisan: 'فاطمة بن علي',
      artisan_fr: 'Fatima Ben Ali',
      region: 'تلمسان',
      region_fr: 'Tlemcen',
      rating: 4.8,
      isNew: true,
      category: 'نسيج وتطريز'
    },
    {
      id: 2,
      name: 'إبريق نحاسي منقوش',
      name_fr: 'Théière en Cuivre Gravée',
      price: 8500,
      currency: 'DZD',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=400&fit=crop',
      artisan: 'محمد الحداد',
      artisan_fr: 'Mohamed El Haddad',
      region: 'قسنطينة',
      region_fr: 'Constantine',
      rating: 4.9,
      isNew: false,
      category: 'أشغال معدنية'
    },
    {
      id: 3,
      name: 'زربية قبائلية',
      name_fr: 'Tapis Kabyle Authentique',
      price: 25000,
      currency: 'DZD',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=400&fit=crop',
      artisan: 'عائشة أوراغ',
      artisan_fr: 'Aicha Ourag',
      region: 'بجاية',
      region_fr: 'Béjaïa',
      rating: 5.0,
      isNew: true,
      category: 'نسيج وتطريز'
    },
    {
      id: 4,
      name: 'فخار بربري مزخرف',
      name_fr: 'Poterie Berbère Décorée',
      price: 4500,
      currency: 'DZD',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=400&fit=crop',
      artisan: 'يوسف أمزيان',
      artisan_fr: 'Youcef Ameziane',
      region: 'غرداية',
      region_fr: 'Ghardaïa',
      rating: 4.7,
      isNew: false,
      category: 'حرف طبيعية'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-arabic text-heritage-brown mb-4">
            المنتجات المميزة
          </h2>
          <h3 className="text-2xl font-semibold text-clay-brown mb-4">
            Produits Vedettes
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection soigneusement choisie de créations artisanales 
            authentiques, créées par nos artisans les plus talentueux.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-md hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name_fr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-craft-orange text-white font-arabic">
                      جديد
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-heritage-brown">
                    {product.category}
                  </Badge>
                </div>

                {/* Quick Add Button */}
                <Button
                  size="sm"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-heritage-brown hover:bg-craft-orange hover:text-white"
                >
                  <ShoppingCart size={16} />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  {/* Product Name */}
                  <div>
                    <h4 className="font-bold font-arabic text-heritage-brown text-lg mb-1">
                      {product.name}
                    </h4>
                    <p className="text-sm text-clay-brown">
                      {product.name_fr}
                    </p>
                  </div>

                  {/* Artisan Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-arabic text-heritage-brown">{product.artisan}</p>
                      <p className="text-muted-foreground">{product.region_fr}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-craft-orange">★</span>
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-3 border-t border-muted">
                    <div className="text-right">
                      <span className="text-2xl font-bold text-heritage-brown font-arabic">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-muted-foreground mr-2">
                        {product.currency}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-craft-orange hover:bg-craft-orange/90 text-white"
                    >
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8"
          >
            عرض جميع المنتجات • Voir Tous les Produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
