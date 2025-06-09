
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Truck, MapPin, Phone } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const orderItems = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز بالذهب',
      vendor: 'ورشة فاطمة للقفطان',
      price: 25000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'إبريق نحاسي منقوش',
      vendor: 'النحاس الأصيل',
      price: 8500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
    }
  ];

  const shippingCost = 1400;
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            إتمام الطلب
          </h1>
          <h2 className="text-xl text-clay-brown">
            Finaliser la Commande
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                  <MapPin className="text-craft-orange" size={20} />
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    معلومات التوصيل
                  </h3>
                </div>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="font-arabic">الاسم الأول</Label>
                      <Input id="firstName" placeholder="الاسم الأول" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-arabic">اسم العائلة</Label>
                      <Input id="lastName" placeholder="اسم العائلة" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="font-arabic">رقم الهاتف</Label>
                    <Input id="phone" type="tel" placeholder="+213 555 123 456" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="address" className="font-arabic">العنوان الكامل</Label>
                    <Input id="address" placeholder="الشارع، الحي، المدينة" className="mt-1" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="font-arabic">المدينة</Label>
                      <select id="city" className="w-full px-3 py-2 border border-input bg-background rounded-md mt-1">
                        <option>اختر المدينة</option>
                        <option>الجزائر العاصمة</option>
                        <option>وهران</option>
                        <option>قسنطينة</option>
                        <option>عنابة</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="font-arabic">الرمز البريدي</Label>
                      <Input id="postalCode" placeholder="16000" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes" className="font-arabic">ملاحظات إضافية (اختياري)</Label>
                    <textarea 
                      id="notes" 
                      rows={3}
                      placeholder="معلومات إضافية للتوصيل..."
                      className="w-full px-3 py-2 border border-input bg-background rounded-md mt-1"
                    ></textarea>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                  <CreditCard className="text-craft-orange" size={20} />
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    طريقة الدفع
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 border rounded-lg cursor-pointer hover:bg-sand-beige">
                    <input 
                      type="radio" 
                      id="cod" 
                      name="payment" 
                      value="cod" 
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div className="font-semibold font-arabic">دفع عند الاستلام</div>
                      <div className="text-sm text-muted-foreground">ادفع نقداً عند استلام طلبك</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 border rounded-lg cursor-pointer hover:bg-sand-beige">
                    <input 
                      type="radio" 
                      id="baridimob" 
                      name="payment" 
                      value="baridimob" 
                      checked={paymentMethod === 'baridimob'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Label htmlFor="baridimob" className="flex-1 cursor-pointer">
                      <div className="font-semibold">BaridiMob</div>
                      <div className="text-sm text-muted-foreground font-arabic">الدفع عبر تطبيق بريدي موب</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 border rounded-lg cursor-pointer hover:bg-sand-beige">
                    <input 
                      type="radio" 
                      id="ccp" 
                      name="payment" 
                      value="ccp" 
                      checked={paymentMethod === 'ccp'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Label htmlFor="ccp" className="flex-1 cursor-pointer">
                      <div className="font-semibold">CCP</div>
                      <div className="text-sm text-muted-foreground font-arabic">تحويل بريدي</div>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
                  ملخص الطلب
                </h3>
                
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold font-arabic text-heritage-brown text-sm">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground font-arabic mb-1">
                          {item.vendor}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            الكمية: {item.quantity}
                          </span>
                          <span className="font-bold text-sm">
                            {formatPrice(item.price * item.quantity)} دج
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-arabic">المجموع الفرعي:</span>
                    <span>{formatPrice(subtotal)} دج</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-arabic">رسوم التوصيل:</span>
                    <span>{formatPrice(shippingCost)} دج</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span className="font-arabic">المجموع الكلي:</span>
                    <span className="text-heritage-brown">
                      {formatPrice(total)} دج
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                    تأكيد الطلب
                  </Button>
                  
                  <Link to="/cart" className="block">
                    <Button variant="outline" className="w-full border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white font-arabic">
                      العودة للسلة
                    </Button>
                  </Link>
                </div>

                {/* Order Info */}
                <div className="mt-6 p-4 bg-sand-beige rounded-lg">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <Truck className="text-craft-orange" size={16} />
                    <span className="text-sm font-semibold font-arabic">معلومات التوصيل</span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1 font-arabic">
                    <p>• التوصيل خلال 3-7 أيام عمل</p>
                    <p>• طلبات منفصلة لكل ورشة</p>
                    <p>• رسوم توصيل ثابتة للطلب الواحد</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
