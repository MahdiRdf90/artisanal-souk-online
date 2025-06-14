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
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'pottery', name_ar: 'فخار', name_fr: 'Poterie', count: 45, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop&crop=center' },
        { id: 'wood', name_ar: 'خشب', name_fr: 'Bois', count: 32, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'stone', name_ar: 'حجر', name_fr: 'Pierre', count: 18, image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=200&h=150&fit=crop&crop=center' },
        { id: 'leather', name_ar: 'جلد', name_fr: 'Cuir', count: 25, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'plants', name_ar: 'نباتات', name_fr: 'Plantes', count: 15, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' }
      ]
    },
    {
      id: 'textiles',
      name_ar: 'نسيج وتطريز',
      name_fr: 'Textile & Broderie',
      icon: '🧶',
      color: 'from-purple-400 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'qaftan', name_ar: 'قفطان', name_fr: 'Qaftan', count: 28, image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=150&fit=crop&crop=center' },
        { id: 'carpets', name_ar: 'زرابي', name_fr: 'Tapis', count: 35, image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=150&fit=crop&crop=center' },
        { id: 'embroidery', name_ar: 'تطريز', name_fr: 'Broderie', count: 42, image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=150&fit=crop&crop=center' },
        { id: 'traditional-wear', name_ar: 'ملابس تقليدية', name_fr: 'Vêtements Traditionnels', count: 67, image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=150&fit=crop&crop=center' },
        { id: 'fabrics', name_ar: 'أقمشة', name_fr: 'Tissus', count: 23, image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=150&fit=crop&crop=center' }
      ]
    },
    {
      id: 'jewelry',
      name_ar: 'مجوهرات وزينة',
      name_fr: 'Bijoux & Décoration',
      icon: '💎',
      color: 'from-pink-400 to-rose-600',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'silver-jewelry', name_ar: 'مجوهرات فضية', name_fr: 'Bijoux en Argent', count: 34, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'berber-jewelry', name_ar: 'مجوهرات أمازيغية', name_fr: 'Bijoux Berbères', count: 28, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'henna', name_ar: 'حناء', name_fr: 'Henné', count: 15, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'decorative', name_ar: 'زينة', name_fr: 'Décoration', count: 41, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' },
        { id: 'accessories', name_ar: 'إكسسوارات', name_fr: 'Accessoires', count: 22, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop&crop=center' }
      ]
    },
    {
      id: 'metalwork',
      name_ar: 'أشغال معدنية',
      name_fr: 'Travaux Métalliques',
      icon: '🔨',
      color: 'from-amber-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'copper', name_ar: 'نحاس', name_fr: 'Cuivre', count: 56, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center' },
        { id: 'iron', name_ar: 'حديد', name_fr: 'Fer', count: 23, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center' },
        { id: 'lamps', name_ar: 'مصابيح', name_fr: 'Lampes', count: 34, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center' },
        { id: 'tools', name_ar: 'أدوات', name_fr: 'Outils', count: 18, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center' },
        { id: 'decorative-metal', name_ar: 'زينة معدنية', name_fr: 'Métal Décoratif', count: 29, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center' }
      ]
    },
    {
      id: 'food-crafts',
      name_ar: 'حرف غذائية',
      name_fr: 'Artisanat Alimentaire',
      icon: '🍯',
      color: 'from-yellow-400 to-amber-600',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'bread', name_ar: 'خبز', name_fr: 'Pain', count: 12, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=150&fit=crop&crop=center' },
        { id: 'sweets', name_ar: 'حلويات', name_fr: 'Pâtisseries', count: 45, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=150&fit=crop&crop=center' },
        { id: 'cheese', name_ar: 'جبن', name_fr: 'Fromage', count: 8, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=150&fit=crop&crop=center' },
        { id: 'preserves', name_ar: 'مربى', name_fr: 'Confitures', count: 23, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=150&fit=crop&crop=center' },
        { id: 'spices', name_ar: 'توابل', name_fr: 'Épices', count: 34, image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=150&fit=crop&crop=center' }
      ]
    },
    {
      id: 'cosmetics',
      name_ar: 'مستحضرات طبيعية',
      name_fr: 'Cosmétiques Naturels',
      icon: '🌸',
      color: 'from-green-400 to-teal-600',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        { id: 'soaps', name_ar: 'صابون', name_fr: 'Savons', count: 28, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' },
        { id: 'oils', name_ar: 'زيوت', name_fr: 'Huiles', count: 22, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' },
        { id: 'perfumes', name_ar: 'عطور', name_fr: 'Parfums', count: 15, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' },
        { id: 'creams', name_ar: 'كريمات', name_fr: 'Crèmes', count: 18, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' },
        { id: 'herbs', name_ar: 'أعشاب', name_fr: 'Herbes', count: 25, image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop&crop=center' }
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
                      {/* Category Image */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name_ar}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
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
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                      <CardContent className="p-0">
                        {/* Subcategory Image */}
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={subcategory.image} 
                            alt={subcategory.name_ar}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-6">
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
