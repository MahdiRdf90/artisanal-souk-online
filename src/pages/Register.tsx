
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
              إنشاء حساب جديد
            </h1>
            <h2 className="text-xl text-clay-brown mb-4">
              Créer un Compte
            </h2>
            <p className="text-muted-foreground">
              انضم إلى منصة ربط الحرف واستمتع بتجربة التسوق الأصيلة
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="client" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="client" className="font-arabic">عميل</TabsTrigger>
                  <TabsTrigger value="vendor" className="font-arabic">حرفي</TabsTrigger>
                </TabsList>

                <TabsContent value="client" className="mt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="font-arabic">الاسم الأول</Label>
                        <Input
                          id="firstName"
                          placeholder="الاسم الأول"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-arabic">اسم العائلة</Label>
                        <Input
                          id="lastName"
                          placeholder="اسم العائلة"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-arabic">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+213 555 123 456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="font-arabic">كلمة المرور</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="font-arabic">تأكيد كلمة المرور</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="تأكيد كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm font-arabic">
                        أوافق على{' '}
                        <Link to="#" className="text-craft-orange hover:underline">
                          الشروط والأحكام
                        </Link>
                      </Label>
                    </div>
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      إنشاء حساب عميل
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="vendor" className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="shopName" className="font-arabic">اسم الورشة</Label>
                      <Input
                        id="shopName"
                        placeholder="اسم ورشتك"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerName" className="font-arabic">اسم صاحب الورشة</Label>
                      <Input
                        id="ownerName"
                        placeholder="اسمك الكامل"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="font-arabic">نوع الحرفة</Label>
                      <select className="w-full px-3 py-2 border border-input bg-background rounded-md mt-1">
                        <option>اختر نوع الحرفة</option>
                        <option>نسيج وتطريز</option>
                        <option>أشغال معدنية</option>
                        <option>حرف طبيعية</option>
                        <option>مجوهرات وزينة</option>
                        <option>حرف غذائية</option>
                        <option>مستحضرات طبيعية</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="region" className="font-arabic">المنطقة</Label>
                      <select className="w-full px-3 py-2 border border-input bg-background rounded-md mt-1">
                        <option>اختر المنطقة</option>
                        <option>الجزائر العاصمة</option>
                        <option>تلمسان</option>
                        <option>قسنطينة</option>
                        <option>بجاية</option>
                        <option>غرداية</option>
                        <option>وهران</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="vendorEmail" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="vendorEmail"
                        type="email"
                        placeholder="artisan@email.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendorPhone" className="font-arabic">رقم الهاتف</Label>
                      <Input
                        id="vendorPhone"
                        type="tel"
                        placeholder="+213 555 123 456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vendorPassword" className="font-arabic">كلمة المرور</Label>
                      <Input
                        id="vendorPassword"
                        type="password"
                        placeholder="كلمة المرور"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <input type="checkbox" id="vendorTerms" className="rounded" />
                      <Label htmlFor="vendorTerms" className="text-sm font-arabic">
                        أوافق على شروط الحرفيين و{' '}
                        <Link to="#" className="text-craft-orange hover:underline">
                          سياسة العمولة
                        </Link>
                      </Label>
                    </div>
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      تسجيل كحرفي (مراجعة مطلوبة)
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground font-arabic">
                  لديك حساب بالفعل؟{' '}
                  <Link to="/login" className="text-craft-orange hover:underline">
                    سجل الدخول
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

export default Register;
