
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name_ar: 'حرف طبيعية',
      name_fr: 'Artisanat Naturel',
      description: 'خشب، فخار، حجر، نباتات، جلد',
      description_fr: 'Bois, poterie, pierre, plantes, cuir',
      icon: '🌿',
      color: 'from-green-400 to-emerald-600',
      count: 45,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name_ar: 'نسيج وتطريز',
      name_fr: 'Textile & Broderie',
      description: 'قفطان، زرابي، منسوجات تقليدية',
      description_fr: 'Qaftans, tapis, textiles traditionnels',
      icon: '🧶',
      color: 'from-purple-400 to-indigo-600',
      count: 32,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name_ar: 'مجوهرات وزينة',
      name_fr: 'Bijoux & Décoration',
      description: 'مجوهرات، حناء، زينة موسمية',
      description_fr: 'Bijoux, henné, décoration saisonnière',
      icon: '💎',
      color: 'from-pink-400 to-rose-600',
      count: 28,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name_ar: 'أشغال معدنية',
      name_fr: 'Travaux Métalliques',
      description: 'نحاس، حديد، مصابيح تقليدية',
      description_fr: 'Cuivre, fer, lampes traditionnelles',
      icon: '🔨',
      color: 'from-amber-400 to-orange-600',
      count: 19,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name_ar: 'حرف غذائية',
      name_fr: 'Artisanat Alimentaire',
      description: 'خبز، حلويات، جبن تقليدي',
      description_fr: 'Pain, pâtisseries, fromage traditionnel',
      icon: '🍯',
      color: 'from-yellow-400 to-amber-600',
      count: 23,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name_ar: 'مستحضرات طبيعية',
      name_fr: 'Cosmétiques Naturels',
      description: 'صابون، زيوت، عطور طبيعية',
      description_fr: 'Savons, huiles, parfums naturels',
      icon: '🌸',
      color: 'from-green-400 to-teal-600',
      count: 15,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop&crop=center'
    }
  ];

  return (
    <section className="py-16 bg-sand-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-arabic text-heritage-brown mb-4">
            أصناف الحرف
          </h2>
          <h3 className="text-2xl font-semibold text-clay-brown mb-4">
            Catégories d'Artisanat
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعتنا الغنية من الحرف التقليدية الجزائرية، 
            منظمة حسب الأصناف لتسهيل اكتشافك.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Category Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name_ar}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                    {category.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h4 className="text-xl font-bold font-arabic mb-2">
                      {category.name_ar}
                    </h4>
                    <p className="text-white/90 font-medium">
                      {category.name_fr}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-white/80 text-sm">
                        {category.count} produits
                      </span>
                      <span className="text-white/80 text-sm font-arabic">
                        {category.count} منتج
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-arabic">
                      {category.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {category.description_fr}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-muted">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-heritage-brown group-hover:text-craft-orange transition-colors">
                        Découvrir →
                      </span>
                      <span className="text-sm font-medium text-heritage-brown group-hover:text-craft-orange transition-colors font-arabic">
                        ← استكشف
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-arabic text-heritage-brown mb-4">
              هل أنت حرفي؟ انضم إلى منصتنا
            </h3>
            <p className="text-lg font-semibold text-clay-brown mb-4">
              Vous êtes artisan ? Rejoignez notre plateforme
            </p>
            <p className="text-muted-foreground mb-6">
              شارك إبداعاتك مع العالم كله وطور نشاطك 
              من خلال منصتنا المخصصة للحرفيين الجزائريين.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-3 rounded-lg font-arabic font-semibold transition-colors">
                سجل كحرفي
              </button>
              <button className="border border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
