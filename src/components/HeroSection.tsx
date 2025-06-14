
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download } from 'lucide-react';
import TraditionalBasket3D from './TraditionalBasket3D';

const HeroSection = () => {
  const downloadAgreement = () => {
    const agreementContent = `📄 اتفاقية الحرفي

مرحبًا بك في مجتمع Craft Connect!
قبل عرض خدماتك ومنتجاتك عبر منصتنا، نرجو منك الاطلاع والالتزام بالشروط التالية:

✅ القوانين الأساسية:

1. الشفافية والمصداقية
يلتزم الحرفي بتقديم معلومات دقيقة وصور واقعية للمنتجات دون مبالغة أو تضليل، مع تحديد السعر النهائي شاملًا كل التكاليف.

2. احترام المواعيد
يلتزم الحرفي باحترام آجال التسليم المتفق عليها مع الزبون، مع إشعار مسبق في حال وجود أي تأخير مبرّر.

3. الجودة والاحترافية
يلتزم الحرفي بتقديم منتجات بجودة مطابقة للوصف، والعمل على تحسين مستمر لخدماته بما يعكس صورة إيجابية عن الحرفة الجزائرية.

تفاعل مع الزبائن باحترام ولباقة، فالسمعة الجيدة هي مفتاح النجاح.

---
تاريخ الإصدار: ${new Date().toLocaleDateString('ar-DZ')}
منصة Craft Connect - ربط الحرف التقليدية الجزائرية`;

    const blob = new Blob([agreementContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'اتفاقية_الحرفي.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative bg-gradient-to-br from-sand-beige via-warm-beige to-background py-20 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-heritage-brown rotate-45"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-craft-orange rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-clay-brown rotate-12"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 border-2 border-copper-accent rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Basket */}
          <div className="order-2 lg:order-1">
            <TraditionalBasket3D />
            <p className="text-center text-sm text-muted-foreground mt-2 font-arabic">
              اسحب للدوران • تكبير وتصغير • سلال تقليدية جزائرية ثلاثية الأبعاد
            </p>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-fade-in-up order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-arabic text-heritage-brown leading-tight">
                اكتشف عالم
                <span className="block text-craft-orange">الحرف التقليدية</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-clay-brown">
                Découvrez l'Artisanat Algérien Authentique
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                تواصل مباشرة مع الحرفيين المحليين واكتشف إبداعات فريدة 
                تحكي قصة تراثنا الثقافي العريق.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-6 text-lg font-arabic"
              >
                تصفح المنتجات
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-6 text-lg"
                  >
                    كن حرفياً
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-arabic text-heritage-brown text-center">
                      انضم إلى مجتمع الحرفيين
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold font-arabic text-craft-orange">
                        اقرأ اتفاقية الحرفي قبل التسجيل
                      </h3>
                      <p className="text-muted-foreground mt-2 font-arabic">
                        يرجى تحميل والاطلاع على اتفاقية الحرفي قبل الانضمام لمنصتنا
                      </p>
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      <Button 
                        onClick={downloadAgreement}
                        className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        تحميل اتفاقية الحرفي
                      </Button>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <p className="text-center text-sm text-muted-foreground font-arabic mb-4">
                        بعد قراءة الاتفاقية، يمكنك المتابعة للتسجيل كحرفي
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button className="bg-heritage-brown hover:bg-heritage-brown/90 text-white font-arabic">
                          تسجيل كحرفي
                        </Button>
                        <Button variant="outline" className="font-arabic">
                          إلغاء
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-craft-orange font-arabic">200+</div>
                <div className="text-sm text-muted-foreground font-arabic">حرفي مسجل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-brown font-arabic">500+</div>
                <div className="text-sm text-muted-foreground">منتج مميز</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-copper-accent font-arabic">48</div>
                <div className="text-sm text-muted-foreground">ولاية مغطاة</div>
              </div>
            </div>

            {/* Product cards moved below content */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float">
                <div className="aspect-square bg-gradient-to-br from-craft-orange to-copper-accent rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center" 
                    alt="فخار تقليدي"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">فخار تقليدي</h3>
                <p className="text-sm text-muted-foreground">إبداعات من الطين الأصيل</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                <div className="aspect-square bg-gradient-to-br from-clay-brown to-heritage-brown rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=200&fit=crop&crop=center" 
                    alt="نسيج وتطريز"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">نسيج وتطريز</h3>
                <p className="text-sm text-muted-foreground">قفاطين وزرابي بربرية</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-copper-accent to-craft-orange rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=center" 
                    alt="مجوهرات بربرية"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">مجوهرات بربرية</h3>
                <p className="text-sm text-muted-foreground">فضة وأحجار طبيعية</p>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="aspect-square bg-gradient-to-br from-heritage-brown to-clay-brown rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center" 
                    alt="حرف النحاس"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-heritage-brown mb-2 font-arabic">حرف النحاس</h3>
                <p className="text-sm text-muted-foreground">مصابيح وأدوات زينة</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
