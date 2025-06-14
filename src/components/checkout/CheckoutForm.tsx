
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Phone, Mail, User, CreditCard, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Schema for form validation
const checkoutSchema = z.object({
  firstName: z.string().min(2, 'الاسم الأول يجب أن يكون على الأقل حرفين'),
  lastName: z.string().min(2, 'اسم العائلة يجب أن يكون على الأقل حرفين'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().min(10, 'رقم الهاتف يجب أن يكون على الأقل 10 أرقام'),
  address: z.string().min(10, 'العنوان يجب أن يكون مفصلاً أكثر'),
  city: z.string().min(1, 'اختر المدينة'),
  postalCode: z.string().min(5, 'الرمز البريدي مطلوب'),
  paymentMethod: z.enum(['cod', 'baridimob', 'ccp', 'edahabia']),
  agreeTerms: z.boolean().refine(val => val === true, 'يجب الموافقة على الشروط والأحكام'),
  saveInfo: z.boolean().optional(),
  notes: z.string().optional()
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  isLoading?: boolean;
}

const CheckoutForm = ({ onSubmit, isLoading = false }: CheckoutFormProps) => {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState<string>('cod');

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'cod',
      agreeTerms: false,
      saveInfo: false,
      notes: ''
    }
  });

  const handleFormSubmit = (data: CheckoutFormData) => {
    console.log('تم إرسال بيانات الطلب:', data);
    toast({
      title: "تم إرسال الطلب بنجاح",
      description: "سيتم التواصل معك قريباً لتأكيد الطلب",
    });
    onSubmit(data);
  };

  const algerianCities = [
    'الجزائر العاصمة', 'وهران', 'قسنطينة', 'عنابة', 'باتنة', 'بلعباس', 'تيسمسيلت',
    'بجاية', 'تلمسان', 'سطيف', 'ورقلة', 'غرداية', 'تيارت', 'البليدة', 'مستغانم',
    'تبسة', 'بسكرة', 'خنشلة', 'الأغواط', 'سكيكدة', 'جيجل', 'الطارف', 'البويرة'
  ];

  const paymentMethods = [
    {
      id: 'cod',
      name: 'دفع عند الاستلام',
      name_fr: 'Paiement à la livraison',
      description: 'ادفع نقداً عند استلام طلبك',
      icon: '💰'
    },
    {
      id: 'baridimob',
      name: 'بريدي موب',
      name_fr: 'BaridiMob',
      description: 'الدفع عبر تطبيق بريدي موب',
      icon: '📱'
    },
    {
      id: 'ccp',
      name: 'تحويل بريدي CCP',
      name_fr: 'Virement CCP',
      description: 'تحويل عبر الحساب الجاري البريدي',
      icon: '🏦'
    },
    {
      id: 'edahabia',
      name: 'بطاقة الذهبية',
      name_fr: 'Carte Edahabia',
      description: 'الدفع ببطاقة الذهبية',
      icon: '💳'
    }
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <User className="text-craft-orange" size={20} />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                المعلومات الشخصية
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-arabic">الاسم الأول *</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل اسمك الأول" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-arabic">اسم العائلة *</FormLabel>
                    <FormControl>
                      <Input placeholder="أدخل اسم العائلة" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Mail size={16} />
                      <span className="font-arabic">البريد الإلكتروني *</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Phone size={16} />
                      <span className="font-arabic">رقم الهاتف *</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+213 555 123 456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <MapPin className="text-craft-orange" size={20} />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                عنوان التوصيل
              </h3>
            </div>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-arabic">العنوان الكامل *</FormLabel>
                    <FormControl>
                      <Input placeholder="الشارع، الحي، المنطقة..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-arabic">الولاية/المدينة *</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        >
                          <option value="">اختر الولاية</option>
                          {algerianCities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-arabic">الرمز البريدي *</FormLabel>
                      <FormControl>
                        <Input placeholder="16000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-arabic">ملاحظات إضافية (اختياري)</FormLabel>
                    <FormControl>
                      <textarea 
                        {...field}
                        rows={3}
                        placeholder="معلومات إضافية للتوصيل، الطابق، رقم الشقة..."
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <CreditCard className="text-craft-orange" size={20} />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                طريقة الدفع
              </h3>
            </div>
            
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 rtl:space-x-reverse p-4 border rounded-lg cursor-pointer hover:bg-sand-beige transition-colors">
                        <input 
                          type="radio" 
                          id={method.id}
                          {...field}
                          value={method.id}
                          checked={field.value === method.id}
                          onChange={() => {
                            field.onChange(method.id);
                            setSelectedPayment(method.id);
                          }}
                        />
                        <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold font-arabic flex items-center space-x-2 rtl:space-x-reverse">
                                <span>{method.icon}</span>
                                <span>{method.name}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">{method.name_fr}</div>
                              <div className="text-sm text-muted-foreground font-arabic">{method.description}</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Terms and Conditions */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <Shield className="text-craft-orange" size={20} />
              <h3 className="text-xl font-bold font-arabic text-heritage-brown">
                الشروط والأحكام
              </h3>
            </div>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 rtl:space-x-reverse space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-arabic">
                        أوافق على <a href="#" className="text-craft-orange hover:underline">الشروط والأحكام</a> و <a href="#" className="text-craft-orange hover:underline">سياسة الخصوصية</a> *
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="saveInfo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 rtl:space-x-reverse space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-arabic">
                        حفظ معلوماتي لعمليات الشراء المستقبلية
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex space-x-4 rtl:space-x-reverse">
          <Button 
            type="submit" 
            className="flex-1 bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic py-3 text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'جاري المعالجة...' : 'تأكيد الطلب وإتمام الشراء'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
