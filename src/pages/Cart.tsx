
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            سلة المشتريات
          </h1>
          <h2 className="text-xl text-clay-brown mb-4">
            Panier d'Achats
          </h2>
          <p className="text-muted-foreground">
            لديك {totalItems} منتج
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-2">
                السلة فارغة
              </h3>
              <p className="text-muted-foreground mb-6">
                لم تقم بإضافة أي منتجات إلى سلة المشتريات بعد
              </p>
              <Link to="/categories">
                <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                  تصفح المنتجات
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* قائمة المنتجات */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6 flex items-center space-x-6 rtl:space-x-reverse">
                    <img 
                      src={item.image}
                      alt={item.name_ar}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold font-arabic text-heritage-brown">
                        {item.name_ar}
                      </h4>
                      <p className="text-sm text-clay-brown">{item.name_fr}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {item.unit}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <div className="font-bold text-heritage-brown">
                        {formatPrice(item.price * item.quantity)} دج
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ملخص الطلب */}
            <div className="md:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
                    ملخص الطلب
                  </h3>
                  <div className="flex items-center justify-between text-lg font-bold mb-4">
                    <span className="font-arabic">المجموع الكلي</span>
                    <span className="text-heritage-brown">
                      {formatPrice(getTotalPrice())} دج
                    </span>
                  </div>
                  <Link to="/checkout" className="block">
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      إتمام الطلب
                    </Button>
                  </Link>
                  <Link to="/categories" className="block mt-3">
                    <Button variant="outline" className="w-full border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white font-arabic">
                      متابعة التسوق
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
