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
  Settings,
  Bell,
  Upload,
  BarChart3,
  Target,
  Calendar,
  Filter
} from 'lucide-react';
import ProductForm from '@/components/vendor/ProductForm';
import OrdersTable from '@/components/vendor/OrdersTable';
import AnalyticsCharts from '@/components/vendor/AnalyticsCharts';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Mock vendor data
  const vendorStats = {
    totalProducts: 24,
    totalOrders: 156,
    totalRevenue: 2850000,
    monthlyRevenue: 485000,
    followers: 890,
    rating: 4.8,
    reviews: 156,
    pendingOrders: 8,
    activeProducts: 22,
    lowStockProducts: 3,
    newMessages: 5,
    thisWeekOrders: 23,
    conversionRate: 5.2,
    avgOrderValue: 18500
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

  const notifications = [
    { id: 1, type: 'order', message: 'طلب جديد من سارة أحمد', time: '5 دقائق', urgent: true },
    { id: 2, type: 'stock', message: 'مخزون منخفض: قفطان تقليدي', time: '1 ساعة', urgent: true },
    { id: 3, type: 'review', message: 'تقييم جديد 5 نجوم', time: '2 ساعة', urgent: false },
    { id: 4, type: 'message', message: 'رسالة من زينب علي', time: '3 ساعات', urgent: false }
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

  const handleProductSave = (product: any) => {
    console.log('Saving product:', product);
    setShowProductForm(false);
    setEditingProduct(null);
    // In a real app, this would save to database
  };

  if (showProductForm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <ProductForm
            product={editingProduct}
            onSave={handleProductSave}
            onCancel={() => {
              setShowProductForm(false);
              setEditingProduct(null);
            }}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
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
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button variant="outline" size="sm">
                <Bell size={16} className="mr-2" />
                الإشعارات ({vendorStats.newMessages})
              </Button>
              <Button variant="outline" size="sm">
                <Settings size={16} className="mr-2" />
                الإعدادات
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="font-arabic">نظرة عامة</TabsTrigger>
            <TabsTrigger value="products" className="font-arabic">المنتجات ({vendorStats.totalProducts})</TabsTrigger>
            <TabsTrigger value="orders" className="font-arabic">الطلبات ({vendorStats.pendingOrders})</TabsTrigger>
            <TabsTrigger value="analytics" className="font-arabic">التحليلات</TabsTrigger>
            <TabsTrigger value="messages" className="font-arabic">الرسائل ({vendorStats.newMessages})</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            {/* Enhanced Stats Cards */}
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
                      <p className="text-xs text-green-600">+{vendorStats.activeProducts} نشط</p>
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
                        الطلبات هذا الأسبوع
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {vendorStats.thisWeekOrders}
                      </div>
                      <p className="text-xs text-yellow-600">{vendorStats.pendingOrders} قيد الانتظار</p>
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
                        معدل التحويل
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {vendorStats.conversionRate}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        متوسط الطلب: {formatPrice(vendorStats.avgOrderValue)} دج
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Recent Orders */}
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold font-arabic text-heritage-brown">
                      الطلبات الأخيرة
                    </h3>
                    <Button variant="outline" size="sm" onClick={() => setActiveTab('orders')}>
                      عرض الكل
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
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

              {/* Notifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-6">
                    الإشعارات
                  </h3>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-3 rounded-lg border-l-4 ${notification.urgent ? 'border-l-red-500 bg-red-50' : 'border-l-blue-500 bg-blue-50'}`}>
                        <p className="text-sm font-arabic font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions Enhanced */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold font-arabic text-heritage-brown mb-6">
                  إجراءات سريعة
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    className="h-24 bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic flex-col justify-center"
                    onClick={() => setShowProductForm(true)}
                  >
                    <Plus className="mb-2" size={24} />
                    إضافة منتج جديد
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 font-arabic flex-col justify-center border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white"
                    onClick={() => setActiveTab('orders')}
                  >
                    <ShoppingCart className="mb-2" size={24} />
                    معالجة الطلبات
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 font-arabic flex-col justify-center"
                    onClick={() => setActiveTab('analytics')}
                  >
                    <BarChart3 className="mb-2" size={24} />
                    عرض التحليلات
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 font-arabic flex-col justify-center"
                    onClick={() => setActiveTab('messages')}
                  >
                    <MessageCircle className="mb-2" size={24} />
                    الرد على الرسائل
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                  إدارة المنتجات
                </h3>
                <p className="text-muted-foreground font-arabic">
                  {vendorStats.activeProducts} منتج نشط، {vendorStats.lowStockProducts} مخزون منخفض
                </p>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button variant="outline" size="sm">
                  <Filter size={16} className="mr-2" />
                  تصفية
                </Button>
                <Button variant="outline" size="sm">
                  <Upload size={16} className="mr-2" />
                  استيراد
                </Button>
                <Button 
                  className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic"
                  onClick={() => setShowProductForm(true)}
                >
                  <Plus className="mr-2" size={16} />
                  إضافة منتج جديد
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold font-arabic text-heritage-brown text-lg">
                          {product.name}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                          <div>
                            <span className="text-muted-foreground font-arabic">السعر:</span>
                            <p className="font-semibold">{formatPrice(product.price)} دج</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-arabic">المخزون:</span>
                            <p className={`font-semibold ${product.stock < 5 ? 'text-red-600' : 'text-green-600'}`}>
                              {product.stock}
                            </p>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-arabic">المبيعات:</span>
                            <p className="font-semibold">{product.sales}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-arabic">المشاهدات:</span>
                            <p className="font-semibold">{product.views}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Badge variant={product.status === 'active' ? 'default' : 'secondary'} className="font-arabic">
                          {product.status === 'active' ? 'نشط' : 'غير نشط'}
                        </Badge>
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          <Button variant="outline" size="sm">
                            <Eye size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setEditingProduct(product);
                              setShowProductForm(true);
                            }}
                          >
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <OrdersTable />
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <AnalyticsCharts />
          </TabsContent>

          <TabsContent value="messages" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                  الرسائل والاستفسارات
                </h3>
                <Badge className="bg-craft-orange text-white">
                  {vendorStats.newMessages} رسائل جديدة
                </Badge>
              </div>
              
              <div className="grid gap-4">
                {[
                  {
                    customer: 'سارة أحمد',
                    message: 'هل يمكن تخصيص لون القفطان؟',
                    time: '5 دقائق',
                    unread: true,
                    product: 'قفطان تقليدي مطرز'
                  },
                  {
                    customer: 'نادية محمد',
                    message: 'متى سيصل الطلب؟',
                    time: '1 ساعة',
                    unread: true,
                    product: 'إناء فخاري'
                  },
                  {
                    customer: 'زينب علي',
                    message: 'شكراً لك، المنتج رائع!',
                    time: '2 ساعة',
                    unread: false,
                    product: 'خاتم فضة'
                  }
                ].map((msg, index) => (
                  <Card key={index} className={`${msg.unread ? 'border-craft-orange' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                            <h4 className="font-bold font-arabic">{msg.customer}</h4>
                            {msg.unread && <Badge variant="secondary" className="bg-craft-orange text-white">جديد</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground font-arabic mb-1">
                            بخصوص: {msg.product}
                          </p>
                          <p className="font-arabic">{msg.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">{msg.time}</p>
                        </div>
                        <Button size="sm" className="bg-craft-orange hover:bg-craft-orange/90">
                          رد
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default VendorDashboard;
