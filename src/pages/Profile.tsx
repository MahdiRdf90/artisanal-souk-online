import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, Heart, Settings, MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import ProfileSidebar from './profile/ProfileSidebar';
import ProfileOrders from './profile/ProfileOrders';
import ProfileFavorites from './profile/ProfileFavorites';
import ProfileInfo from './profile/ProfileInfo';
import ProfileSettings from './profile/ProfileSettings';

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
      status: 'delivered',
      address: 'حي السلام، الجزائر العاصمة',
      city: 'الجزائر العاصمة',
      phone: '+213 555 123 456',
      products: [
        {
          name: 'قفطان تقليدي مطرز بالذهب',
          quantity: 1,
          price: 25000,
        },
        {
          name: 'زربية تقليدية',
          quantity: 1,
          price: 18000,
        },
      ]
    },
    {
      id: 'ORD-002',
      date: '2025-01-15',
      vendor: 'النحاس الأصيل',
      items: 1,
      total: 8500,
      status: 'shipped',
      address: 'حي النصر، وهران',
      city: 'وهران',
      phone: '+213 556 222 333',
      products: [
        {
          name: 'إبريق نحاسي منقوش',
          quantity: 1,
          price: 8500,
        },
      ]
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

  // لإدارة انفتاح التفاصيل لكل طلب منفصل
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>({});

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
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
            <ProfileSidebar user={{
              name: user.name,
              email: user.email,
              joinDate: user.joinDate,
              totalOrders: user.totalOrders,
              favoriteItems: user.favoriteItems,
            }}/>
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
                <ProfileOrders
                  orders={orders}
                  formatPrice={formatPrice}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
              <TabsContent value="favorites" className="mt-8">
                <ProfileFavorites
                  favorites={favorites}
                  formatPrice={formatPrice}
                />
              </TabsContent>
              <TabsContent value="info" className="mt-8">
                <ProfileInfo user={{
                  email: user.email,
                  phone: user.phone,
                  address: user.address,
                  totalOrders: user.totalOrders,
                  favoriteItems: user.favoriteItems,
                  joinDate: user.joinDate
                }} />
              </TabsContent>
              <TabsContent value="settings" className="mt-8">
                <ProfileSettings user={{
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                  address: user.address,
                }} />
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
