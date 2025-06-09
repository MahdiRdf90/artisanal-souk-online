
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, CheckCircle, MessageCircle, Star } from 'lucide-react';

const Orders = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-20',
      vendor: {
        id: 'shop-1',
        name: 'ورشة فاطمة للقفطان',
        region: 'تلمسان'
      },
      items: [
        {
          id: 1,
          name: 'قفطان تقليدي مطرز بالذهب',
          price: 25000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
        }
      ],
      total: 25800,
      shippingCost: 800,
      status: 'delivered',
      trackingNumber: 'TRK123456789',
      deliveryDate: '2025-01-25',
      canReview: true
    },
    {
      id: 'ORD-002',
      date: '2025-01-15',
      vendor: {
        id: 'shop-2',
        name: 'النحاس الأصيل',
        region: 'قسنطينة'
      },
      items: [
        {
          id: 2,
          name: 'إبريق نحاسي منقوش',
          price: 8500,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
        }
      ],
      total: 17600,
      shippingCost: 600,
      status: 'shipped',
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2025-01-22',
      canReview: false
    },
    {
      id: 'ORD-003',
      date: '2025-01-18',
      vendor: {
        id: 'shop-3',
        name: 'زرابي القبائل',
        region: 'بجاية'
      },
      items: [
        {
          id: 3,
          name: 'زربية قبائلية صغيرة',
          price: 15000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop'
        }
      ],
      total: 16000,
      shippingCost: 1000,
      status: 'pending',
      canReview: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Package className="text-yellow-500" size={16} />;
      case 'shipped':
        return <Truck className="text-blue-500" size={16} />;
      case 'delivered':
        return <CheckCircle className="text-green-500" size={16} />;
      default:
        return <Package className="text-gray-500" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'shipped': return 'bg-blue-500';
      case 'delivered': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'قيد المعالجة';
      case 'shipped': return 'تم الشحن';
      case 'delivered': return 'تم التوصيل';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            طلباتي
          </h1>
          <h2 className="text-xl text-clay-brown mb-4">
            Mes Commandes
          </h2>
          <p className="text-muted-foreground">
            تتبع طلباتك وتقييم مشترياتك
          </p>
        </div>

        {orders.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Package size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-2">
                لا توجد طلبات
              </h3>
              <p className="text-muted-foreground mb-6">
                لم تقم بأي طلبات بعد
              </p>
              <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                ابدأ التسوق
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-sand-beige rounded-lg">
                    <div>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-2">
                        <h3 className="font-bold text-heritage-brown">طلب #{order.id}</h3>
                        <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                          {getStatusText(order.status)}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-arabic">التاريخ: {order.date}</p>
                        <p className="font-arabic">الورشة: {order.vendor.name}</p>
                        <p className="font-arabic">المنطقة: {order.vendor.region}</p>
                        {order.trackingNumber && (
                          <p>رقم التتبع: {order.trackingNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-heritage-brown mb-2">
                        {formatPrice(order.total)} دج
                      </div>
                      <div className="space-x-2 rtl:space-x-reverse">
                        <Button variant="outline" size="sm" className="font-arabic">
                          تفاصيل الطلب
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold font-arabic text-heritage-brown">
                            {item.name}
                          </h4>
                          <div className="flex items-center space-x-4 rtl:space-x-reverse mt-1 text-sm text-muted-foreground">
                            <span className="font-arabic">الكمية: {item.quantity}</span>
                            <span className="font-arabic">السعر: {formatPrice(item.price)} دج</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-heritage-brown">
                            {formatPrice(item.price * item.quantity)} دج
                          </div>
                          {order.canReview && (
                            <Button variant="outline" size="sm" className="mt-2 font-arabic">
                              <Star size={14} className="mr-1" />
                              تقييم
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-arabic">المجموع الفرعي:</span>
                      <span>{formatPrice(order.total - order.shippingCost)} دج</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="font-arabic">رسوم التوصيل:</span>
                      <span>{formatPrice(order.shippingCost)} دج</span>
                    </div>
                    <div className="flex items-center justify-between font-bold mt-2">
                      <span className="font-arabic">المجموع الكلي:</span>
                      <span className="text-heritage-brown">{formatPrice(order.total)} دج</span>
                    </div>
                  </div>

                  {/* Order Status Details */}
                  <div className="mt-6 p-4 bg-warm-beige rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                      {getStatusIcon(order.status)}
                      <span className="font-semibold font-arabic">
                        {order.status === 'delivered' && 'تم توصيل طلبك بنجاح'}
                        {order.status === 'shipped' && 'طلبك في الطريق إليك'}
                        {order.status === 'pending' && 'يتم تحضير طلبك'}
                      </span>
                    </div>
                    {order.status === 'delivered' && order.deliveryDate && (
                      <p className="text-sm text-muted-foreground font-arabic">
                        تم التوصيل في: {order.deliveryDate}
                      </p>
                    )}
                    {order.status === 'shipped' && order.estimatedDelivery && (
                      <p className="text-sm text-muted-foreground font-arabic">
                        التوصيل المتوقع: {order.estimatedDelivery}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
