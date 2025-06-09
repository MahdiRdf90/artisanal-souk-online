
import { useState } from 'react';
import { ShoppingCart, Bell, Settings, Home, User, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount?: number;
}

const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  const [language, setLanguage] = useState<'ar' | 'fr' | 'en'>('ar');
  const navigate = useNavigate();

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
      case 'ar': return 'ربط الحرف';
      case 'fr': return 'Craft Connect';
      case 'en': return 'Craft Connect';
    }
  };

  const getNavigationText = () => {
    switch (language) {
      case 'ar': return {
        home: 'الرئيسية',
        categories: 'الأصناف',
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
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ر</span>
            </div>
            <div>
              <h1 className={`text-2xl font-bold text-heritage-brown ${language === 'ar' ? 'font-arabic' : ''}`}>
                {getWelcomeText()}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'ar' ? 'منصة الحرف الجزائرية التقليدية' : 'Plateforme Artisanale Algérienne'}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className={`flex items-center space-x-2 rtl:space-x-reverse text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              <Home size={18} />
              <span>{nav.home}</span>
            </Link>
            <Link to="/categories" className={`text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {nav.categories}
            </Link>
            <Link to="/artisans" className={`text-heritage-brown hover:text-craft-orange transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {nav.artisans}
            </Link>
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
            <Link to="/cart">
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
            </Link>

            {/* Profile */}
            <Link to="/profile">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-heritage-brown hover:bg-warm-beige"
              >
                <User size={20} />
              </Button>
            </Link>

            {/* Vendor Dashboard */}
            <Link to="/vendor">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-heritage-brown hover:bg-warm-beige"
              >
                <Store size={20} />
              </Button>
            </Link>

            {/* Login Button */}
            <Link to="/login">
              <Button className="bg-craft-orange hover:bg-craft-orange/90 text-white px-6">
                {language === 'ar' ? 'دخول' : language === 'fr' ? 'Connexion' : 'Login'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
