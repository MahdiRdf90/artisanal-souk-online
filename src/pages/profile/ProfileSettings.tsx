
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileSettingsProps {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const ProfileSettings = ({ user }: ProfileSettingsProps) => (
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
);

export default ProfileSettings;
