
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  vendor: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  shippingCost: number;
  discount?: number;
  promoCode?: string;
}

const OrderSummary = ({ items, shippingCost, discount = 0, promoCode }: OrderSummaryProps) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost - discount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  return (
    <Card className="sticky top-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
          ملخص الطلب
        </h3>
        
        {/* Order Items */}
        <div className="space-y-4 mb-6">
          {items.map((item) => (
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
                  <Badge variant="secondary" className="text-xs">
                    الكمية: {item.quantity}
                  </Badge>
                  <span className="font-bold text-sm">
                    {formatPrice(item.price * item.quantity)} دج
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-4" />
        
        {/* Price Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-arabic">المجموع الفرعي:</span>
            <span>{formatPrice(subtotal)} دج</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-arabic">رسوم التوصيل:</span>
            <span>{shippingCost === 0 ? 'مجاني' : `${formatPrice(shippingCost)} دج`}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex items-center justify-between text-green-600">
              <span className="font-arabic">خصم ({promoCode}):</span>
              <span>-{formatPrice(discount)} دج</span>
            </div>
          )}
          
          <Separator />
          
          <div className="flex items-center justify-between text-lg font-bold">
            <span className="font-arabic">المجموع الكلي:</span>
            <span className="text-heritage-brown">
              {formatPrice(total)} دج
            </span>
          </div>
        </div>

        {/* Security and Guarantees */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
            <ShieldCheck className="text-green-500" size={16} />
            <span className="font-arabic">دفع آمن ومحمي</span>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
            <Truck className="text-blue-500" size={16} />
            <span className="font-arabic">توصيل سريع (3-7 أيام)</span>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
            <RotateCcw className="text-orange-500" size={16} />
            <span className="font-arabic">إمكانية الإرجاع خلال 14 يوم</span>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
            <Headphones className="text-purple-500" size={16} />
            <span className="font-arabic">خدمة عملاء 24/7</span>
          </div>
        </div>

        {/* Back to Cart */}
        <div className="mt-6">
          <Link to="/cart" className="block">
            <Button variant="outline" className="w-full border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white font-arabic">
              العودة للسلة
            </Button>
          </Link>
        </div>

        {/* Delivery Info */}
        <div className="mt-6 p-4 bg-sand-beige rounded-lg">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <Truck className="text-craft-orange" size={16} />
            <span className="text-sm font-semibold font-arabic">معلومات مهمة</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1 font-arabic">
            <p>• سيتم التواصل معك لتأكيد الطلب</p>
            <p>• التوصيل خلال 3-7 أيام عمل</p>
            <p>• فحص المنتج قبل الدفع</p>
            <p>• ضمان الجودة والأصالة</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
