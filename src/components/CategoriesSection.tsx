import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name_ar: 'الحرف اليدوية المعتمدة على المواد الطبيعية',
      name_fr: 'Artisanat Basé sur Matériaux Naturels',
      description: 'خشب، فخار، حجر، نباتات، جلد',
      description_fr: 'Bois, poterie, pierre, plantes, cuir',
      icon: '🌿',
      color: 'from-green-400 to-emerald-600',
      count: 145,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name_ar: 'الحرف النسيجية والخياطة',
      name_fr: 'Artisanat Textile et Couture',
      description: 'تطريز، نسيج، خياطة تقليدية',
      description_fr: 'Broderie, tissage, couture traditionnelle',
      icon: '🧶',
      color: 'from-purple-400 to-indigo-600',
      count: 98,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name_ar: 'الحرف الزخرفية والتزيينية',
      name_fr: 'Artisanat Décoratif et Ornemental',
      description: 'مجوهرات، زخرفة، دمى وزينة',
      description_fr: 'Bijoux, décoration, poupées et ornements',
      icon: '💎',
      color: 'from-pink-400 to-rose-600',
      count: 87,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name_ar: 'الحرف المعدنية',
      name_fr: 'Artisanat Métallique',
      description: 'حدادة، نقش نحاس، صياغة',
      description_fr: 'Forge, gravure cuivre, orfèvrerie',
      icon: '🔨',
      color: 'from-amber-400 to-orange-600',
      count: 76,
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name_ar: 'الحرف الغذائية التقليدية',
      name_fr: 'Artisanat Alimentaire Traditionnel',
      description: 'خبز، حلويات، جبن، توابل',
      description_fr: 'Pain, pâtisseries, fromage, épices',
      icon: '🍯',
      color: 'from-yellow-400 to-amber-600',
      count: 65,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name_ar: 'الحرف التجميلية والعطرية',
      name_fr: 'Artisanat Cosmétique et Parfumerie',
      description: 'صابون، زيوت، عطور طبيعية',
      description_fr: 'Savons, huiles, parfums naturels',
      icon: '🌸',
      color: 'from-green-400 to-teal-600',
      count: 54,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 7,
      name_ar: 'حرف فنية حديثة أو هجينة',
      name_fr: 'Artisanat Artistique Moderne',
      description: 'إعادة تدوير، ريزن آرت، موزاييك',
      description_fr: 'Recyclage, résine art, mosaïque',
      icon: '🎨',
      color: 'from-indigo-400 to-purple-600',
      count: 43,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden h-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Category Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name_ar}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden flex-grow`}>
                    <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                      {category.icon}
                    </div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-3">{category.icon}</div>
                      <h4 className="text-lg font-bold font-arabic mb-2 line-clamp-2">
                        {category.name_ar}
                      </h4>
                      <p className="text-white/90 font-medium text-sm mb-3 line-clamp-2">
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
                  <div className="p-4 flex-grow">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground font-arabic line-clamp-2">
                        {category.description}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
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
            </Link>
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
              <Link to="/register">
                <button className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-3 rounded-lg font-arabic font-semibold transition-colors">
                  سجل كحرفي
                </button>
              </Link>
              <Link to="/about">
                <button className="border border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  اعرف المزيد
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
