
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, ArrowRight, Star, Users, Package, Globe, ChevronDown, Upload, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Dynamic background state - can be easily modified
  const [backgroundType, setBackgroundType] = useState<'gradient' | 'image' | 'video'>('gradient');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundVideo, setBackgroundVideo] = useState('');

  // Smooth scroll function
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Background change handlers
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBackgroundImage(url);
      setBackgroundType('image');
    }
  };

  const handleImageUrl = (url: string) => {
    setBackgroundImage(url);
    setBackgroundType('image');
  };

  const resetToGradient = () => {
    setBackgroundType('gradient');
    setBackgroundImage('');
    setBackgroundVideo('');
  };

  // Download agreement function - kept exactly as before
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

  // Dynamic background styles
  const getBackgroundStyles = () => {
    switch (backgroundType) {
      case 'image':
        return {
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        };
      case 'video':
        return {};
      default: // gradient
        return {};
    }
  };

  return (
    <>
      {/* HERO SECTION - Full screen with dynamic background */}
      <section 
        className={`relative min-h-screen ${backgroundType === 'gradient' ? 'bg-gradient-to-br from-sand-beige via-warm-beige to-background' : ''} overflow-hidden`}
        style={getBackgroundStyles()}
      >
        {/* Background Video Support */}
        {backgroundType === 'video' && backgroundVideo && (
          <video 
            autoPlay 
            muted 
            loop 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}

        {/* Background Overlay for better text readability */}
        {(backgroundType === 'image' || backgroundType === 'video') && (
          <div className="absolute inset-0 bg-black/40"></div>
        )}

        {/* Modern Background Effects - only show with gradient */}
        {backgroundType === 'gradient' && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-10 w-64 h-64 bg-craft-orange rounded-full blur-3xl"></div>
              <div className="absolute bottom-32 right-20 w-80 h-80 bg-copper-accent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-heritage-brown rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        )}

        {/* Background Control Panel - Top Right Corner */}
        <div className="absolute top-4 right-4 z-20">
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Background Settings</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={resetToGradient}>
                  Default
                </Button>
                <label className="cursor-pointer">
                  <Button size="sm" variant="outline" asChild>
                    <span>
                      <Upload className="w-3 h-3 mr-1" />
                      Upload
                    </span>
                  </Button>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
              <input 
                type="url" 
                placeholder="Image URL"
                className="text-xs p-1 border rounded"
                onBlur={(e) => e.target.value && handleImageUrl(e.target.value)}
              />
            </div>
          </Card>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Hero Content - kept exactly as before */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-craft-orange/10 rounded-full border border-craft-orange/20">
                  <Star className="w-4 h-4 text-craft-orange mr-2" />
                  <span className="text-sm font-medium text-craft-orange font-arabic">المنصة الرائدة للحرف الجزائرية</span>
                </div>
                
                <h1 className={`text-6xl lg:text-7xl font-bold font-arabic leading-tight ${(backgroundType === 'image' || backgroundType === 'video') ? 'text-white' : 'text-heritage-brown'}`}>
                  اكتشف عالم
                  <span className="block text-transparent bg-gradient-to-r from-craft-orange to-copper-accent bg-clip-text">
                    الحرف التقليدية
                  </span>
                </h1>
                
                <h2 className={`text-2xl lg:text-3xl font-semibold mb-4 ${(backgroundType === 'image' || backgroundType === 'video') ? 'text-white/90' : 'text-clay-brown'}`}>
                  Découvrez l'Artisanat Algérien Authentique
                </h2>
                
                <p className={`text-xl max-w-xl leading-relaxed ${(backgroundType === 'image' || backgroundType === 'video') ? 'text-white/80' : 'text-muted-foreground'}`}>
                  تواصل مباشرة مع الحرفيين المحليين واكتشف إبداعات فريدة 
                  تحكي قصة تراثنا الثقافي العريق.
                </p>
              </div>

              {/* CTA Buttons - kept exactly as before */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/categories">
                  <Button 
                    size="lg" 
                    className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-6 text-lg font-arabic rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    تصفح المنتجات
                    <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white px-8 py-6 text-lg font-arabic rounded-xl transition-all duration-300 w-full sm:w-auto"
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
                          <Link to="/register">
                            <Button className="bg-heritage-brown hover:bg-heritage-brown/90 text-white font-arabic">
                              تسجيل كحرفي
                            </Button>
                          </Link>
                          <Button variant="outline" className="font-arabic">
                            إلغاء
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Stats - kept exactly as before */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-craft-orange/10 rounded-full mx-auto mb-3 group-hover:bg-craft-orange/20 transition-colors">
                    <Users className="w-8 h-8 text-craft-orange" />
                  </div>
                  <div className="text-3xl font-bold text-craft-orange font-arabic">200+</div>
                  <div className="text-sm text-muted-foreground font-arabic">حرفي مسجل</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-clay-brown/10 rounded-full mx-auto mb-3 group-hover:bg-clay-brown/20 transition-colors">
                    <Package className="w-8 h-8 text-clay-brown" />
                  </div>
                  <div className="text-3xl font-bold text-clay-brown font-arabic">500+</div>
                  <div className="text-sm text-muted-foreground">منتج مميز</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-copper-accent/10 rounded-full mx-auto mb-3 group-hover:bg-copper-accent/20 transition-colors">
                    <Globe className="w-8 h-8 text-copper-accent" />
                  </div>
                  <div className="text-3xl font-bold text-copper-accent font-arabic">48</div>
                  <div className="text-sm text-muted-foreground">ولاية مغطاة</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual - kept exactly as before */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Main Hero Image */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center" 
                    alt="Traditional Algerian Crafts"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Cards */}
                <Card className="absolute -top-4 -left-4 p-4 bg-white/90 backdrop-blur-sm shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🏺</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">فخار تقليدي</p>
                      <p className="text-xs text-muted-foreground">Poterie authentique</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="absolute -bottom-4 -right-4 p-4 bg-white/90 backdrop-blur-sm shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-heritage-brown rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🧵</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-arabic">نسيج بربري</p>
                      <p className="text-xs text-muted-foreground">Tissage berbère</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToContent}
            className={`rounded-full animate-bounce ${(backgroundType === 'image' || backgroundType === 'video') ? 'text-white hover:bg-white/20' : 'text-heritage-brown hover:bg-heritage-brown/10'}`}
          >
            <ChevronDown className="w-8 h-8" />
          </Button>
        </div>
      </section>

      {/* MAIN CONTENT SECTION - Added ID for smooth scrolling */}
      <div id="main-content">
        {/* Featured Products Grid - kept exactly as before */}
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-heritage-brown font-arabic mb-4">
                أحدث الإبداعات الحرفية
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                اكتشف مجموعة مختارة من أجمل المنتجات التقليدية الجزائرية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center" 
                      alt="فخار تقليدي"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-heritage-brown mb-2 font-arabic">فخار تقليدي</h4>
                    <p className="text-sm text-muted-foreground mb-3">إبداعات من الطين الأصيل</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 1,500 دج</span>
                      <ArrowRight className="w-4 h-4 text-heritage-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=300&fit=crop&crop=center" 
                      alt="نسيج وتطريز"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-heritage-brown mb-2 font-arabic">نسيج وتطريز</h4>
                    <p className="text-sm text-muted-foreground mb-3">قفاطين وزرابي بربرية</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 3,000 دج</span>
                      <ArrowRight className="w-4 h-4 text-heritage-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&crop=center" 
                      alt="مجوهرات بربرية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-heritage-brown mb-2 font-arabic">مجوهرات بربرية</h4>
                    <p className="text-sm text-muted-foreground mb-3">فضة وأحجار طبيعية</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 2,500 دج</span>
                      <ArrowRight className="w-4 h-4 text-heritage-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center" 
                      alt="حرف النحاس"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-heritage-brown mb-2 font-arabic">حرف النحاس</h4>
                    <p className="text-sm text-muted-foreground mb-3">مصابيح وأدوات زينة</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 1,800 دج</span>
                      <ArrowRight className="w-4 h-4 text-heritage-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
