import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
              تسجيل الدخول
            </h1>
            <h2 className="text-xl text-clay-brown mb-4">
              Connexion
            </h2>
            <p className="text-muted-foreground">
              ادخل إلى حسابك للوصول إلى جميع الميزات
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="client" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="client" className="font-arabic">عميل</TabsTrigger>
                  <TabsTrigger value="vendor" className="font-arabic">حرفي</TabsTrigger>
                  <TabsTrigger value="admin" className="font-arabic">إدارة</TabsTrigger>
                </TabsList>

                <TabsContent value="client" className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="font-arabic">كلمة المرور</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm font-arabic">تذكرني</Label>
                      </div>
                      <Link to="#" className="text-sm text-craft-orange hover:underline font-arabic">
                        نسيت كلمة المرور؟
                      </Link>
                    </div>
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      تسجيل الدخول
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="vendor" className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="vendor-email" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="vendor-email"
                        type="email"
                        placeholder="artisan@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendor-password" className="font-arabic">كلمة المرور</Label>
                      <Input
                        id="vendor-password"
                        type="password"
                        placeholder="كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      دخول لوحة الحرفي
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="admin" className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="admin-email" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@craftconnect.dz"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password" className="font-arabic">كلمة المرور</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <Button className="w-full bg-heritage-brown hover:bg-heritage-brown/90 text-white font-arabic">
                      دخول لوحة الإدارة
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground font-arabic">
                  ليس لديك حساب؟{' '}
                  <Link to="/register" className="text-craft-orange hover:underline">
                    سجل الآن
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
