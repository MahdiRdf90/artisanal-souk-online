import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtisanCard from "./artisans/ArtisanCard";
import ArtisansFilterBar from "./artisans/ArtisansFilterBar";

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  const artisans = [
    {
      id: 'artisan-1',
      name: 'Fatima cook',
      name_fr: 'Fatima Cook',
      owner: 'الحرفي المختص',
      owner_fr: 'Artisan Spécialisé',
      region: 'سطيف',
      region_fr: 'Sétif',
      category: 'حرف غذائية',
      rating: 4.9,
      reviews: 89,
      products: 15,
      followers: 456,
      image: '/lovable-uploads/4da720f7-b770-4338-9b8d-5f8dfb0680e1.png',
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ArtisansFilterBar
        categories={categories}
        regions={regions}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-muted-foreground font-arabic">
              {filteredArtisans.length} حرفي موجود
            </p>
          </div>
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
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artisans;
