import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const MAIN_CATEGORIES = [
  {
    id: "1",
    name_ar: "الحرف اليدوية المعتمدة على المواد الطبيعية",
    subcategories: [
      { id: "wood-crafts", name_ar: "الحرف الخشبية" },
      { id: "pottery-crafts", name_ar: "الحرف الطينية والفخارية" },
      { id: "stone-crafts", name_ar: "الحرف الحجرية" },
      { id: "plant-crafts", name_ar: "الحرف النباتية" },
      { id: "leather-crafts", name_ar: "الحرف الجلدية" },
    ],
  },
  {
    id: "2",
    name_ar: "الحرف النسيجية والخياطة",
    subcategories: [
      { id: "embroidery-weaving", name_ar: "التطريز والنسيج" },
      { id: "traditional-sewing", name_ar: "الخياطة والملابس التقليدية" },
    ],
  },
  {
    id: "3",
    name_ar: "الحرف الزخرفية والتزيينية",
    subcategories: [
      { id: "jewelry", name_ar: "المجوهرات" },
      { id: "decoration-painting", name_ar: "الزخرفة والرسم" },
      { id: "dolls-ornaments", name_ar: "صناعة الدمى والزينة" },
    ],
  },
  {
    id: "4",
    name_ar: "الحرف المعدنية",
    subcategories: [
      { id: "metalwork", name_ar: "الأشغال المعدنية" }
    ],
  },
  {
    id: "5",
    name_ar: "الصناعات الغذائية التقليدية",
    subcategories: [
      { id: "traditional-sweets", name_ar: "الحلويات التقليدية" },
      { id: "traditional-food", name_ar: "المأكولات التقليدية" },
      { id: "dairy-products", name_ar: "الألبان ومشتقاتها" },
      { id: "grains-legumes", name_ar: "الحبوب والبقوليات" },
      { id: "honey-herbs", name_ar: "منتجات العسل والنباتات العطرية" },
      { id: "traditional-spices", name_ar: "البهارات والتوابل التقليدية" },
    ],
  },
  {
    id: "6",
    name_ar: "الحرف التجميلية والعطرية",
    subcategories: [
      { id: "cosmetics-perfumes", name_ar: "المستحضرات التجميلية والعطرية" }
    ],
  },
  {
    id: "7",
    name_ar: "حرف فنية حديثة أو هجينة",
    subcategories: [
      { id: "modern-arts", name_ar: "الفنون الحديثة والهجينة" }
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-craft-orange flex items-center gap-2 font-arabic">
          <span>حرفة</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {/* ---- الأصناف Dropdown ---- */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="font-arabic text-lg text-heritage-brown hover:bg-craft-orange/10 px-3 py-1"
              >
                الأصناف
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="z-[1000] bg-white w-80 shadow-lg border"
            >
              {MAIN_CATEGORIES.map((cat) => (
                <DropdownMenuSub key={cat.id}>
                  <DropdownMenuSubTrigger className="font-arabic flex justify-between">
                    <span>{cat.name_ar}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="z-[1100] bg-white w-64">
                    {cat.subcategories.map((sub) => (
                      <DropdownMenuItem
                        className="font-arabic"
                        key={sub.id}
                        onClick={() =>
                          handleNavigate(`/shop?category=${encodeURIComponent(sub.name_ar)}`)
                        }
                      >
                        {sub.name_ar}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
              {/* زر لكل الأصناف الرئيسية */}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-center font-arabic text-craft-orange"
                onClick={() => handleNavigate('/categories')}
              >
                استعراض جميع الأصناف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* بقية عناصر القائمة ... */}
          <Link to="/artisans" className="font-arabic text-lg text-heritage-brown hover:text-craft-orange px-3 py-1"> الحرفيون </Link>
          <Link to="/shop" className="font-arabic text-lg text-heritage-brown hover:text-craft-orange px-3 py-1"> المتجر </Link>

          <Button
            variant="outline"
            className="flex items-center gap-2 font-arabic text-craft-orange border-craft-orange px-3 py-1"
            onClick={() => alert("قريبًا: بحث الحرف بالذكاء الاصطناعي!")}
          >
            <Sparkles size={18} />
            Ai craft
          </Button>

          <Link to="/cart">
            <ShoppingCart className="text-craft-orange" size={22} />
          </Link>
          <Link to="/profile">
            <User className="text-heritage-brown" size={22} />
          </Link>
        </nav>

        {/* --- القائمة الجانبية للموبايل --- */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* قائمة الموبايل */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg absolute top-16 left-0 right-0 z-[999] space-y-2">
          {/* ------- Dropdown الأصناف للموبايل ------- */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="font-arabic w-full text-left text-lg text-heritage-brown"
              >
                الأصناف
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={2} className="w-full z-[1010] bg-white border">
              {MAIN_CATEGORIES.map((cat) => (
                <DropdownMenuSub key={cat.id}>
                  <DropdownMenuSubTrigger className="font-arabic flex justify-between">
                    <span>{cat.name_ar}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-white w-full z-[1110]">
                    {cat.subcategories.map((sub) => (
                      <DropdownMenuItem
                        className="font-arabic"
                        key={sub.id}
                        onClick={() => {
                          handleNavigate(`/shop?category=${encodeURIComponent(sub.name_ar)}`);
                        }}
                      >
                        {sub.name_ar}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="font-arabic text-craft-orange text-center"
                onClick={() => handleNavigate('/categories')}
              >
                استعراض جميع الأصناف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/artisans" className="block font-arabic text-lg text-heritage-brown px-2 py-1">الحرفيون</Link>
          <Link to="/shop" className="block font-arabic text-lg text-heritage-brown px-2 py-1">المتجر</Link>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 font-arabic text-craft-orange border-craft-orange justify-center"
            onClick={() => alert("قريبًا: بحث الحرف بالذكاء الاصطناعي!")}
          >
            <Sparkles size={18} />
            Ai craft
          </Button>
          <Link to="/cart" className="block py-1">
            <ShoppingCart className="text-craft-orange inline mr-2" size={20} />
            السلة
          </Link>
          <Link to="/profile" className="block py-1">
            <User className="text-heritage-brown inline mr-2" size={20} />
            حسابي
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
