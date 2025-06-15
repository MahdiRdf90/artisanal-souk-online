import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Menu, Search, ShoppingCart, User, Heart, Bell, Sparkles } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

// استيراد مكونات القائمة المنسدلة
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const navItems = [
    { href: '/', label: 'الرئيسية', labelFr: 'Accueil' },
    { href: '/categories', label: 'الأصناف', labelFr: 'Catégories' },
    { href: '/shop', label: 'المتجر', labelFr: 'Boutique' },
    { href: '/artisans', label: 'الحرفيون', labelFr: 'Artisans' },
    { href: '/about', label: 'من نحن', labelFr: 'À Propos' }
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold font-arabic text-heritage-brown">craft connect</span>
            <span className="text-xs text-clay-brown">Notre Patrimoine</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navItems.map(item => (
            <Link key={item.href} to={item.href} className="group flex flex-col items-center text-sm font-medium transition-colors hover:text-craft-orange">
              <span className="font-arabic">{item.label}</span>
              <span className="text-xs text-muted-foreground group-hover:text-craft-orange/70">
                {item.labelFr}
              </span>
            </Link>
          ))}

          {/* زر Ai craft */}
          <Button
            className="flex items-center gap-2 bg-craft-orange text-white font-arabic px-4 py-2 rounded-md hover:bg-craft-orange/90 transition-colors ml-3"
            style={{ direction: 'rtl' }}
            onClick={() => {
              // يمكنك مستقبلاً ربطه بصفحة الذكاء الاصطناعي أو نافذة خاصة
              alert('قريبًا ستتمكن من البحث في تاريخ جميع الحرف عن طريق الذكاء الاصطناعي!');
            }}
          >
            <Sparkles size={18} className="mr-1" />
            Ai craft
          </Button>
        </nav>

        {/* Search Bar - Desktop */}
        {/* تم تعطيل البحث حسب الطلب */}

        {/* Actions */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </Link>
          {/* باقي الأزرار تم تعطيلها حسب الطلب */}
          {/* Wishlist */}
          {/* <Button variant="ghost" size="sm" className="hidden md:flex">
            <Heart size={20} />
          </Button> */}
          {/* Notifications */}
          {/* <Button variant="ghost" size="sm" className="hidden md:flex">
            <Bell size={20} />
          </Button> */}
          {/* Profile */}
          <Link to="/profile">
            <Button variant="ghost" size="sm">
              <User size={20} />
            </Button>
          </Link>
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-4">
                {/* Mobile Search */}
                {/* <form onSubmit={handleSearch} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input type="search" placeholder="ابحث في المنتجات..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 font-arabic" />
                  </div>
                </form> */}
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {navItems.map(item => (
                    <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                      <span className="font-arabic font-medium">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.labelFr}</span>
                    </Link>
                  ))}
                  {/* زر Ai craft للموبايل */}
                  <Button
                    className="flex items-center gap-2 bg-craft-orange text-white font-arabic px-4 py-2 rounded-md hover:bg-craft-orange/90 transition-colors mt-2"
                    style={{ direction: 'rtl' }}
                    onClick={() => {
                      setIsOpen(false);
                      alert('قريبًا ستتمكن من البحث في تاريخ جميع الحرف عن طريق الذكاء الاصطناعي!');
                    }}
                  >
                    <Sparkles size={18} className="mr-1" />
                    Ai craft
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
