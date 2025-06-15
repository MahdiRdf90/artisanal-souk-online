import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, MapPin, Package, Users, Search, Filter, Facebook } from 'lucide-react';

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  const artisans = [
    {
      id: 'artisan-1',
      name: 'الحرف الغذائية التقليدية',
      name_fr: 'Artisanat Alimentaire Traditionnel',
      owner: 'الحرفي المختص',
      owner_fr: 'Artisan Spécialisé',
      region: 'الجزائر',
      region_fr: 'Alger',
      category: 'حرف غذائية',
      rating: 4.9,
      reviews: 89,
      products: 15,
      followers: 456,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      description: 'متخصص في إعداد المأكولات الجزائرية التقليدية والمعجنات الأصيلة بالطرق التراثية',
      description_fr: 'Spécialisé dans la préparation de plats algériens traditionnels et pâtisseries authentiques',
      established: '2020',
      badges: ['تراث أصيل', 'مصنوع يدوياً', 'طبيعي'],
      socialMedia: {
        facebook: 'https://www.facebook.com/profile.php?id=100089482337990'
      }
    },
    {
      id: 'shop-1',
      name: 'ورشة فاطمة للقفطان',
      name_fr: 'Atelier Fatima Qaftan',
      owner: 'فاطمة بن علي',
      owner_fr: 'Fatima Ben Ali',
      region: 'تلمسان',
      region_fr: 'Tlemcen',
      category: 'نسيج وتطريز',
      rating: 4.8,
      reviews: 156,
      products: 24,
      followers: 890,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=400&h=300&fit=crop',
      description: 'متخصصة في صناعة القفطان التقليدي والتطريز اليدوي بخيوط الذهب والفضة',
      description_fr: 'Spécialisée dans la confection de qaftans traditionnels et broderie à la main',
      established: '2018',
      badges: ['مميز', 'توصيل سريع']
    },
    {
      id: 'shop-2',
      name: 'النحاس الأصيل',
      name_fr: 'Cuivre Authentique',
      owner: 'محمد الحداد',
      owner_fr: 'Mohamed El Haddad',
      region: 'قسنطينة',
      region_fr: 'Constantine',
      category: 'أشغال معدنية',
      rating: 4.9,
      reviews: 203,
      products: 18,
      followers: 654,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'حرفي متخصص في صناعة الأواني النحاسية التقليدية والمصابيح المنقوشة يدوياً',
      description_fr: 'Artisan spécialisé dans les ustensiles en cuivre et lampes gravées à la main',
      established: '2015',
      badges: ['حرفي معتمد', 'جودة عالية']
    },
    {
      id: 'shop-3',
      name: 'زرابي القبائل',
      name_fr: 'Tapis Kabyles',
      owner: 'عائشة أوراغ',
      owner_fr: 'Aicha Ourag',
      region: 'بجاية',
      region_fr: 'Béjaïa',
      category: 'نسيج وتطريز',
      rating: 5.0,
      reviews: 89,
      products: 31,
      followers: 1200,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'صانعة الزرابي القبائلية الأصيلة بالألوان الطبيعية والرموز التقليدية',
      description_fr: 'Créatrice de tapis kabyles authentiques aux couleurs naturelles',
      established: '2020',
      badges: ['منتج محلي', 'صديق للبيئة']
    },
    {
      id: 'shop-4',
      name: 'فخار غرداية',
      name_fr: 'Poterie Ghardaïa',
      owner: 'يوسف أمزيان',
      owner_fr: 'Youcef Ameziane',
      region: 'غرداية',
      region_fr: 'Ghardaïa',
      category: 'حرف طبيعية',
      rating: 4.7,
      reviews: 134,
      products: 42,
      followers: 567,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      description: 'حرفي متخصص في صناعة الفخار بالطرق التقليدية وزخرفته بالألوان الطبيعية',
      description_fr: 'Artisan spécialisé dans la poterie traditionnelle et décoration naturelle',
      established: '2017',
      badges: ['تراث أصيل', 'مصنوع يدوياً']
    }
  ];

  const regions = ['الكل', 'الجزائر', 'تلمسان', 'قسنطينة', 'بجاية', 'غرداية', 'وهران', 'عنابة'];
  const categories = ['الكل', 'نسيج وتطريز', 'أشغال معدنية', 'حرف طبيعية', 'مجوهرات وزينة', 'حرف غذائية'];

  // فلترة الحرفيين حسب البحث/الصنف/المنطقة
  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.name_fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || artisan.region === selectedRegion;
    const matchesCategory = selectedCategory === 'all' || artisan.category === selectedCategory;
    return matchesSearch && matchesRegion && matchesCategory;
  });

  // دوال تغيير Tabs التصنيف
  const handleCategoryTab = (category: string) => {
    setSelectedCategory(category === 'الكل' ? 'all' : category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-sand-beige py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-arabic text-heritage-brown mb-4">
            تصفح الحرفيين
          </h1>
          <h2 className="text-2xl font-semibold text-clay-brown mb-6">
            Découvrir les Artisans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            اكتشف أمهر الحرفيين الجزائريين وتسوق مباشرة من ورشهم الأصيلة
          </p>
          
          {/* Tabs للأصناف بشكل بارز */}
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryTab(category)}
                className={
                  "px-4 py-2 font-arabic rounded-full transition border text-lg font-bold " +
                  (selectedCategory === (category === 'الكل' ? 'all' : category)
                    ? 'bg-craft-orange text-white border-craft-orange shadow'
                    : 'bg-white text-heritage-brown border-gray-300 hover:bg-craft-orange/10')}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="البحث عن حرفي..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-arabic"
                />
              </div>
              <select
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-input bg-background rounded-md font-arabic"
              >
                {regions.map(region => (
                  <option key={region} value={region === 'الكل' ? 'all' : region}>{region}</option>
                ))}
              </select>
              {/* أخفينا select التصنيف لأنها أصبحت ضمن التبويبات */}
              <div className="hidden md:block"></div>
              <Button className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
                <Filter size={18} className="mr-2" />
                تصفية
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-muted-foreground font-arabic">
              {filteredArtisans.length} حرفي موجود
            </p>
          </div>
          {/* يمكن لاحقًا تفعيل الترتيب حسب معايير أخرى */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
            <select className="px-3 py-1 border border-input bg-background rounded font-arabic text-sm">
              <option>الأعلى تقييماً</option>
              <option>الأكثر مبيعاً</option>
              <option>الأحدث</option>
              <option>الأقرب</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map(artisan => (
            <div key={artisan.id}>
              {artisan.id === 'artisan-1' ? (
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={artisan.image}
                      alt={artisan.name_fr}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 space-x-2 rtl:space-x-reverse">
                      {artisan.badges.map((badge, index) => (
                        <Badge key={index} className="bg-craft-orange text-white font-arabic text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-1">
                          {artisan.name}
                        </h3>
                        <p className="text-clay-brown font-medium mb-2">
                          {artisan.name_fr}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          <span className="font-arabic">{artisan.region}</span>
                          <span>•</span>
                          <span>{artisan.region_fr}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="font-semibold">{artisan.rating}</span>
                          <span className="text-sm text-muted-foreground">({artisan.reviews})</span>
                        </div>
                        <Badge variant="secondary" className="font-arabic">
                          {artisan.category}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <Package size={16} className="text-craft-orange" />
                          </div>
                          <div className="font-semibold">{artisan.products}</div>
                          <div className="text-xs text-muted-foreground font-arabic">منتج</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <Users size={16} className="text-craft-orange" />
                          </div>
                          <div className="font-semibold">{artisan.followers}</div>
                          <div className="text-xs text-muted-foreground font-arabic">متابع</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center mb-1">
                            <span className="text-craft-orange">📅</span>
                          </div>
                          <div className="font-semibold">{artisan.established}</div>
                          <div className="text-xs text-muted-foreground font-arabic">التأسيس</div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground font-arabic line-clamp-2">
                        {artisan.description}
                      </p>

                      <div className="space-y-2">
                        <a 
                          href={artisan.socialMedia?.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-arabic py-2 px-4 rounded flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors"
                        >
                          <Facebook size={16} />
                          <span>زيارة الصفحة</span>
                        </a>
                        <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                          تصفح المنتجات
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Link to={`/shop/${artisan.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={artisan.image}
                        alt={artisan.name_fr}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 space-x-2 rtl:space-x-reverse">
                        {artisan.badges.map((badge, index) => (
                          <Badge key={index} className="bg-craft-orange text-white font-arabic text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-1">
                            {artisan.name}
                          </h3>
                          <p className="text-clay-brown font-medium mb-2">
                            {artisan.name_fr}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin size={14} />
                            <span className="font-arabic">{artisan.region}</span>
                            <span>•</span>
                            <span>{artisan.region_fr}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400 fill-current" size={16} />
                            <span className="font-semibold">{artisan.rating}</span>
                            <span className="text-sm text-muted-foreground">({artisan.reviews})</span>
                          </div>
                          <Badge variant="secondary" className="font-arabic">
                            {artisan.category}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center text-sm">
                          <div>
                            <div className="flex items-center justify-center mb-1">
                              <Package size={16} className="text-craft-orange" />
                            </div>
                            <div className="font-semibold">{artisan.products}</div>
                            <div className="text-xs text-muted-foreground font-arabic">منتج</div>
                          </div>
                          <div>
                            <div className="flex items-center justify-center mb-1">
                              <Users size={16} className="text-craft-orange" />
                            </div>
                            <div className="font-semibold">{artisan.followers}</div>
                            <div className="text-xs text-muted-foreground font-arabic">متابع</div>
                          </div>
                          <div>
                            <div className="flex items-center justify-center mb-1">
                              <span className="text-craft-orange">📅</span>
                            </div>
                            <div className="font-semibold">{artisan.established}</div>
                            <div className="text-xs text-muted-foreground font-arabic">التأسيس</div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground font-arabic line-clamp-2">
                          {artisan.description}
                        </p>

                        <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                          زيارة الورشة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Artisans;
