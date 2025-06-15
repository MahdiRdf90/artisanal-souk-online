
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface FavoriteItem {
  id: number;
  name: string;
  vendor: string;
  price: number;
  image: string;
}

interface ProfileFavoritesProps {
  favorites: FavoriteItem[];
  formatPrice: (price: number) => string;
}

const ProfileFavorites = ({ favorites, formatPrice }: ProfileFavoritesProps) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold font-arabic text-heritage-brown">
      المنتجات المفضلة ({favorites.length})
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      {favorites.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-bold font-arabic text-heritage-brown text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-muted-foreground font-arabic mb-2">
                  {item.vendor}
                </p>
                <div className="text-sm font-bold text-craft-orange">
                  {formatPrice(item.price)} دج
                </div>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button size="sm" className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
                  إضافة للسلة
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className="text-red-500 fill-current" size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ProfileFavorites;
