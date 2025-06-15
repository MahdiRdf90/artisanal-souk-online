
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsGrid from '@/components/products/ProductsGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid3X3, List } from 'lucide-react';

const Shop = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extract category from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(decodeURIComponent(categoryFromUrl));
    }
  }, [location.search]);

  const categories = [
    'الحلويات التقليدية',
    'الحرف اليدوية المعتمدة على المواد الطبيعية',
    'الحرف النسيجية والخياطة',
    'الحرف الزخرفية والتزيينية',
    'الحرف المعدنية',
    'الحرف التجميلية والعطرية',
    'حرف فنية حديثة أو هجينة'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      {/* Hero Section */}
      <div className="bg-sand-beige py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-arabic text-heritage-brown mb-4">
              متجر الحرف التقليدية
            </h1>
            <h2 className="text-2xl font-semibold text-clay-brown mb-4">
              Boutique d'Artisanat Traditionnel
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              اكتشف مجموعتنا الرائعة من المنتجات التراثية الجزائرية الأصيلة
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="ابحث عن المنتجات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-arabic"
                />
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

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === '' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('')}
                className={selectedCategory === '' ? 'bg-craft-orange hover:bg-craft-orange/90' : ''}
              >
                جميع الأصناف
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-craft-orange hover:bg-craft-orange/90 font-arabic' : 'font-arabic'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold font-arabic text-heritage-brown mb-2">
              المنتجات المتوفرة
            </h3>
            {selectedCategory && (
              <Badge variant="secondary" className="font-arabic">
                {selectedCategory}
              </Badge>
            )}
          </div>
        </div>

        <ProductsGrid category={selectedCategory || undefined} />

        {/* Featured Product Highlight */}
        {selectedCategory === 'الحلويات التقليدية' && (
          <div className="mt-16 bg-sand-beige rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-arabic text-heritage-brown mb-4">
                منتجات مميزة - الحلويات التقليدية
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto font-arabic">
                جرب طعم التراث الأصيل مع حلوياتنا المصنوعة حسب الوصفات التقليدية الجزائرية
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
