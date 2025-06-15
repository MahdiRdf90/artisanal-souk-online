
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHistory from '@/components/products/ProductHistory';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, ShoppingCart, Minus, Plus, MapPin, Clock } from 'lucide-react';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(products.find(p => p.id === productId));

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} units of ${product?.name_ar} to cart`);
    // هنا يمكن إضافة منطق إضافة المنتج للسلة
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartItemsCount={0} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold font-arabic text-heritage-brown mb-4">
            المنتج غير موجود
          </h1>
          <Link to="/shop">
            <Button className="bg-craft-orange hover:bg-craft-orange/90">
              العودة للمتجر
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      {/* Breadcrumb */}
      <div className="bg-sand-beige py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-craft-orange">الرئيسية</Link>
            <ChevronRight size={16} />
            <Link to="/shop" className="hover:text-craft-orange">المتجر</Link>
            <ChevronRight size={16} />
            <span className="text-heritage-brown font-arabic">{product.name_ar}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
              <img 
                src={product.image} 
                alt={product.name_ar}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
                {product.name_ar}
              </h1>
              <h2 className="text-xl text-clay-brown mb-4">
                {product.name_fr}
              </h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl font-bold text-craft-orange">
                  {product.price} دج / {product.unit}
                </div>
                {product.available ? (
                  <Badge className="bg-green-100 text-green-800">
                    متوفر
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    غير متوفر
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground font-arabic leading-relaxed mb-6">
                {product.description_ar}
              </p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.origin && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-craft-orange" />
                    <div>
                      <p className="text-sm text-muted-foreground">المنشأ</p>
                      <p className="font-arabic font-medium">{product.origin}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-craft-orange" />
                  <div>
                    <p className="text-sm text-muted-foreground">التوصيل</p>
                    <p className="font-arabic font-medium">2-3 أيام عمل</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-6">
                  <h3 className="font-semibold font-arabic text-heritage-brown mb-2">
                    المكونات:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="secondary" className="font-arabic">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium font-arabic">الكمية:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  <span className="text-muted-foreground font-arabic">{product.unit}</span>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={handleAddToCart}
                    disabled={!product.available}
                    className="flex-1 bg-craft-orange hover:bg-craft-orange/90"
                    size="lg"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    أضف للسلة - {(product.price * quantity).toLocaleString()} دج
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product History Section */}
        <ProductHistory productName={product.name_ar} />

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-craft-orange text-3xl mb-3">🚚</div>
              <h3 className="font-semibold font-arabic mb-2">توصيل مجاني</h3>
              <p className="text-sm text-muted-foreground font-arabic">
                للطلبات أكثر من 3000 دج
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-craft-orange text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold font-arabic mb-2">ضمان الجودة</h3>
              <p className="text-sm text-muted-foreground font-arabic">
                منتجات تقليدية أصيلة 100%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-craft-orange text-3xl mb-3">💬</div>
              <h3 className="font-semibold font-arabic mb-2">دعم العملاء</h3>
              <p className="text-sm text-muted-foreground font-arabic">
                خدمة عملاء 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
