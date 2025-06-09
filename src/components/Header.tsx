
import { useState } from 'react';
import { ShoppingCart, Bell, Settings, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemsCount?: number;
}

const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  const [language, setLanguage] = useState<'ar' | 'fr' | 'en'>('ar');

  const toggleLanguage = () => {
    const languages: ('ar' | 'fr' | 'en')[] = ['ar', 'fr', 'en'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const getLanguageText = () => {
    switch (language) {
      case 'ar': return 'العربية';
      case 'fr': return 'Français';
      case 'en': return 'English';
    }
  };

  const getWelcomeText = () => {
    switch (language) {
      case 'ar': return 'اتصال الحرف';
      case 'fr': return 'Craft Connect';
      case 'en': return 'Craft Connect';
    }
  };

  const getNavigationText = () => {
    switch (language) {
      case 'ar': return {
        home: 'الرئيسية',
        categories: 'الفئات',
        artisans: 'الحرفيين',
        cart: 'السلة'
      };
      case 'fr': return {
        home: 'Accueil',
        categories: 'Catégories',
        artisans: 'Artisans',
        cart: 'Panier'
      };
      case 'en': return {
        home: 'Home',
        categories: 'Categories',
        artisans: 'Artisans',
        cart: 'Cart'
      };
    }
  };

  const nav = getNavigationText();

  return (
    <header className="bg-white shadow-sm border-b border-heritage/10 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ح</span>
            </div>
            <div>
              <h1 className={`text-2xl font-bold text-heritage-brown ${language === 'ar' ? 'font-arabic' : ''}`}>
                {getWelcomeText()}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'ar' ? 'منصة الحرف الجزائرية' : 'Plateforme Artisanale Algérienne'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#" className={`flex items-center space-x-2 rtl:space-x-reverse text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              <Home size={18} />
              <span>{nav.home}</span>
            </a>
            <a href="#" className={`text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {nav.categories}
            </a>
            <a href="#" className={`text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {nav.artisans}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="text-heritage-brown hover:bg-warm-beige"
            >
              {getLanguageText()}
            </Button>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-heritage-brown hover:bg-warm-beige"
            >
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-craft-orange text-xs">
                2
              </Badge>
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-heritage-brown hover:bg-warm-beige"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-craft-orange text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Settings */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-heritage-brown hover:bg-warm-beige"
            >
              <Settings size={20} />
            </Button>

            {/* Login Button */}
            <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white px-6">
              {language === 'ar' ? 'تسجيل الدخول' : language === 'fr' ? 'Connexion' : 'Login'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
