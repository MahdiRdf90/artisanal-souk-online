
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const orderItems = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز بالذهب',
      vendor: 'ورشة فاطمة للقفطان',
      price: 25000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'إبريق نحاسي منقوش',
      vendor: 'النحاس الأصيل',
      price: 8500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
    }
  ];

  const shippingCost = 1400;

  const handleOrderSubmit = async (formData: any) => {
    setIsProcessing(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Order submitted:', {
        customer: formData,
        items: orderItems,
        shipping: shippingCost,
        timestamp: new Date().toISOString()
      });
      
      toast({
        title: "تم إرسال طلبك بنجاح! 🎉",
        description: "سيتم التواصل معك خلال 24 ساعة لتأكيد الطلب وتحديد موعد التوصيل",
      });
      
      // Redirect to orders page or success page
      navigate('/orders');
      
    } catch (error) {
      console.error('Order submission error:', error);
      toast({
        title: "حدث خطأ في إرسال الطلب",
        description: "يرجى المحاولة مرة أخرى أو التواصل مع خدمة العملاء",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={orderItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
            إتمام الطلب
          </h1>
          <h2 className="text-xl text-clay-brown">
            Finaliser la Commande
          </h2>
          <p className="text-muted-foreground mt-2">
            أكمل المعلومات المطلوبة لإتمام عملية الشراء بأمان
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm 
              onSubmit={handleOrderSubmit}
              isLoading={isProcessing}
            />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              items={orderItems}
              shippingCost={shippingCost}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
