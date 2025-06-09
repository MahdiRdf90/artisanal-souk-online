
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Star, Eye, ShoppingCart } from 'lucide-react';

const AnalyticsCharts = () => {
  // Mock data for analytics
  const analytics = {
    revenue: {
      current: 485000,
      previous: 428000,
      change: 13.3
    },
    orders: {
      current: 156,
      previous: 142,
      change: 9.9
    },
    products: {
      current: 24,
      previous: 22,
      change: 9.1
    },
    customers: {
      current: 89,
      previous: 76,
      change: 17.1
    },
    avgRating: {
      current: 4.8,
      previous: 4.6,
      change: 4.3
    },
    views: {
      current: 2340,
      previous: 1890,
      change: 23.8
    }
  };

  const topProducts = [
    {
      name: 'قفطان تقليدي مطرز بالذهب',
      sales: 23,
      revenue: 575000,
      views: 456,
      conversion: 5.0
    },
    {
      name: 'إناء فخاري تقليدي',
      sales: 18,
      revenue: 216000,
      views: 324,
      conversion: 5.6
    },
    {
      name: 'خاتم فضة بالأحجار',
      sales: 15,
      revenue: 225000,
      views: 289,
      conversion: 5.2
    },
    {
      name: 'حقيبة جلد تقليدية',
      sales: 12,
      revenue: 216000,
      views: 198,
      conversion: 6.1
    }
  ];

  const monthlyData = [
    { month: 'يناير', revenue: 245000, orders: 42 },
    { month: 'فبراير', revenue: 318000, orders: 58 },
    { month: 'مارس', revenue: 428000, orders: 72 },
    { month: 'أبريل', revenue: 485000, orders: 89 }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />;
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">الإيرادات</p>
                <p className="text-lg font-bold">{formatPrice(analytics.revenue.current)}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.revenue.change)}`}>
                  {getChangeIcon(analytics.revenue.change)}
                  <span className="mr-1">{formatPercentage(analytics.revenue.change)}</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">الطلبات</p>
                <p className="text-lg font-bold">{analytics.orders.current}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.orders.change)}`}>
                  {getChangeIcon(analytics.orders.change)}
                  <span className="mr-1">{formatPercentage(analytics.orders.change)}</span>
                </div>
              </div>
              <ShoppingCart className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">المنتجات</p>
                <p className="text-lg font-bold">{analytics.products.current}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.products.change)}`}>
                  {getChangeIcon(analytics.products.change)}
                  <span className="mr-1">{formatPercentage(analytics.products.change)}</span>
                </div>
              </div>
              <Package className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">العملاء</p>
                <p className="text-lg font-bold">{analytics.customers.current}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.customers.change)}`}>
                  {getChangeIcon(analytics.customers.change)}
                  <span className="mr-1">{formatPercentage(analytics.customers.change)}</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">التقييم</p>
                <p className="text-lg font-bold">{analytics.avgRating.current}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.avgRating.change)}`}>
                  {getChangeIcon(analytics.avgRating.change)}
                  <span className="mr-1">{formatPercentage(analytics.avgRating.change)}</span>
                </div>
              </div>
              <Star className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-arabic">المشاهدات</p>
                <p className="text-lg font-bold">{analytics.views.current}</p>
                <div className={`flex items-center text-sm ${getChangeColor(analytics.views.change)}`}>
                  {getChangeIcon(analytics.views.change)}
                  <span className="mr-1">{formatPercentage(analytics.views.change)}</span>
                </div>
              </div>
              <Eye className="h-8 w-8 text-craft-orange" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-arabic text-heritage-brown">الإيرادات الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-sand-beige rounded-lg">
                  <div>
                    <p className="font-arabic font-medium">{data.month}</p>
                    <p className="text-sm text-muted-foreground">{data.orders} طلب</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatPrice(data.revenue)} دج</p>
                    <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-2 bg-craft-orange rounded-full" 
                        style={{ width: `${(data.revenue / 500000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="font-arabic text-heritage-brown">أفضل المنتجات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Badge variant="outline" className="font-bold">
                      #{index + 1}
                    </Badge>
                    <div>
                      <p className="font-arabic font-medium">{product.name}</p>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-muted-foreground">
                        <span>{product.views} مشاهدة</span>
                        <span>تحويل {product.conversion}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{product.sales} مبيعة</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.revenue)} دج</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="font-arabic text-heritage-brown">نصائح لتحسين الأداء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <p className="font-medium text-green-800 font-arabic">أداء ممتاز</p>
              </div>
              <p className="text-sm text-green-700 font-arabic">
                معدل التحويل الخاص بك أعلى من المتوسط بنسبة 23%
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <p className="font-medium text-blue-800 font-arabic">تحسين الصور</p>
              </div>
              <p className="text-sm text-blue-700 font-arabic">
                أضف المزيد من الصور لمنتجاتك لزيادة المبيعات
              </p>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Star className="h-5 w-5 text-orange-600" />
                <p className="font-medium text-orange-800 font-arabic">تحسين التقييمات</p>
              </div>
              <p className="text-sm text-orange-700 font-arabic">
                تواصل مع العملاء لتحسين تقييماتك
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsCharts;
