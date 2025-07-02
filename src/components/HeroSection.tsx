
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, ArrowRight, Star, Users, Package, Globe, ChevronDown, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovingImageGallery from './MovingImageGallery';

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
      {/* HERO SECTION - Full screen with warm, light background */}
      <section 
        className={`relative min-h-screen overflow-hidden ${
          backgroundType === 'gradient' 
            ? 'bg-gradient-to-br from-warm-beige via-background to-sand-beige' 
            : ''
        }`}
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

        {/* Background Overlay for better text readability - lighter overlay */}
        {(backgroundType === 'image' || backgroundType === 'video') && (
          <div className="absolute inset-0 bg-white/20"></div>
        )}

        {/* Decorative Grid Overlay - subtle */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(var(--craft-orange), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--craft-orange), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Decorative Elements */}
        {backgroundType === 'gradient' && (
          <div className="absolute inset-0">
            {/* Floating decorative orbs - subtle */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-craft-orange rounded-full blur-xl opacity-5 animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-48 h-48 bg-copper-accent rounded-full blur-2xl opacity-5 animate-float"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-heritage-brown rounded-full blur-3xl opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        )}

        {/* Background Control Panel - Enhanced with better styling */}
        <div className="absolute top-4 right-4 z-20">
          <Card className="p-4 bg-white/90 backdrop-blur-sm border border-craft-orange/20 shadow-lg">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-craft-orange">Background Settings</h4>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={resetToGradient}
                  className="border-craft-orange/50 text-craft-orange hover:bg-craft-orange/10 neon-button-outline"
                >
                  Default
                </Button>
                <label className="cursor-pointer">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild
                    className="border-copper-accent/50 text-copper-accent hover:bg-copper-accent/10 neon-button-outline"
                  >
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
                className="text-xs p-1 border border-heritage-brown/30 bg-white/80 text-heritage-brown rounded focus:border-heritage-brown focus:shadow-sm"
                onBlur={(e) => e.target.value && handleImageUrl(e.target.value)}
              />
            </div>
          </Card>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Hero Content - Enhanced with neon effects but readable text */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-craft-orange/10 rounded-full border border-craft-orange/30 shadow-lg backdrop-blur-sm">
                  <Star className="w-4 h-4 text-craft-orange mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-craft-orange font-arabic">المنصة الرائدة للحرف الجزائرية</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold font-arabic leading-tight text-heritage-brown">
                  اكتشف عالم
                  <span className="block text-transparent bg-gradient-to-r from-craft-orange via-copper-accent to-craft-orange bg-clip-text neon-glow">
                    الحرف التقليدية
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-clay-brown">
                  Découvrez l'Artisanat Algérien Authentique
                </h2>
                
                <p className="text-xl max-w-xl leading-relaxed text-heritage-brown/80">
                  تواصل مباشرة مع الحرفيين المحليين واكتشف إبداعات فريدة 
                  تحكي قصة تراثنا الثقافي العريق.
                </p>
              </div>

              {/* CTA Buttons - Enhanced with neon glow */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/categories">
                  <Button 
                    size="lg" 
                    className="bg-craft-orange hover:bg-craft-orange/90 text-white px-8 py-6 text-lg font-arabic rounded-xl shadow-lg shadow-craft-orange/30 hover:shadow-xl hover:shadow-craft-orange/50 transition-all duration-300 group w-full sm:w-auto border border-craft-orange/30 neon-button"
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
                      className="border-2 border-heritage-brown/50 text-heritage-brown hover:bg-heritage-brown/10 hover:border-heritage-brown hover:shadow-lg hover:shadow-heritage-brown/30 px-8 py-6 text-lg font-arabic rounded-xl transition-all duration-300 w-full sm:w-auto bg-white/50 backdrop-blur-sm neon-button-outline"
                    >
                      كن حرفياً
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white/95 border border-craft-orange/30 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-arabic text-craft-orange text-center">
                        انضم إلى مجتمع الحرفيين
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold font-arabic text-copper-accent">
                          اقرأ اتفاقية الحرفي قبل التسجيل
                        </h3>
                        <p className="text-heritage-brown/70 mt-2 font-arabic">
                          يرجى تحميل والاطلاع على اتفاقية الحرفي قبل الانضمام لمنصتنا
                        </p>
                      </div>
                      
                      <div className="flex justify-center mb-6">
                        <Button 
                          onClick={downloadAgreement}
                          className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic flex items-center gap-2 shadow-lg shadow-craft-orange/30 hover:shadow-xl hover:shadow-craft-orange/50 neon-button"
                        >
                          <Download className="w-4 h-4" />
                          تحميل اتفاقية الحرفي
                        </Button>
                      </div>

                      <div className="border-t border-heritage-brown/20 pt-6 mt-6">
                        <p className="text-center text-sm text-heritage-brown/60 font-arabic mb-4">
                          بعد قراءة الاتفاقية، يمكنك المتابعة للتسجيل كحرفي
                        </p>
                        <div className="flex gap-4 justify-center">
                          <Link to="/register">
                            <Button className="bg-heritage-brown hover:bg-heritage-brown/90 text-white font-arabic shadow-lg shadow-heritage-brown/30 hover:shadow-xl hover:shadow-heritage-brown/50 neon-button">
                              تسجيل كحرفي
                            </Button>
                          </Link>
                          <Button variant="outline" className="font-arabic border-heritage-brown/30 text-heritage-brown hover:bg-heritage-brown/10 hover:border-heritage-brown/50">
                            إلغاء
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Stats - Enhanced with neon cards */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-craft-orange/10 rounded-full mx-auto mb-3 group-hover:bg-craft-orange/20 transition-all duration-300 border border-craft-orange/30 shadow-lg shadow-craft-orange/20 group-hover:shadow-xl group-hover:shadow-craft-orange/40 neon-card">
                    <Users className="w-8 h-8 text-craft-orange" />
                  </div>
                  <div className="text-3xl font-bold text-craft-orange font-arabic">200+</div>
                  <div className="text-sm text-heritage-brown/60 font-arabic">حرفي مسجل</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-clay-brown/10 rounded-full mx-auto mb-3 group-hover:bg-clay-brown/20 transition-all duration-300 border border-clay-brown/30 shadow-lg shadow-clay-brown/20 group-hover:shadow-xl group-hover:shadow-clay-brown/40 neon-card">
                    <Package className="w-8 h-8 text-clay-brown" />
                  </div>
                  <div className="text-3xl font-bold text-clay-brown font-arabic">500+</div>
                  <div className="text-sm text-heritage-brown/60">منتج مميز</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-copper-accent/10 rounded-full mx-auto mb-3 group-hover:bg-copper-accent/20 transition-all duration-300 border border-copper-accent/30 shadow-lg shadow-copper-accent/20 group-hover:shadow-xl group-hover:shadow-copper-accent/40 neon-card">
                    <Globe className="w-8 h-8 text-copper-accent" />
                  </div>
                  <div className="text-3xl font-bold text-copper-accent font-arabic">48</div>
                  <div className="text-sm text-heritage-brown/60">ولاية مغطاة</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual - Enhanced with moving image gallery */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative pb-12">
                {/* Subtle glow frame around image gallery */}
                <div className="absolute -inset-4 bg-gradient-to-r from-craft-orange via-copper-accent to-heritage-brown rounded-3xl blur-lg opacity-10 animate-pulse"></div>
                
                {/* Moving Image Gallery */}
                <MovingImageGallery />
                
                {/* Floating Cards - Enhanced with better styling */}
                <Card className="absolute -top-4 -left-4 p-4 bg-white/90 backdrop-blur-sm shadow-xl shadow-craft-orange/20 animate-float border border-craft-orange/20 neon-card">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center shadow-lg shadow-craft-orange/30">
                      <span className="text-white font-bold text-lg">🏺</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-craft-orange">فخار تقليدي</p>
                      <p className="text-xs text-heritage-brown/60">Poterie authentique</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="absolute -bottom-4 -right-4 p-4 bg-white/90 backdrop-blur-sm shadow-xl shadow-heritage-brown/20 animate-float border border-heritage-brown/20 neon-card" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-heritage-brown rounded-full flex items-center justify-center shadow-lg shadow-heritage-brown/30">
                      <span className="text-white font-bold text-lg">👜</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-arabic text-heritage-brown">حرف جلدية</p>
                      <p className="text-xs text-heritage-brown/60">Maroquinerie</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Scroll Down Button - Enhanced with better styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToContent}
            className="rounded-full animate-bounce text-craft-orange hover:bg-craft-orange/10 border border-craft-orange/30 shadow-lg shadow-craft-orange/20 hover:shadow-xl hover:shadow-craft-orange/30 backdrop-blur-sm neon-button-outline"
          >
            <ChevronDown className="w-8 h-8" />
          </Button>
        </div>
      </section>

      {/* MAIN CONTENT SECTION - Light background with subtle styling */}
      <div id="main-content">
        {/* Featured Products Grid - Enhanced with light theme */}
        <div className="py-20 bg-gradient-to-b from-sand-beige to-warm-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-craft-orange font-arabic mb-4">
                أحدث الإبداعات الحرفية
              </h3>
              <p className="text-lg text-heritage-brown/70 max-w-2xl mx-auto">
                اكتشف مجموعة مختارة من أجمل المنتجات التقليدية الجزائرية
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product cards with authentic pottery and leather craft images */}
              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-craft-orange/20 transition-all duration-500 group-hover:-translate-y-2 bg-white/80 border border-craft-orange/20 backdrop-blur-sm neon-card">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center" 
                      alt="فخار تقليدي"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-craft-orange/10 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-craft-orange mb-2 font-arabic">فخار تقليدي</h4>
                    <p className="text-sm text-heritage-brown/60 mb-3">أواني طينية أصيلة من التراث</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 1,500 دج</span>
                      <ArrowRight className="w-4 h-4 text-craft-orange group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-copper-accent/20 transition-all duration-500 group-hover:-translate-y-2 bg-white/80 border border-copper-accent/20 backdrop-blur-sm neon-card">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center" 
                      alt="حرف جلدية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-copper-accent/10 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-copper-accent mb-2 font-arabic">حرف جلدية</h4>
                    <p className="text-sm text-heritage-brown/60 mb-3">حقائب وأحذية من الجلد الطبيعي</p>
                    <div className="flex items-center justify-between">
                      <span className="text-copper-accent font-bold">من 2,800 دج</span>
                      <ArrowRight className="w-4 h-4 text-copper-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-heritage-brown/20 transition-all duration-500 group-hover:-translate-y-2 bg-white/80 border border-heritage-brown/20 backdrop-blur-sm neon-card">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1587829797736-f6dc8ab4dc13?w=300&h=300&fit=crop&crop=center" 
                      alt="أواني فخارية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/10 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-heritage-brown mb-2 font-arabic">أواني فخارية</h4>
                    <p className="text-sm text-heritage-brown/60 mb-3">إبداعات خزفية للمطبخ التقليدي</p>
                    <div className="flex items-center justify-between">
                      <span className="text-heritage-brown font-bold">من 2,200 دج</span>
                      <ArrowRight className="w-4 h-4 text-heritage-brown group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/categories" className="group">
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-craft-orange/20 transition-all duration-500 group-hover:-translate-y-2 bg-white/80 border border-craft-orange/20 backdrop-blur-sm neon-card">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=center" 
                      alt="صناعة الجلود"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-craft-orange/10 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-craft-orange mb-2 font-arabic">صناعة الجلود</h4>
                    <p className="text-sm text-heritage-brown/60 mb-3">منتجات جلدية تقليدية فاخرة</p>
                    <div className="flex items-center justify-between">
                      <span className="text-craft-orange font-bold">من 3,500 دج</span>
                      <ArrowRight className="w-4 h-4 text-craft-orange group-hover:translate-x-1 transition-transform" />
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
