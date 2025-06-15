
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface ArtisansFilterBarProps {
  categories: string[];
  regions: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const ArtisansFilterBar = ({
  categories,
  regions,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  searchTerm,
  setSearchTerm,
}: ArtisansFilterBarProps) => {
  // دوال تغيير Tabs التصنيف
  const handleCategoryTab = (category: string) => {
    setSelectedCategory(category === "الكل" ? "all" : category);
  };

  return (
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
            <div className="hidden md:block"></div>
            <Button className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
              <Filter size={18} className="mr-2" />
              تصفية
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisansFilterBar;
