
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Package, Users, Facebook } from "lucide-react";

interface Artisan {
  id: string;
  name: string;
  name_fr: string;
  owner: string;
  owner_fr: string;
  region: string;
  region_fr: string;
  category: string;
  rating: number;
  reviews: number;
  products: number;
  followers: number;
  image: string;
  description: string;
  description_fr: string;
  established: string;
  badges: string[];
  socialMedia?: {
    facebook?: string;
  };
}

interface Props {
  artisan: Artisan;
}

const ArtisanCard = ({ artisan }: Props) => {
  if (artisan.id === "artisan-1") {
    return (
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
              {artisan.socialMedia?.facebook && (
                <a 
                  href={artisan.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-arabic py-2 px-4 rounded flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors"
                >
                  <Facebook size={16} />
                  <span>زيارة الصفحة</span>
                </a>
              )}
              <Link to="/shop/fatima-cook" className="block">
                <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                  تصفح المنتجات
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // باقي البطاقات
  return (
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
  );
};

export default ArtisanCard;
