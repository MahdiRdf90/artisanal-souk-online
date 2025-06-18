import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut } from 'lucide-react';
import ProfileSidebar from './profile/ProfileSidebar';
import ProfileInfo from './profile/ProfileInfo';
import ProfileOrders from './profile/ProfileOrders';
import ProfileFavorites from './profile/ProfileFavorites';
import ProfileSettings from './profile/ProfileSettings';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');

  const mockUser = {
    name: 'أحمد بن محمد',
    email: 'ahmed@example.com',
    phone: '+213 555 123 456',
    address: 'الجزائر العاصمة، الجزائر',
    joinDate: 'يناير 2023',
    totalOrders: 12,
    favoriteItems: 8
  };

  const mockOrders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      vendor: 'ورشة فاطمة للطبخ',
      items: 3,
      total: 4500,
      status: 'delivered',
      address: 'حي بلكور، وهران',
      city: 'وهران',
      phone: '+213 555 987 654',
      products: [
        { name: 'كحلوشي تقليدي', quantity: 2, price: 1500 },
        { name: 'مقروض باللوز', quantity: 1, price: 1500 }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      vendor: 'حرف يدوية تقليدية',
      items: 2,
      total: 3200,
      status: 'shipped',
      address: 'المدينة الجديدة، قسنطينة',
      city: 'قسنطينة',
      phone: '+213 555 456 789',
      products: [
        { name: 'سجادة بربرية', quantity: 1, price: 2500 },
        { name: 'فخار تقليدي', quantity: 1, price: 700 }
      ]
    }
  ];

  const mockFavorites = [
    {
      id: 1,
      name: 'كحلوشي تقليدي',
      vendor: 'ورشة فاطمة للطبخ',
      price: 1500,
      image: '/lovable-uploads/3b322311-3a2f-49ba-aeb8-7c97e3d74d9e.png'
    }
  ];

  const formatPrice = (price: number) => price.toLocaleString();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-500';
      case 'shipped': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'تم التوصيل';
      case 'shipped': return 'قيد الشحن';
      case 'processing': return 'قيد المعالجة';
      default: return 'غير محدد';
    }
  };

  const handleLogout = () => {
    // في التطبيق الحقيقي، هنا ستكون عملية تسجيل الخروج
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-sand-beige">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header with logout button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
              الملف الشخصي
            </h1>
            <p className="text-muted-foreground">Profil Personnel</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2 font-arabic text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut size={18} />
            تسجيل الخروج
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProfileSidebar user={mockUser} />
          </div>
          
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 font-arabic">
                <TabsTrigger value="info">المعلومات</TabsTrigger>
                <TabsTrigger value="orders">الطلبات</TabsTrigger>
                <TabsTrigger value="favorites">المفضلة</TabsTrigger>
                <TabsTrigger value="settings">الإعدادات</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="mt-6">
                <ProfileInfo user={mockUser} />
              </TabsContent>
              
              <TabsContent value="orders" className="mt-6">
                <ProfileOrders 
                  orders={mockOrders}
                  formatPrice={formatPrice}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
              
              <TabsContent value="favorites" className="mt-6">
                <ProfileFavorites 
                  favorites={mockFavorites}
                  formatPrice={formatPrice}
                />
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <ProfileSettings user={mockUser} />
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
