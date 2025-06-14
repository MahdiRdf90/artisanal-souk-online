
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Truck, Phone, Clock, Navigation } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface OrderTrackingProps {
  orderId: string;
  status: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

interface GPSLocation {
  lat: number;
  lng: number;
  timestamp: string;
  address: string;
}

interface DeliveryPerson {
  name: string;
  phone: string;
  vehicleType: string;
  photo: string;
}

const OrderTracking = ({ orderId, status, estimatedDelivery, trackingNumber }: OrderTrackingProps) => {
  const [currentLocation, setCurrentLocation] = useState<GPSLocation | null>(null);
  const [deliveryPerson, setDeliveryPerson] = useState<DeliveryPerson | null>(null);
  const [isLiveTracking, setIsLiveTracking] = useState(false);
  const [deliveryProgress, setDeliveryProgress] = useState(0);

  // Simulate live GPS tracking
  useEffect(() => {
    if (status === 'shipped' && isLiveTracking) {
      const interval = setInterval(() => {
        // Simulate GPS location updates
        const mockLocation: GPSLocation = {
          lat: 36.7538 + (Math.random() - 0.5) * 0.01,
          lng: 3.0588 + (Math.random() - 0.5) * 0.01,
          timestamp: new Date().toISOString(),
          address: 'شارع الاستقلال، الجزائر العاصمة'
        };
        setCurrentLocation(mockLocation);
        
        // Update progress
        setDeliveryProgress(prev => Math.min(prev + Math.random() * 5, 95));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [status, isLiveTracking]);

  // Mock delivery person data
  useEffect(() => {
    if (status === 'shipped') {
      setDeliveryPerson({
        name: 'أحمد محمد',
        phone: '0555123456',
        vehicleType: 'دراجة نارية',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'
      });
      setDeliveryProgress(45);
    }
  }, [status]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-blue-500';
      case 'shipped': return 'bg-orange-500';
      case 'delivered': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'قيد المعالجة';
      case 'confirmed': return 'تم التأكيد';
      case 'shipped': return 'في الطريق';
      case 'delivered': return 'تم التوصيل';
      default: return status;
    }
  };

  const openInMaps = () => {
    if (currentLocation) {
      const url = `https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      {/* Order Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="font-arabic">تتبع الطلب #{orderId}</span>
            <Badge className={`${getStatusColor(status)} text-white font-arabic`}>
              {getStatusText(status)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingNumber && (
              <div className="flex items-center justify-between">
                <span className="font-arabic text-sm">رقم التتبع:</span>
                <span className="font-mono text-sm">{trackingNumber}</span>
              </div>
            )}
            
            {estimatedDelivery && (
              <div className="flex items-center justify-between">
                <span className="font-arabic text-sm">التوصيل المتوقع:</span>
                <span className="text-sm">{estimatedDelivery}</span>
              </div>
            )}

            {status === 'shipped' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-arabic text-sm">تقدم التوصيل:</span>
                  <span className="text-sm">{Math.round(deliveryProgress)}%</span>
                </div>
                <Progress value={deliveryProgress} className="h-2" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Live GPS Tracking */}
      {status === 'shipped' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="text-orange-500" size={20} />
                <span className="font-arabic">التتبع المباشر</span>
              </div>
              <Button
                variant={isLiveTracking ? "destructive" : "default"}
                size="sm"
                onClick={() => setIsLiveTracking(!isLiveTracking)}
                className="font-arabic"
              >
                {isLiveTracking ? 'إيقاف التتبع' : 'تفعيل التتبع'}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLiveTracking ? (
              <div className="space-y-4">
                {currentLocation && (
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                      <Navigation className="text-orange-500" size={16} />
                      <span className="font-semibold font-arabic text-sm">الموقع الحالي</span>
                      <Badge variant="secondary" className="text-xs">
                        مباشر
                      </Badge>
                    </div>
                    <p className="text-sm font-arabic text-gray-700 mb-2">
                      {currentLocation.address}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        آخر تحديث: {new Date(currentLocation.timestamp).toLocaleTimeString('ar-DZ')}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={openInMaps}
                        className="text-xs"
                      >
                        <MapPin size={14} className="mr-1" />
                        فتح في الخرائط
                      </Button>
                    </div>
                  </div>
                )}

                {/* Map Placeholder */}
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <MapPin className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-500 font-arabic">خريطة التتبع المباشر</p>
                    <p className="text-xs text-gray-400 font-arabic mt-1">
                      سيتم عرض الموقع الحالي للطلب هنا
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 font-arabic mb-2">التتبع المباشر غير مفعل</p>
                <p className="text-sm text-gray-500 font-arabic">
                  اضغط على "تفعيل التتبع" لمتابعة موقع طلبك في الوقت الفعلي
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Delivery Person Info */}
      {status === 'shipped' && deliveryPerson && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
              <Truck className="text-blue-500" size={20} />
              <span className="font-arabic">معلومات المندوب</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <img
                src={deliveryPerson.photo}
                alt={deliveryPerson.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold font-arabic">{deliveryPerson.name}</h4>
                <p className="text-sm text-gray-600 font-arabic">
                  {deliveryPerson.vehicleType}
                </p>
                <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-arabic"
                    onClick={() => window.open(`tel:${deliveryPerson.phone}`)}
                  >
                    <Phone size={14} className="mr-1" />
                    اتصال
                  </Button>
                  <span className="text-sm text-gray-500">
                    {deliveryPerson.phone}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Delivery Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <Clock className="text-green-500" size={20} />
            <span className="font-arabic">تسلسل الطلب</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-semibold font-arabic text-sm">تم استلام الطلب</p>
                <p className="text-xs text-gray-500">اليوم 09:30</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={`w-3 h-3 rounded-full ${status !== 'pending' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div>
                <p className="font-semibold font-arabic text-sm">تم تأكيد الطلب</p>
                <p className="text-xs text-gray-500">اليوم 10:15</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={`w-3 h-3 rounded-full ${status === 'shipped' || status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div>
                <p className="font-semibold font-arabic text-sm">تم شحن الطلب</p>
                <p className="text-xs text-gray-500">
                  {status === 'shipped' || status === 'delivered' ? 'اليوم 14:30' : 'قريباً'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={`w-3 h-3 rounded-full ${status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div>
                <p className="font-semibold font-arabic text-sm">تم التوصيل</p>
                <p className="text-xs text-gray-500">
                  {status === 'delivered' ? 'اليوم 16:45' : 'متوقع خلال ساعتين'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderTracking;
