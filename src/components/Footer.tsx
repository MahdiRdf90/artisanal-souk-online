
import { Card } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-heritage-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ر</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-arabic">ربط الحرف</h3>
                <p className="text-white/80">Craft Connect</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md font-arabic">
              منصة رقمية تربط الحرفيين الجزائريين بالعملاء المحليين والدوليين، 
              لتعزيز التراث الحرفي وتطوير الاقتصاد المحلي.
            </p>
            <p className="text-white/70 max-w-md">
              Une plateforme numérique qui connecte les artisans algériens avec 
              des clients locaux et internationaux, valorisant le patrimoine artisanal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-arabic">روابط سريعة</h4>
            <ul className="space-y-3 text-white/80 font-arabic">
              <li><a href="#" className="hover:text-craft-orange transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">أصناف المنتجات</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">الحرفيين</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support & Liens</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-craft-orange transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">Politique de retour</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-craft-orange transition-colors">Devenir partenaire</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h5 className="font-semibold mb-3 font-arabic">طرق الدفع المدعومة</h5>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Card className="p-3 bg-white/10 border-white/20">
                  <span className="text-sm font-semibold">BaridiMob</span>
                </Card>
                <Card className="p-3 bg-white/10 border-white/20">
                  <span className="text-sm font-semibold">CCP</span>
                </Card>
                <Card className="p-3 bg-white/10 border-white/20">
                  <span className="text-sm font-semibold font-arabic">دفع عند الاستلام</span>
                </Card>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <p className="text-white/60 text-sm font-arabic">
                &copy; 2025 ربط الحرف. جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
