
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Plus, 
  Edit, 
  Eye,
  DollarSign,
  ShoppingCart,
  Star,
  Calendar
} from 'lucide-react';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock vendor data
  const vendorStats = {
    totalProducts: 24,
    totalOrders: 156,
    totalRevenue: 2850000,
    monthlyRevenue: 485000,
    followers: 890,
    rating: 4.8,
    reviews: 156,
    pendingOrders: 8
  };

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'سارة أحمد',
      product: 'قفطان تقليدي مطرز',
      amount: 25000,
      status: 'pending',
      date: '2025-01-20'
    },
    {
      id: 'ORD-002',
      customer: 'نادية محمد',
      product: 'قفطان عصري',
      amount: 18000,
      status: 'shipped',
      date: '2025-01-19'
    },
    {
      id: 'ORD-003',
      customer: 'زينب علي',
      product: 'قفطان الزفاف',
      amount: 45000,
      status: 'delivered',
      date: '2025-01-18'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز بالذهب',
      price: 25000,
      stock: 5,
      sales: 23,
      views: 456,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'قفطان عصري بالتطريز الفضي',
      price: 18000,
      stock: 8,
      sales: 18,
      views: 234,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
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
      <Header cartItemsCount={0} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            لوحة تحكم الحرفي
          </h1>
          <h2 className="text-xl text-clay-brown mb-4">
            Tableau de Bord Artisan
          </h2>
          <p className="text-muted-foreground">
            إدارة ورشتك ومتابعة مبيعاتك وطلباتك
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="font-arabic">نظرة عامة</TabsTrigger>
            <TabsTrigger value="products" className="font-arabic">المنتجات</TabsTrigger>
            <TabsTrigger value="orders" className="font-arabic">الطلبات</TabsTrigger>
            <TabsTrigger value="analytics" className="font-arabic">التحليلات</TabsTrigger>
            <TabsTrigger value="messages" className="font-arabic">الرسائل</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        إجمالي المنتجات
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {vendorStats.totalProducts}
                      </div>
                    </div>
                    <Package className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        إجمالي الطلبات
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {vendorStats.totalOrders}
                      </div>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        الإيرادات الشهرية
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {formatPrice(vendorStats.monthlyRevenue)}
                      </div>
                      <p className="text-xs text-muted-foreground font-arabic">دج</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        التقييم
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-heritage-brown">
                          {vendorStats.rating}
                        </div>
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {vendorStats.reviews} تقييم
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold font-arabic text-heritage-brown">
                      الطلبات الأخيرة
                    </h3>
                    <Button variant="outline" size="sm">
                      عرض الكل
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-semibold font-arabic">{order.customer}</div>
                          <div className="text-sm text-muted-foreground font-arabic">
                            {order.product}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {order.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{formatPrice(order.amount)} دج</div>
                          <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-6">
                    إجراءات سريعة
                  </h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic justify-start">
                      <Plus className="mr-2" size={16} />
                      إضافة منتج جديد
                    </Button>
                    <Button variant="outline" className="w-full font-arabic justify-start border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white">
                      <Edit className="mr-2" size={16} />
                      تحديث معلومات الورشة
                    </Button>
                    <Button variant="outline" className="w-full font-arabic justify-start">
                      <MessageCircle className="mr-2" size={16} />
                      الرد على الرسائل ({vendorStats.pendingOrders})
                    </Button>
                    <Button variant="outline" className="w-full font-arabic justify-start">
                      <TrendingUp className="mr-2" size={16} />
                      عرض التحليلات التفصيلية
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                إدارة المنتجات
              </h3>
              <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                <Plus className="mr-2" size={16} />
                إضافة منتج جديد
              </Button>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold font-arabic text-heritage-brown">
                          {product.name}
                        </h4>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse mt-2 text-sm text-muted-foreground">
                          <span className="font-arabic">السعر: {formatPrice(product.price)} دج</span>
                          <span className="font-arabic">المخزون: {product.stock}</span>
                          <span className="font-arabic">المبيعات: {product.sales}</span>
                          <span className="font-arabic">المشاهدات: {product.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Badge variant={product.status === 'active' ? 'default' : 'secondary'} className="font-arabic">
                          {product.status === 'active' ? 'نشط' : 'غير نشط'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                إدارة الطلبات
              </h3>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <select className="px-3 py-2 border border-input bg-background rounded-md font-arabic">
                  <option>جميع الطلبات</option>
                  <option>قيد المعالجة</option>
                  <option>تم الشحن</option>
                  <option>تم التوصيل</option>
                </select>
                <select className="px-3 py-2 border border-input bg-background rounded-md font-arabic">
                  <option>آخر 30 يوم</option>
                  <option>آخر 7 أيام</option>
                  <option>هذا الشهر</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-2">
                          <h4 className="font-bold text-heritage-brown">#{order.id}</h4>
                          <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="font-arabic">العميل: {order.customer}</p>
                          <p className="font-arabic">المنتج: {order.product}</p>
                          <p className="font-arabic">التاريخ: {order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-heritage-brown mb-2">
                          {formatPrice(order.amount)} دج
                        </div>
                        <div className="space-x-2 rtl:space-x-reverse">
                          <Button variant="outline" size="sm" className="font-arabic">
                            عرض التفاصيل
                          </Button>
                          {order.status === 'pending' && (
                            <Button size="sm" className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
                              تحديث الحالة
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="space-y-8">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                تحليلات الأداء
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                      الإيرادات الشهرية
                    </h4>
                    <div className="h-64 bg-sand-beige rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground font-arabic">رسم بياني للإيرادات</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                      أفضل المنتجات مبيعاً
                    </h4>
                    <div className="space-y-4">
                      {products.map((product, index) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="text-sm font-bold text-craft-orange">
                              #{index + 1}
                            </span>
                            <span className="font-arabic text-heritage-brown">
                              {product.name}
                            </span>
                          </div>
                          <span className="font-arabic text-muted-foreground">
                            {product.sales} مبيعة
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="mt-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                الرسائل والاستفسارات
              </h3>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h4 className="font-bold font-arabic text-heritage-brown mb-2">
                    لا توجد رسائل جديدة
                  </h4>
                  <p className="text-muted-foreground">
                    ستظهر هنا جميع الرسائل والاستفسارات من العملاء
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
