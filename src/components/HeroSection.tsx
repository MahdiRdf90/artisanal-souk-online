
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import TraditionalBasket3D from './TraditionalBasket3D';

const HeroSection = () => {
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
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-arabic text-heritage-brown text-center">
                      اتفاقية الحرفي - منصة ربط الحرف
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold font-arabic text-craft-orange">
                        شروط وأحكام انضمام الحرفيين
                      </h3>
                    </div>
                    
                    <div className="space-y-4 font-arabic text-right">
                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">1. التعريف والهدف:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          منصة "ربط الحرف" هي منصة رقمية جزائرية تهدف إلى ربط الحرفيين التقليديين بالعملاء المحليين والدوليين، وتعزيز التراث الثقافي الجزائري من خلال التجارة الإلكترونية.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">2. شروط الانضمام:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>أن يكون المتقدم حرفياً مسجلاً أو يمارس حرفة تقليدية أصيلة</li>
                          <li>تقديم وثائق تثبت الهوية والإقامة في الجزائر</li>
                          <li>عرض صور وأوصاف دقيقة للمنتجات الحرفية</li>
                          <li>الالتزام بمعايير الجودة والأصالة</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">3. الالتزامات المالية:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>عمولة 8% على كل عملية بيع ناجحة</li>
                          <li>رسوم تحويل 2% للمدفوعات الإلكترونية</li>
                          <li>لا توجد رسوم اشتراك شهرية أو سنوية</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">4. حقوق والتزامات الحرفي:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>حق عرض المنتجات وتحديد الأسعار</li>
                          <li>الحصول على دعم تقني ومساعدة في التسويق</li>
                          <li>الالتزام بمواعيد التسليم المحددة</li>
                          <li>ضمان جودة المنتجات المعروضة</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">5. حقوق الملكية الفكرية:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          يحتفظ الحرفي بحقوق الملكية الفكرية لتصاميمه، وتلتزم المنصة بحماية هذه الحقوق وعدم استخدامها دون إذن مسبق.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-heritage-brown mb-2">6. فسخ الاتفاقية:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          يحق لأي من الطرفين فسخ هذه الاتفاقية بإشعار مسبق مدته 30 يوماً، مع احترام الالتزامات القائمة تجاه العملاء.
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <p className="text-center text-sm text-muted-foreground font-arabic">
                        بالنقر على "موافق"، أنت توافق على جميع الشروط والأحكام المذكورة أعلاه
                      </p>
                      <div className="flex gap-4 justify-center mt-4">
                        <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                          موافق - تسجيل كحرفي
                        </Button>
                        <Button variant="outline" className="font-arabic">
                          إلغاء
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-craft-orange text-craft-orange hover:bg-craft-orange hover:text-white px-8 py-6 text-lg font-arabic"
              >
                اتفاقية الحرفي
              </Button>
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
