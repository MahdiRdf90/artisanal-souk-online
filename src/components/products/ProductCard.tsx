
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: string;
  name_ar: string;
  name_fr: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  description_ar?: string;
  description_fr?: string;
  available?: boolean;
  shopId?: string;
  shopName?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name_ar}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive" className="text-white">
                غير متوفر
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-1">
              {product.name_ar}
            </h3>
            <p className="text-clay-brown text-sm mb-2">{product.name_fr}</p>

            {/* اسم المتجر كرابط */}
            {product.shopId && product.shopName && (
              <Link to={`/shop/${product.shopId}`} className="text-xs text-craft-orange hover:underline font-arabic mb-2 block">
                {product.shopName}
              </Link>
            )}

            {product.description_ar && (
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2 font-arabic">
                {product.description_ar}
              </p>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className="text-craft-orange font-bold text-lg">
                {product.price} دج / {product.unit}
              </div>
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Link to={`/product/${product.id}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <Eye size={16} className="mr-2" />
                تفاصيل
              </Button>
            </Link>
            <Button 
              onClick={handleAddToCart}
              disabled={!product.available}
              size="sm"
              className="flex-1 bg-craft-orange hover:bg-craft-orange/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={16} className="mr-2" />
              أضف للسلة
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
