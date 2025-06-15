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
      id: '1',
      name_ar: 'الحرف اليدوية المعتمدة على المواد الطبيعية',
      name_fr: 'Artisanat Basé sur Matériaux Naturels',
      icon: '🌿',
      color: 'from-green-400 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'wood-crafts',
          name_ar: 'الحرف الخشبية',
          name_fr: 'Artisanat du Bois',
          count: 45,
          image: '/lovable-uploads/d236cb59-dae9-4202-9d60-cb1c5c62a59d.png',
          items: ['النقش على الخشب', 'صناعة الأثاث اليدوي', 'صناعة العرائس الخشبية', 'النحت الخشبي', 'صناعة الأقواس والسهام']
        },
        {
          id: 'pottery-crafts',
          name_ar: 'الحرف الطينية والفخارية',
          name_fr: 'Poterie et Céramique',
          count: 38,
          image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=200&fit=crop&crop=center',
          items: ['صناعة الفخار', 'صناعة الخزف', 'صناعة الطوب التقليدي', 'صناعة التماثيل الطينية']
        },
        {
          id: 'stone-crafts',
          name_ar: 'الحرف الحجرية',
          name_fr: 'Artisanat de Pierre',
          count: 25,
          image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop&crop=center',
          items: ['النحت على الحجر', 'الفسيفساء', 'البناء التقليدي بالحجر']
        },
        {
          id: 'plant-crafts',
          name_ar: 'الحرف النباتية',
          name_fr: 'Artisanat Végétal',
          count: 22,
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center',
          items: ['الحصير والسلال من سعف النخيل', 'الحبال من ألياف جوز الهند أو القنب', 'الورق اليدوي من النباتات', 'الزهور المجففة والمضغوطة']
        },
        {
          id: 'leather-crafts',
          name_ar: 'الحرف الجلدية',
          name_fr: 'Maroquinerie',
          count: 15,
          image: '/lovable-uploads/8d1a4659-8e4a-484b-b2a5-02b9002daa37.png',
          items: ['صناعة الأحذية التقليدية (البلغة، الصندل...)', 'الحقائب والمحافظ', 'الأحزمة', 'تغليف الكتب بالجلد']
        }
      ]
    },
    {
      id: '2',
      name_ar: 'الحرف النسيجية والخياطة',
      name_fr: 'Artisanat Textile et Couture',
      icon: '🧶',
      color: 'from-purple-400 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'embroidery-weaving',
          name_ar: 'التطريز والنسيج',
          name_fr: 'Broderie et Tissage',
          count: 55,
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center',
          items: ['التطريز اليدوي (فلسطيني، جزائري، مكسيكي...)', 'النسيج اليدوي (السدو، القماش الكشميري، الصوف...)', 'السجاد التقليدي (الزرابي الأمازيغية، البخارى، الكليم)', 'الكروشيه', 'الكانافا (نسيج شبكي)']
        },
        {
          id: 'traditional-sewing',
          name_ar: 'الخياطة والملابس التقليدية',
          name_fr: 'Couture et Vêtements Traditionnels',
          count: 43,
          image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop&crop=center',
          items: ['خياطة الملابس التقليدية (القفطان، الكيمونو، الساري...)', 'تطريز الجلابيات والأوشحة', 'صناعة القبعات التقليدية']
        }
      ]
    },
    {
      id: '3',
      name_ar: 'الحرف الزخرفية والتزيينية',
      name_fr: 'Artisanat Décoratif et Ornemental',
      icon: '💎',
      color: 'from-pink-400 to-rose-600',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'jewelry',
          name_ar: 'المجوهرات',
          name_fr: 'Bijouterie',
          count: 34,
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center',
          items: ['صناعة الحلي التقليدية', 'النقش على الفضة', 'التطعيم بالأحجار الكريمة', 'الخرز اليدوي']
        },
        {
          id: 'decoration-painting',
          name_ar: 'الزخرفة والرسم',
          name_fr: 'Décoration et Peinture',
          count: 28,
          image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=200&fit=crop&crop=center',
          items: ['الزخرفة الإسلامية', 'المنمنمات', 'الرسم بالرمل', 'الرسم بالحناء']
        },
        {
          id: 'dolls-ornaments',
          name_ar: 'صناعة الدمى والزينة',
          name_fr: 'Poupées et Ornements',
          count: 25,
          image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&h=200&fit=crop&crop=center',
          items: ['صناعة الدمى القماشية', 'التزيين الموسمي (عيدي، رمضاني...)']
        }
      ]
    },
    {
      id: '4',
      name_ar: 'الحرف المعدنية',
      name_fr: 'Artisanat Métallique',
      icon: '🔨',
      color: 'from-amber-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'metalwork',
          name_ar: 'الأشغال المعدنية',
          name_fr: 'Travaux Métalliques',
          count: 76,
          image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=300&h=200&fit=crop&crop=center',
          items: ['الحدادة التقليدية', 'النقش على النحاس', 'صناعة الأدوات الزراعية', 'صناعة الأسلحة التقليدية', 'صناعة المصابيح المعدنية', 'صياغة المجوهرات الذهبية']
        }
      ]
    },
    {
      id: '5',
      name_ar: 'الصناعات الغذائية التقليدية',
      name_fr: 'Industries Alimentaires Traditionnelles',
      icon: '🍯',
      color: 'from-yellow-400 to-amber-600',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'traditional-food',
          name_ar: 'الصناعات الغذائية التقليدية',
          name_fr: 'Industries Alimentaires Traditionnelles',
          count: 1,
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&crop=center',
          items: ['كحلوشي', 'صناعة الخبز التقليدي', 'الحلويات اليدوية', 'الجبن التقليدي', 'التوابل المطحونة يدويًا']
        }
      ]
    },
    {
      id: '6',
      name_ar: 'الحرف التجميلية والعطرية',
      name_fr: 'Artisanat Cosmétique et Parfumerie',
      icon: '🌸',
      color: 'from-green-400 to-teal-600',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'cosmetics-perfumes',
          name_ar: 'المستحضرات التجميلية والعطرية',
          name_fr: 'Cosmétiques et Parfums',
          count: 54,
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center',
          items: ['صناعة الصابون الطبيعي', 'استخلاص الزيوت النباتية والعطرية', 'العطور التقليدية (مثل دهن العود، المسك)', 'مستحضرات تجميل طبيعية (من الأعشاب والطين)']
        }
      ]
    },
    {
      id: '7',
      name_ar: 'حرف فنية حديثة أو هجينة',
      name_fr: 'Artisanat Artistique Moderne',
      icon: '🎨',
      color: 'from-indigo-400 to-purple-600',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center',
      subcategories: [
        {
          id: 'modern-arts',
          name_ar: 'الفنون الحديثة والهجينة',
          name_fr: 'Arts Modernes et Hybrides',
          count: 43,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center',
          items: ['إعادة تدوير الزجاجات والبلاستيك', 'تصميم المنتجات من الكرتون المعاد', 'الطباعة على القماش', 'الريزن آرت (فن الإيبوكسي)', 'الشمع اليدوي', 'فن الكولاج', 'فن الموزاييك الزجاجي']
        }
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mainCategories.map((category) => (
                <Link key={category.id} to={`/categories/${category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name_ar}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden flex-grow`}>
                        <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                          {category.icon}
                        </div>
                        <div className="relative z-10">
                          <div className="text-4xl mb-3">{category.icon}</div>
                          <h3 className="text-lg font-bold font-arabic mb-2 line-clamp-2">
                            {category.name_ar}
                          </h3>
                          <p className="text-white/90 font-medium text-sm line-clamp-2">
                            {category.name_fr}
                          </p>
                          <div className="mt-3">
                            <span className="text-white/80 text-sm">
                              {category.subcategories.reduce((sum, sub) => sum + sub.count, 0)} منتج
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-heritage-brown mb-3 text-sm">الأقسام الفرعية:</h4>
                          <div className="flex flex-wrap gap-1">
                            {category.subcategories.slice(0, 2).map((sub) => (
                              <Badge key={sub.id} variant="secondary" className="text-xs">
                                {sub.name_ar}
                              </Badge>
                            ))}
                            {category.subcategories.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{category.subcategories.length - 2} المزيد
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
                  <Card key={subcategory.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={subcategory.image} 
                          alt={subcategory.name_ar}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-1">
                              {subcategory.name_ar}
                            </h3>
                            <p className="text-clay-brown mb-2">{subcategory.name_fr}</p>
                            <p className="text-sm text-muted-foreground mb-3">
                              {subcategory.count} منتج متوفر
                            </p>
                          </div>
                          <ChevronRight className="text-craft-orange mt-1" size={20} />
                        </div>
                        
                        {subcategory.items && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-heritage-brown">العناصر المتوفرة:</h4>
                            <div className="flex flex-wrap gap-1">
                              {subcategory.items.slice(0, 3).map((item, index) => (
                                <Badge key={index} variant="outline" className="text-xs font-arabic">
                                  {item}
                                </Badge>
                              ))}
                              {subcategory.items.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{subcategory.items.length - 3} المزيد
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
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
