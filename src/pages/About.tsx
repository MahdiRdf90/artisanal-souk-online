
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      <section className="py-20 bg-gradient-to-br from-sand-beige via-warm-beige to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold font-arabic text-heritage-brown mb-4">
                من نحن؟
              </h1>
              <h2 className="text-3xl font-semibold text-clay-brown mb-6">
                À Propos de Nous
              </h2>
              <div className="w-24 h-1 bg-craft-orange mx-auto"></div>
            </div>

            {/* Main Content */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-12">
              <CardContent className="p-12">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-6">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/5ee30ec6-0441-4b0d-8c48-a6d12ed463d4.png" 
                          alt="Craft Connect Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold font-arabic text-heritage-brown">ربط الحرف</h3>
                        <p className="text-clay-brown text-lg">Craft Connect</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed font-arabic text-heritage-brown mb-6">
                      نحن Craft Connect، منصة جزائرية مبتكرة تهدف إلى ربط الحرفيين المحليين بالعالم الرقمي. وُلدنا من شغف بحماية التراث الثقافي وتعزيز الصناعة اليدوية الأصيلة، فأنشأنا فضاءً رقميًا يُبرز إبداعات الحرفيين ويمنحهم فرصًا حقيقية للوصول إلى الزبائن داخل الجزائر وخارجها.
                    </p>

                    <p className="text-lg leading-relaxed font-arabic text-heritage-brown mb-6">
                      في Craft Connect، نؤمن أن كل قطعة مصنوعة يدويًا تحمل قصة تستحق أن تُروى. نستخدم التكنولوجيا لنروي تلك القصص، من خلال واجهة ذكية وسهلة، وميزات مبتكرة كالعرض بالذكاء الاصطناعي والدفع الإلكتروني بالدينار الجزائري.
                    </p>

                    <p className="text-xl font-bold font-arabic text-craft-orange text-center">
                      نحن الجسر بين التراث والمستقبل، بين الحرفة والرقمنة.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                    حماية التراث
                  </h3>
                  <p className="text-muted-foreground font-arabic">
                    نحافظ على التراث الثقافي الجزائري ونعرضه للعالم
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                    ربط الحرفيين
                  </h3>
                  <p className="text-muted-foreground font-arabic">
                    نصل الحرفيين بالعملاء المحليين والدوليين
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                    الابتكار التقني
                  </h3>
                  <p className="text-muted-foreground font-arabic">
                    نستخدم أحدث التقنيات لخدمة الحرف التقليدية
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
