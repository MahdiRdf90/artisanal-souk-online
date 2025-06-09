
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Grid3X3, List } from 'lucide-react';

const Categories = () => {
  const { categoryId } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const mainCategories = [
    {
      id: 'natural-crafts',
      name_ar: 'حرف طبيعية',
      name_fr: 'Artisanat Naturel',
      icon: '🌿',
      color: 'from-green-400 to-emerald-600',
      subcategories: [
        { id: 'pottery', name_ar: 'فخار', name_fr: 'Poterie', count: 45 },
        { id: 'wood', name_ar: 'خشب', name_fr: 'Bois', count: 32 },
        { id: 'stone', name_ar: 'حجر', name_fr: 'Pierre', count: 18 },
        { id: 'leather', name_ar: 'جلد', name_fr: 'Cuir', count: 25 },
        { id: 'plants', name_ar: 'نباتات', name_fr: 'Plantes', count: 15 }
      ]
    },
    {
      id: 'textiles',
      name_ar: 'نسيج وتطريز',
      name_fr: 'Textile & Broderie',
      icon: '🧶',
      color: 'from-purple-400 to-indigo-600',
      subcategories: [
        { id: 'qaftan', name_ar: 'قفطان', name_fr: 'Qaftan', count: 28 },
        { id: 'carpets', name_ar: 'زرابي', name_fr: 'Tapis', count: 35 },
        { id: 'embroidery', name_ar: 'تطريز', name_fr: 'Broderie', count: 42 },
        { id: 'traditional-wear', name_ar: 'ملابس تقليدية', name_fr: 'Vêtements Traditionnels', count: 67 },
        { id: 'fabrics', name_ar: 'أقمشة', name_fr: 'Tissus', count: 23 }
      ]
    },
    {
      id: 'jewelry',
      name_ar: 'مجوهرات وزينة',
      name_fr: 'Bijoux & Décoration',
      icon: '💎',
      color: 'from-pink-400 to-rose-600',
      subcategories: [
        { id: 'silver-jewelry', name_ar: 'مجوهرات فضية', name_fr: 'Bijoux en Argent', count: 34 },
        { id: 'berber-jewelry', name_ar: 'مجوهرات أمازيغية', name_fr: 'Bijoux Berbères', count: 28 },
        { id: 'henna', name_ar: 'حناء', name_fr: 'Henné', count: 15 },
        { id: 'decorative', name_ar: 'زينة', name_fr: 'Décoration', count: 41 },
        { id: 'accessories', name_ar: 'إكسسوارات', name_fr: 'Accessoires', count: 22 }
      ]
    },
    {
      id: 'metalwork',
      name_ar: 'أشغال معدنية',
      name_fr: 'Travaux Métalliques',
      icon: '🔨',
      color: 'from-amber-400 to-orange-600',
      subcategories: [
        { id: 'copper', name_ar: 'نحاس', name_fr: 'Cuivre', count: 56 },
        { id: 'iron', name_ar: 'حديد', name_fr: 'Fer', count: 23 },
        { id: 'lamps', name_ar: 'مصابيح', name_fr: 'Lampes', count: 34 },
        { id: 'tools', name_ar: 'أدوات', name_fr: 'Outils', count: 18 },
        { id: 'decorative-metal', name_ar: 'زينة معدنية', name_fr: 'Métal Décoratif', count: 29 }
      ]
    },
    {
      id: 'food-crafts',
      name_ar: 'حرف غذائية',
      name_fr: 'Artisanat Alimentaire',
      icon: '🍯',
      color: 'from-yellow-400 to-amber-600',
      subcategories: [
        { id: 'bread', name_ar: 'خبز', name_fr: 'Pain', count: 12 },
        { id: 'sweets', name_ar: 'حلويات', name_fr: 'Pâtisseries', count: 45 },
        { id: 'cheese', name_ar: 'جبن', name_fr: 'Fromage', count: 8 },
        { id: 'preserves', name_ar: 'مربى', name_fr: 'Confitures', count: 23 },
        { id: 'spices', name_ar: 'توابل', name_fr: 'Épices', count: 34 }
      ]
    },
    {
      id: 'cosmetics',
      name_ar: 'مستحضرات طبيعية',
      name_fr: 'Cosmétiques Naturels',
      icon: '🌸',
      color: 'from-green-400 to-teal-600',
      subcategories: [
        { id: 'soaps', name_ar: 'صابون', name_fr: 'Savons', count: 28 },
        { id: 'oils', name_ar: 'زيوت', name_fr: 'Huiles', count: 22 },
        { id: 'perfumes', name_ar: 'عطور', name_fr: 'Parfums', count: 15 },
        { id: 'creams', name_ar: 'كريمات', name_fr: 'Crèmes', count: 18 },
        { id: 'herbs', name_ar: 'أعشاب', name_fr: 'Herbes', count: 25 }
      ]
    }
  ];

  const selectedCategory = mainCategories.find(cat => cat.id === categoryId);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      {/* Breadcrumb */}
      <div className="bg-sand-beige py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-craft-orange">الرئيسية</Link>
            <ChevronRight size={16} />
            <Link to="/categories" className="hover:text-craft-orange">الأصناف</Link>
            {selectedCategory && (
              <>
                <ChevronRight size={16} />
                <span className="text-heritage-brown font-arabic">{selectedCategory.name_ar}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!categoryId ? (
          // Main Categories View
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-arabic text-heritage-brown mb-4">
                تصفح الأصناف
              </h1>
              <h2 className="text-2xl font-semibold text-clay-brown mb-4">
                Parcourir les Catégories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                اكتشف مجموعتنا الواسعة من الحرف التقليدية الجزائرية المنظمة في أصناف مختلفة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories.map((category) => (
                <Link key={category.id} to={`/categories/${category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                          {category.icon}
                        </div>
                        <div className="relative z-10">
                          <div className="text-4xl mb-3">{category.icon}</div>
                          <h3 className="text-xl font-bold font-arabic mb-2">
                            {category.name_ar}
                          </h3>
                          <p className="text-white/90 font-medium">
                            {category.name_fr}
                          </p>
                          <div className="mt-3">
                            <span className="text-white/80 text-sm">
                              {category.subcategories.reduce((sum, sub) => sum + sub.count, 0)} منتج
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-heritage-brown mb-3">الأقسام الفرعية:</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.subcategories.slice(0, 3).map((sub) => (
                              <Badge key={sub.id} variant="secondary" className="text-xs">
                                {sub.name_ar}
                              </Badge>
                            ))}
                            {category.subcategories.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{category.subcategories.length - 3} المزيد
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        ) : (
          // Category Detail View
          selectedCategory && (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
                    {selectedCategory.name_ar}
                  </h1>
                  <h2 className="text-xl text-clay-brown mb-4">
                    {selectedCategory.name_fr}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedCategory.subcategories.reduce((sum, sub) => sum + sub.count, 0)} منتج متوفر
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="bg-craft-orange hover:bg-craft-orange/90"
                  >
                    <Grid3X3 size={16} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="bg-craft-orange hover:bg-craft-orange/90"
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>

              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {selectedCategory.subcategories.map((subcategory) => (
                  <Link key={subcategory.id} to={`/categories/${categoryId}/${subcategory.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-1">
                              {subcategory.name_ar}
                            </h3>
                            <p className="text-clay-brown mb-2">{subcategory.name_fr}</p>
                            <p className="text-sm text-muted-foreground">
                              {subcategory.count} منتج متوفر
                            </p>
                          </div>
                          <ChevronRight className="text-craft-orange" size={20} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
