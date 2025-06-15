
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Order = {
  id: string;
  date: string;
  vendor: string;
  items: number;
  total: number;
  status: string;
  address: string;
  city: string;
  phone: string;
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

interface ProfileOrdersProps {
  orders: Order[];
  formatPrice: (price: number) => string;
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

const ProfileOrders = ({
  orders,
  formatPrice,
  getStatusColor,
  getStatusText,
}: ProfileOrdersProps) => {
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>({});

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold font-arabic text-heritage-brown">
        طلباتي ({orders.length})
      </h3>
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
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
                  <p className="font-arabic">عدد المنتجات: {order.items}</p>
                  <p className="font-arabic">الهاتف: {order.phone}</p>
                  <p className="font-arabic">عنوان التسليم: {order.address}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <div className="text-lg font-bold text-heritage-brown mb-2">
                  {formatPrice(order.total)} دج
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-arabic flex items-center gap-1"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  {expandedOrders[order.id] ? (
                    <>
                      اخفاء التفاصيل <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      عرض التفاصيل <ChevronDown size={18} />
                    </>
                  )}
                </Button>
              </div>
            </div>
            {expandedOrders[order.id] && (
              <div className="mt-6">
                <h5 className="font-bold font-arabic text-craft-orange mb-2">تفاصيل المنتجات</h5>
                <div className="space-y-2">
                  {order.products.map((prod, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between bg-sand-beige/40 rounded p-3">
                      <div className="flex-1">
                        <span className="font-arabic text-base text-heritage-brown font-semibold">{prod.name}</span>
                        <span className="mx-2 text-sm text-gray-600 font-arabic">({prod.quantity} × {formatPrice(prod.price)} دج)</span>
                      </div>
                      {/* زر تحديد الموقع يظهر فقط إذا لم يكن الطلب تم التوصيل */}
                      {order.status !== 'delivered' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 md:mt-0 font-arabic flex-shrink-0"
                          onClick={() => {
                            const gmQuery = encodeURIComponent(order.city || order.address);
                            window.open(`https://www.google.com/maps/search/?api=1&query=${gmQuery}`, "_blank");
                          }}
                        >
                          تحديد الموقع على الخريطة
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileOrders;
