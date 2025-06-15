
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface ProfileSidebarProps {
  user: {
    name: string;
    email: string;
    joinDate: string;
    totalOrders: number;
    favoriteItems: number;
  };
}

const ProfileSidebar = ({ user }: ProfileSidebarProps) => (
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
);

export default ProfileSidebar;
