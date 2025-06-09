
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit, MessageCircle, Package, Truck, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  customerEmail: string;
  product: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  date: string;
  shippingAddress: string;
  phone: string;
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

const OrdersTable = () => {
  const [orders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customer: 'سارة أحمد',
      customerEmail: 'sara.ahmed@email.com',
      product: 'قفطان تقليدي مطرز بالذهب',
      quantity: 1,
      amount: 25000,
      status: 'pending',
      date: '2025-01-20',
      shippingAddress: 'الجزائر العاصمة، الجزائر',
      phone: '0555123456',
      notes: 'يرجى التواصل قبل التوصيل'
    },
    {
      id: 'ORD-002',
      customer: 'نادية محمد',
      customerEmail: 'nadia.mohamed@email.com',
      product: 'إناء فخاري تقليدي',
      quantity: 2,
      amount: 12000,
      status: 'shipped',
      date: '2025-01-19',
      shippingAddress: 'وهران، الجزائر',
      phone: '0561234567',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2025-01-22'
    },
    {
      id: 'ORD-003',
      customer: 'زينب علي',
      customerEmail: 'zeinab.ali@email.com',
      product: 'خاتم فضة بالأحجار',
      quantity: 1,
      amount: 15000,
      status: 'delivered',
      date: '2025-01-18',
      shippingAddress: 'قسنطينة، الجزائر',
      phone: '0571234567'
    },
    {
      id: 'ORD-004',
      customer: 'فاطمة حسن',
      customerEmail: 'fatima.hassan@email.com',
      product: 'حقيبة جلد تقليدية',
      quantity: 1,
      amount: 18000,
      status: 'confirmed',
      date: '2025-01-21',
      shippingAddress: 'تلمسان، الجزائر',
      phone: '0581234567'
    }
  ]);

  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-yellow-500 hover:bg-yellow-600',
      'confirmed': 'bg-blue-500 hover:bg-blue-600',
      'preparing': 'bg-purple-500 hover:bg-purple-600',
      'shipped': 'bg-orange-500 hover:bg-orange-600',
      'delivered': 'bg-green-500 hover:bg-green-600',
      'cancelled': 'bg-red-500 hover:bg-red-600',
      'returned': 'bg-gray-500 hover:bg-gray-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  const getStatusText = (status: string) => {
    const statusTexts = {
      'pending': 'قيد الانتظار',
      'confirmed': 'مؤكد',
      'preparing': 'قيد التحضير',
      'shipped': 'تم الشحن',
      'delivered': 'تم التوصيل',
      'cancelled': 'ملغي',
      'returned': 'مرتجع'
    };
    return statusTexts[status as keyof typeof statusTexts] || status;
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      'pending': <Package size={16} />,
      'confirmed': <CheckCircle size={16} />,
      'preparing': <Edit size={16} />,
      'shipped': <Truck size={16} />,
      'delivered': <CheckCircle size={16} />,
      'cancelled': <XCircle size={16} />,
      'returned': <XCircle size={16} />
    };
    return icons[status as keyof typeof icons] || <Package size={16} />;
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
    // In a real app, this would make an API call
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterOrders(term, statusFilter);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    filterOrders(searchTerm, status);
  };

  const filterOrders = (search: string, status: string) => {
    let filtered = orders;

    if (search) {
      filtered = filtered.filter(order =>
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== 'all') {
      filtered = filtered.filter(order => order.status === status);
    }

    setFilteredOrders(filtered);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-arabic text-heritage-brown">إدارة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="البحث في الطلبات..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 font-arabic"
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="md:w-48">
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="تصفية حسب الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="font-arabic">جميع الطلبات</SelectItem>
                <SelectItem value="pending" className="font-arabic">قيد الانتظار</SelectItem>
                <SelectItem value="confirmed" className="font-arabic">مؤكد</SelectItem>
                <SelectItem value="preparing" className="font-arabic">قيد التحضير</SelectItem>
                <SelectItem value="shipped" className="font-arabic">تم الشحن</SelectItem>
                <SelectItem value="delivered" className="font-arabic">تم التوصيل</SelectItem>
                <SelectItem value="cancelled" className="font-arabic">ملغي</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Orders Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-arabic">رقم الطلب</TableHead>
                  <TableHead className="font-arabic">العميل</TableHead>
                  <TableHead className="font-arabic">المنتج</TableHead>
                  <TableHead className="font-arabic">الكمية</TableHead>
                  <TableHead className="font-arabic">المبلغ</TableHead>
                  <TableHead className="font-arabic">الحالة</TableHead>
                  <TableHead className="font-arabic">التاريخ</TableHead>
                  <TableHead className="font-arabic">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell className="font-arabic">{order.customer}</TableCell>
                    <TableCell className="font-arabic">{order.product}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell className="font-arabic">{formatPrice(order.amount)} دج</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(order.status)} text-white font-arabic`}>
                        {getStatusIcon(order.status)}
                        <span className="mr-1">{getStatusText(order.status)}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => console.log('Message customer:', order.customerEmail)}
                        >
                          <MessageCircle size={16} />
                        </Button>
                        {order.status === 'pending' && (
                          <Button
                            size="sm"
                            className="bg-craft-orange hover:bg-craft-orange/90"
                            onClick={() => updateOrderStatus(order.id, 'confirmed')}
                          >
                            تأكيد
                          </Button>
                        )}
                        {order.status === 'confirmed' && (
                          <Button
                            size="sm"
                            className="bg-purple-500 hover:bg-purple-600"
                            onClick={() => updateOrderStatus(order.id, 'preparing')}
                          >
                            تحضير
                          </Button>
                        )}
                        {order.status === 'preparing' && (
                          <Button
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600"
                            onClick={() => updateOrderStatus(order.id, 'shipped')}
                          >
                            شحن
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <Package size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 font-arabic">لا توجد طلبات تطابق البحث</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Order Details Modal */}
      {selectedOrder && (
        <Card className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <CardContent className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                تفاصيل الطلب {selectedOrder.id}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOrder(null)}
              >
                <XCircle size={16} />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="font-arabic text-sm font-medium">العميل</Label>
                  <p className="font-arabic">{selectedOrder.customer}</p>
                  <p className="text-sm text-gray-600">{selectedOrder.customerEmail}</p>
                  <p className="text-sm text-gray-600">{selectedOrder.phone}</p>
                </div>
                <div>
                  <Label className="font-arabic text-sm font-medium">عنوان الشحن</Label>
                  <p className="font-arabic">{selectedOrder.shippingAddress}</p>
                </div>
              </div>

              <div>
                <Label className="font-arabic text-sm font-medium">المنتج</Label>
                <p className="font-arabic">{selectedOrder.product}</p>
                <p className="text-sm text-gray-600">الكمية: {selectedOrder.quantity}</p>
                <p className="text-sm text-gray-600 font-arabic">المبلغ: {formatPrice(selectedOrder.amount)} دج</p>
              </div>

              {selectedOrder.notes && (
                <div>
                  <Label className="font-arabic text-sm font-medium">ملاحظات العميل</Label>
                  <p className="font-arabic">{selectedOrder.notes}</p>
                </div>
              )}

              {selectedOrder.trackingNumber && (
                <div>
                  <Label className="font-arabic text-sm font-medium">رقم التتبع</Label>
                  <p>{selectedOrder.trackingNumber}</p>
                </div>
              )}

              {selectedOrder.estimatedDelivery && (
                <div>
                  <Label className="font-arabic text-sm font-medium">تاريخ التوصيل المتوقع</Label>
                  <p>{selectedOrder.estimatedDelivery}</p>
                </div>
              )}

              <div className="flex justify-end space-x-2 rtl:space-x-reverse pt-4">
                <Button
                  variant="outline"
                  onClick={() => console.log('Print order:', selectedOrder.id)}
                >
                  طباعة
                </Button>
                <Button
                  className="bg-craft-orange hover:bg-craft-orange/90"
                  onClick={() => console.log('Message customer:', selectedOrder.customerEmail)}
                >
                  مراسلة العميل
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrdersTable;
