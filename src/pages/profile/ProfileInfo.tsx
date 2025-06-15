
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

interface ProfileInfoProps {
  user: {
    email: string;
    phone: string;
    address: string;
    totalOrders: number;
    favoriteItems: number;
    joinDate: string;
  };
}

const ProfileInfo = ({ user }: ProfileInfoProps) => (
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
);

export default ProfileInfo;
