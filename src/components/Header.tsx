import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Menu, Search, ShoppingCart, User, Heart, Bell, Sparkles } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import AiCraftModal from "@/components/AiCraftModal";

// استيراد مكونات القائمة المنسدلة
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// قائمة الأصناف للاستخدام في القائمة المنسدلة
const categories = [
  'الحلويات التقليدية',
  'الحرف اليدوية المعتمدة على المواد الطبيعية',
  'الحرف النسيجية والخياطة',
  'الحرف الزخرفية والتزيينية',
  'الحرف المعدنية',
  'الحرف التجميلية والعطرية',
  'حرف فنية حديثة أو هجينة'
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiModalOpen, setAiModalOpen] = useState(false); // state لفتح المودال
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
    // حذف الأصناف من هنا ليتم معالجتها كمكون خاص بالقائمة المنسدلة لاحقًا
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

          {/* Dropdown للأصناف */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex flex-col items-center text-sm font-medium relative font-arabic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craft-orange"
              >
                <span>الأصناف</span>
                <span className="text-xs text-muted-foreground">Catégories</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="z-50 bg-white font-arabic mt-2">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => {
                    navigate(`/shop?category=${encodeURIComponent(category)}`);
                  }}
                  className="cursor-pointer"
                >
                  <span className="font-arabic">{category}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* زر Ai craft الجديد */}
          <Button
            className="flex items-center gap-2 bg-craft-orange text-white font-arabic px-4 py-2 rounded-md hover:bg-craft-orange/90 transition-colors ml-3"
            style={{ direction: 'rtl' }}
            onClick={() => setAiModalOpen(true)}
          >
            <Sparkles size={18} className="mr-1" />
            Ai craft
          </Button>
        </nav>

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
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {/* روابط العناصر الأخرى */}
                  <Link key="/" to="/" onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                    <span className="font-arabic font-medium">الرئيسية</span>
                    <span className="text-sm text-muted-foreground">Accueil</span>
                  </Link>
                  {/* الأصناف للموبايل (بدون Dropdown في السايد شيت) */}
                  <Link key="/categories" to="/categories" onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                    <span className="font-arabic font-medium">الأصناف</span>
                    <span className="text-sm text-muted-foreground">Catégories</span>
                  </Link>
                  <Link key="/shop" to="/shop" onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                    <span className="font-arabic font-medium">المتجر</span>
                    <span className="text-sm text-muted-foreground">Boutique</span>
                  </Link>
                  <Link key="/artisans" to="/artisans" onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                    <span className="font-arabic font-medium">الحرفيون</span>
                    <span className="text-sm text-muted-foreground">Artisans</span>
                  </Link>
                  <Link key="/about" to="/about" onClick={() => setIsOpen(false)} className="flex flex-col p-2 rounded-md hover:bg-sand-beige transition-colors">
                    <span className="font-arabic font-medium">من نحن</span>
                    <span className="text-sm text-muted-foreground">À Propos</span>
                  </Link>
                  {/* زر Ai craft للموبايل */}
                  <Button
                    className="flex items-center gap-2 bg-craft-orange text-white font-arabic px-4 py-2 rounded-md hover:bg-craft-orange/90 transition-colors mt-2"
                    style={{ direction: 'rtl' }}
                    onClick={() => {
                      setIsOpen(false);
                      setAiModalOpen(true);
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
      {/* مودال الذكاء الاصطناعي */}
      <AiCraftModal open={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </header>
  );
};

export default Header;
