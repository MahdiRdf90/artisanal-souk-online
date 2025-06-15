import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, Store, ShoppingBag, Truck } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productId: 'p1',
      name: 'قفطان تقليدي مطرز بالذهب',
      name_fr: 'Qaftan Traditionnel Brodé Or',
      price: 25000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=150&h=150&fit=crop',
      vendor: {
        id: 'shop-1',
        name: 'ورشة فاطمة للقفطان',
        name_fr: 'Atelier Fatima Qaftan',
        region: 'تلمسان',
        shippingCost: 800,
        deliveryTime: '3-5 أيام'
      },
      size: 'M',
      color: 'ذهبي',
      notes: 'مع حقيبة هدية'
    },
    {
      id: 2,
      productId: 'p2',
      name: 'إبريق نحاسي منقوش',
      name_fr: 'Théière en Cuivre Gravée',
      price: 8500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop',
      vendor: {
        id: 'shop-2',
        name: 'النحاس الأصيل',
        name_fr: 'Cuivre Authentique',
        region: 'قسنطينة',
        shippingCost: 600,
        deliveryTime: '2-4 أيام'
      }
    },
    {
      id: 3,
      productId: 'p3',
      name: 'زربية قبائلية صغيرة',
      name_fr: 'Petit Tapis Kabyle',
      price: 15000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop',
      vendor: {
        id: 'shop-3',
        name: 'زرابي القبائل',
        name_fr: 'Tapis Kabyles',
        region: 'بجاية',
        shippingCost: 1000,
        deliveryTime: '5-7 أيام'
      }
    }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Group items by vendor
  const groupedByVendor = cartItems.reduce((groups, item) => {
    const vendorId = item.vendor.id;
    if (!groups[vendorId]) {
      groups[vendorId] = {
        vendor: item.vendor,
        items: []
      };
    }
    groups[vendorId].items.push(item);
    return groups;
  }, {} as Record<string, { vendor: any; items: any[] }>);

  const calculateVendorTotal = (items: any[]) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateGrandTotal = () => {
    const productsTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingTotal = Object.values(groupedByVendor).reduce((sum, group) => sum + group.vendor.shippingCost, 0);
    return productsTotal + shippingTotal;
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
            لديك {totalItems} منتج من {Object.keys(groupedByVendor).length} ورشة مختلفة
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
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {Object.values(groupedByVendor).map((group) => (
                <Card key={group.vendor.id}>
                  <CardContent className="p-6">
                    {/* Vendor Header */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-sand-beige rounded-lg">
                      <Link to={`/shop/${group.vendor.id}`} className="flex items-center space-x-3 hover:text-craft-orange transition-colors">
                        <Store size={20} />
                        <div>
                          <h3 className="font-bold font-arabic text-heritage-brown">
                            {group.vendor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {group.vendor.name_fr} • {group.vendor.region}
                          </p>
                        </div>
                      </Link>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Truck size={16} />
                          <span className="font-arabic">{group.vendor.deliveryTime}</span>
                        </div>
                        <p className="text-sm font-arabic">
                          الشحن: {formatPrice(group.vendor.shippingCost)} دج
                        </p>
                      </div>
                    </div>

                    {/* Vendor Items */}
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                          <Link to={`/product/${item.productId}`}>
                            <img 
                              src={item.image}
                              alt={item.name_fr}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          </Link>
                          
                          <div className="flex-1">
                            <Link to={`/product/${item.productId}`} className="hover:text-craft-orange transition-colors">
                              <h4 className="font-bold font-arabic text-heritage-brown">
                                {item.name}
                              </h4>
                              <p className="text-sm text-clay-brown">{item.name_fr}</p>
                            </Link>
                            
                            {(item.size || item.color) && (
                              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-1">
                                {item.size && (
                                  <span className="text-xs text-muted-foreground">
                                    المقاس: {item.size}
                                  </span>
                                )}
                                {item.color && (
                                  <span className="text-xs text-muted-foreground font-arabic">
                                    اللون: {item.color}
                                  </span>
                                )}
                              </div>
                            )}
                            
                            {item.notes && (
                              <div className="mt-1">
                                <Badge variant="secondary" className="text-xs font-arabic">
                                  {item.notes}
                                </Badge>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus size={14} />
                              </Button>
                              <span className="w-12 text-center font-semibold">{item.quantity}</span>
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
                              {item.quantity > 1 && (
                                <div className="text-xs text-muted-foreground">
                                  {formatPrice(item.price)} دج × {item.quantity}
                                </div>
                              )}
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />
                    
                    {/* Vendor Total */}
                    <div className="flex items-center justify-between">
                      <span className="font-arabic">المجموع الفرعي:</span>
                      <span className="font-bold text-heritage-brown">
                        {formatPrice(calculateVendorTotal(group.items))} دج
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
                    ملخص الطلب
                  </h3>
                  
                  <div className="space-y-4">
                    {Object.values(groupedByVendor).map((group) => (
                      <div key={group.vendor.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-arabic">{group.vendor.name}</span>
                          <span>{formatPrice(calculateVendorTotal(group.items))} دج</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="font-arabic">الشحن</span>
                          <span>{formatPrice(group.vendor.shippingCost)} دج</span>
                        </div>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span className="font-arabic">المجموع الكلي</span>
                      <span className="text-heritage-brown">
                        {formatPrice(calculateGrandTotal())} دج
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link to="/checkout" className="block">
                      <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                        إتمام الطلب
                      </Button>
                    </Link>
                    <Link to="/categories" className="block">
                      <Button variant="outline" className="w-full border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white font-arabic">
                        متابعة التسوق
                      </Button>
                    </Link>
                  </div>

                  {/* Delivery Info */}
                  <div className="mt-6 p-4 bg-sand-beige rounded-lg">
                    <h4 className="font-semibold font-arabic text-heritage-brown mb-2">
                      معلومات التوصيل
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-arabic">• ستصلك الطلبات منفصلة من كل ورشة</p>
                      <p className="font-arabic">• أوقات التوصيل قد تختلف بين الورش</p>
                      <p className="font-arabic">• دفع عند الاستلام متوفر</p>
                    </div>
                  </div>
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
