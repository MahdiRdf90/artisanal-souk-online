import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Store, 
  Package, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Ban
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock admin data
  const adminStats = {
    totalUsers: 2450,
    totalVendors: 156,
    pendingVendors: 23,
    totalProducts: 1280,
    totalRevenue: 8500000,
    monthlyRevenue: 1250000,
    commission: 850000,
    pendingDisputes: 5
  };

  const pendingVendors = [
    {
      id: 'vendor-1',
      name: 'ورشة الزرابي الأمازيغية',
      owner: 'يوسف أمقران',
      region: 'بجاية',
      category: 'نسيج وتطريز',
      applicationDate: '2025-01-18',
      documents: ['بطاقة هوية', 'رخصة تجارية', 'شهادة حرفي'],
      status: 'pending'
    },
    {
      id: 'vendor-2',
      name: 'مصنع الفخار التقليدي',
      owner: 'أحمد بن صالح',
      region: 'غرداية',
      category: 'حرف طبيعية',
      applicationDate: '2025-01-16',
      documents: ['بطاقة هوية', 'رخصة تجارية'],
      status: 'pending'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'سارة أحمد',
      vendor: 'ورشة فاطمة للقفطان',
      amount: 25000,
      commission: 2500,
      status: 'completed',
      date: '2025-01-20'
    },
    {
      id: 'ORD-002',
      customer: 'محمد علي',
      vendor: 'النحاس الأصيل',
      amount: 17000,
      commission: 1700,
      status: 'processing',
      date: '2025-01-19'
    }
  ];

  const disputes = [
    {
      id: 'DISP-001',
      customer: 'نادية محمد',
      vendor: 'ورشة الزرابي',
      order: 'ORD-456',
      reason: 'جودة المنتج',
      status: 'open',
      date: '2025-01-15'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'approved': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      case 'completed': return 'bg-green-500';
      case 'processing': return 'bg-blue-500';
      case 'open': return 'bg-red-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'قيد المراجعة';
      case 'approved': return 'مقبول';
      case 'rejected': return 'مرفوض';
      case 'completed': return 'مكتمل';
      case 'processing': return 'قيد المعالجة';
      case 'open': return 'مفتوح';
      case 'resolved': return 'محلول';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            لوحة تحكم الإدارة
          </h1>
          <h2 className="text-xl text-clay-brown mb-4">
            Tableau de Bord Administrateur
          </h2>
          <p className="text-muted-foreground">
            إدارة وتتبع جميع عمليات المنصة
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="font-arabic">نظرة عامة</TabsTrigger>
            <TabsTrigger value="vendors" className="font-arabic">الحرفيين</TabsTrigger>
            <TabsTrigger value="orders" className="font-arabic">الطلبات</TabsTrigger>
            <TabsTrigger value="disputes" className="font-arabic">النزاعات</TabsTrigger>
            <TabsTrigger value="analytics" className="font-arabic">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        إجمالي المستخدمين
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {adminStats.totalUsers}
                      </div>
                    </div>
                    <Users className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-arabic">
                        الحرفيين النشطين
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {adminStats.totalVendors}
                      </div>
                      {adminStats.pendingVendors > 0 && (
                        <p className="text-xs text-red-500 font-arabic">
                          {adminStats.pendingVendors} في الانتظار
                        </p>
                      )}
                    </div>
                    <Store className="h-8 w-8 text-craft-orange" />
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
                        {formatPrice(adminStats.monthlyRevenue)}
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
                        عمولة المنصة
                      </p>
                      <div className="text-2xl font-bold text-heritage-brown">
                        {formatPrice(adminStats.commission)}
                      </div>
                      <p className="text-xs text-muted-foreground font-arabic">دج هذا الشهر</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-craft-orange" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Pending Actions */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold font-arabic text-heritage-brown">
                      إجراءات في الانتظار
                    </h3>
                    <AlertTriangle className="text-yellow-500" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="font-arabic">طلبات انضمام حرفيين جدد</span>
                      <Badge className="bg-yellow-500 text-white">
                        {adminStats.pendingVendors}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-arabic">نزاعات مفتوحة</span>
                      <Badge className="bg-red-500 text-white">
                        {adminStats.pendingDisputes}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-arabic">منتجات تحتاج مراجعة</span>
                      <Badge className="bg-blue-500 text-white">12</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold font-arabic text-heritage-brown">
                      آخر الطلبات
                    </h3>
                    <Button variant="outline" size="sm">
                      عرض الكل
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-semibold">#{order.id}</div>
                          <div className="text-sm text-muted-foreground font-arabic">
                            {order.customer} • {order.vendor}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {order.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{formatPrice(order.amount)} دج</div>
                          <div className="text-sm text-craft-orange">
                            عمولة: {formatPrice(order.commission)} دج
                          </div>
                          <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                  إدارة الحرفيين
                </h3>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <select className="px-3 py-2 border border-input bg-background rounded-md font-arabic">
                    <option>جميع الحرفيين</option>
                    <option>في الانتظار</option>
                    <option>مقبولين</option>
                    <option>مرفوضين</option>
                  </select>
                </div>
              </div>

              {/* Pending Vendors */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                    طلبات الانضمام ({pendingVendors.length})
                  </h4>
                  <div className="space-y-4">
                    {pendingVendors.map((vendor) => (
                      <div key={vendor.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h5 className="font-bold font-arabic text-heritage-brown">
                              {vendor.name}
                            </h5>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p className="font-arabic">الحرفي: {vendor.owner}</p>
                              <p className="font-arabic">المنطقة: {vendor.region}</p>
                              <p className="font-arabic">التخصص: {vendor.category}</p>
                              <p className="font-arabic">تاريخ التقديم: {vendor.applicationDate}</p>
                            </div>
                          </div>
                          <div className="space-x-2 rtl:space-x-reverse">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-arabic">
                              <CheckCircle size={16} className="mr-1" />
                              قبول
                            </Button>
                            <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-arabic">
                              <XCircle size={16} className="mr-1" />
                              رفض
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye size={16} />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-semibold font-arabic">الوثائق المرفقة: </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {vendor.documents.map((doc, index) => (
                              <Badge key={index} variant="secondary" className="font-arabic">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                  إدارة الطلبات
                </h3>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <select className="px-3 py-2 border border-input bg-background rounded-md font-arabic">
                    <option>جميع الطلبات</option>
                    <option>قيد المعالجة</option>
                    <option>مكتملة</option>
                    <option>ملغية</option>
                  </select>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-2">
                              <h5 className="font-bold text-heritage-brown">#{order.id}</h5>
                              <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                                {getStatusText(order.status)}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p className="font-arabic">العميل: {order.customer}</p>
                              <p className="font-arabic">الحرفي: {order.vendor}</p>
                              <p className="font-arabic">التاريخ: {order.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-heritage-brown">
                              {formatPrice(order.amount)} دج
                            </div>
                            <div className="text-sm text-craft-orange font-arabic">
                              عمولة المنصة: {formatPrice(order.commission)} دج
                            </div>
                            <div className="space-x-2 rtl:space-x-reverse mt-2">
                              <Button variant="outline" size="sm">
                                <Eye size={16} />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="disputes" className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                  إدارة النزاعات
                </h3>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {disputes.map((dispute) => (
                      <div key={dispute.id} className="border rounded-lg p-4 bg-red-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-2">
                              <h5 className="font-bold text-heritage-brown">#{dispute.id}</h5>
                              <Badge className={`${getStatusColor(dispute.status)} text-white font-arabic`}>
                                {getStatusText(dispute.status)}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p className="font-arabic">العميل: {dispute.customer}</p>
                              <p className="font-arabic">الحرفي: {dispute.vendor}</p>
                              <p className="font-arabic">الطلب: {dispute.order}</p>
                              <p className="font-arabic">السبب: {dispute.reason}</p>
                              <p className="font-arabic">التاريخ: {dispute.date}</p>
                            </div>
                          </div>
                          <div className="space-x-2 rtl:space-x-reverse">
                            <Button size="sm" className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
                              التحقيق
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="space-y-8">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                تحليلات المنصة
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                      الإيرادات والعمولات
                    </h4>
                    <div className="h-64 bg-sand-beige rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground font-arabic">رسم بياني للإيرادات</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                      نمو عدد المستخدمين
                    </h4>
                    <div className="h-64 bg-sand-beige rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground font-arabic">رسم بياني للمستخدمين</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-craft-orange mb-2">85%</div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      معدل رضا العملاء
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-heritage-brown mb-2">92%</div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      معدل إتمام الطلبات
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-clay-brown mb-2">10%</div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      عمولة المنصة
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
