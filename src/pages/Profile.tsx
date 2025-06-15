import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, Heart, Settings, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'سارة أحمد محمد',
    email: 'sara.ahmed@email.com',
    phone: '+213 555 123 456',
    address: 'حي السلام، الجزائر العاصمة',
    joinDate: 'ينايير 2024',
    totalOrders: 12,
    favoriteItems: 8
  };

  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-20',
      vendor: 'ورشة فاطمة للقفطان',
      items: 2,
      total: 43000,
      status: 'delivered'
    },
    {
      id: 'ORD-002',
      date: '2025-01-15',
      vendor: 'النحاس الأصيل',
      items: 1,
      total: 8500,
      status: 'shipped'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز',
      vendor: 'ورشة فاطمة للقفطان',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'زربية قبائلية',
      vendor: 'زرابي القبائل',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop'
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
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'قيد المعالجة';
      case 'shipped': return 'تم الشحن';
      case 'delivered': return 'تم التوصيل';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            الملف الشخصي
          </h1>
          <h2 className="text-xl text-clay-brown">
            Profil Personnel
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-craft-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-2">
                  {user.name}
                </h3>
                <p className="text-muted-foreground mb-4">{user.email}</p>
                <Badge variant="secondary" className="font-arabic">
                  عضو منذ {user.joinDate}
                </Badge>
                
                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-craft-orange">{user.totalOrders}</div>
                    <div className="text-xs text-muted-foreground font-arabic">طلب</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-heritage-brown">{user.favoriteItems}</div>
                    <div className="text-xs text-muted-foreground font-arabic">مفضل</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders" className="font-arabic">طلباتي</TabsTrigger>
                <TabsTrigger value="favorites" className="font-arabic">المفضلة</TabsTrigger>
                <TabsTrigger value="info" className="font-arabic">المعلومات</TabsTrigger>
                <TabsTrigger value="settings" className="font-arabic">الإعدادات</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    طلباتي ({orders.length})
                  </h3>
                  
                  {orders.map((order) => (
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
                              <p className="font-arabic">التاريخ: {order.date}</p>
                              <p className="font-arabic">الورشة: {order.vendor}</p>
                              <p className="font-arabic">{order.items} منتج</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-heritage-brown mb-2">
                              {formatPrice(order.total)} دج
                            </div>
                            <Button variant="outline" size="sm" className="font-arabic">
                              عرض التفاصيل
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    المنتجات المفضلة ({favorites.length})
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {favorites.map((item) => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <img 
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold font-arabic text-heritage-brown text-sm">
                                {item.name}
                              </h4>
                              <p className="text-xs text-muted-foreground font-arabic mb-2">
                                {item.vendor}
                              </p>
                              <div className="text-sm font-bold text-craft-orange">
                                {formatPrice(item.price)} دج
                              </div>
                            </div>
                            <div className="flex space-x-2 rtl:space-x-reverse">
                              <Button size="sm" className="bg-craft-orange hover:bg-craft-orange/90 font-arabic">
                                إضافة للسلة
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Heart className="text-red-500 fill-current" size={16} />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="mt-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    المعلومات الشخصية
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                          معلومات الاتصال
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Mail size={16} className="text-craft-orange" />
                            <span className="text-muted-foreground">{user.email}</span>
                          </div>
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Phone size={16} className="text-craft-orange" />
                            <span className="text-muted-foreground">{user.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <MapPin size={16} className="text-craft-orange" />
                            <span className="text-muted-foreground font-arabic">{user.address}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                          إحصائيات الحساب
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-arabic">إجمالي الطلبات:</span>
                            <span className="font-bold text-craft-orange">{user.totalOrders}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-arabic">المنتجات المفضلة:</span>
                            <span className="font-bold text-heritage-brown">{user.favoriteItems}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-arabic">تاريخ الانضمام:</span>
                            <span className="font-arabic">{user.joinDate}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                    إعدادات الحساب
                  </h3>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                            تحديث المعلومات الشخصية
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">الاسم الكامل</label>
                              <input 
                                type="text" 
                                defaultValue={user.name}
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">البريد الإلكتروني</label>
                              <input 
                                type="email" 
                                defaultValue={user.email}
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">رقم الهاتف</label>
                              <input 
                                type="tel" 
                                defaultValue={user.phone}
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">العنوان</label>
                              <input 
                                type="text" 
                                defaultValue={user.address}
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                          </div>
                          <Button className="mt-4 bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                            حفظ التغييرات
                          </Button>
                        </div>

                        <div>
                          <h4 className="font-bold font-arabic text-heritage-brown mb-4">
                            تغيير كلمة المرور
                          </h4>
                          <div className="space-y-4 max-w-md">
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">كلمة المرور الحالية</label>
                              <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">كلمة المرور الجديدة</label>
                              <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium font-arabic mb-2">تأكيد كلمة المرور الجديدة</label>
                              <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              />
                            </div>
                          </div>
                          <Button className="mt-4 bg-heritage-brown hover:bg-heritage-brown/90 text-white font-arabic">
                            تحديث كلمة المرور
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
