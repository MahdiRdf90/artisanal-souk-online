
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const products = [
  {
    id: "kahlouchi1",
    name: "كحلوشي",
    image: "/lovable-uploads/8d1a4659-8e4a-484b-b2a5-02b9002daa37.png",
    price: 500,
    unit: "حبة",
    available: true,
    description: "حلويات كحلوشي الأصلية من Fatima cook",
  },
  {
    id: "baklawa1",
    name: "بقلاوة",
    image: "/lovable-uploads/3b322311-3a2f-49ba-aeb8-7c97e3d74d9e.png",
    price: 700,
    unit: "حصة",
    available: true,
    description: "بقلاوة جزائرية بالطريقة التقليدية.",
  },
  {
    id: "maqroute1",
    name: "مقروط",
    image: "/lovable-uploads/5ee30ec6-0441-4b0d-8c48-a6d12ed463d4.png",
    price: 400,
    unit: "حبة",
    available: true,
    description: "مقروط التمر مع العسل الطبيعي.",
  },
];

const initialComments = [
  {
    user: "سعاد من سطيف",
    text: "منتجات شهية جدا والتوصيل سريع! أنصح بالجميع.",
  },
  {
    user: "أمينة من الجزائر العاصمة",
    text: "بقلاوة Fatima cook لا تقاوم. خدمة ممتازة!",
  },
];

const FatimaCookShop = () => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number|null>(null);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  // Dummy add comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([{user: "مستخدم مجهول", text: newComment}, ...comments]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="/lovable-uploads/4da720f7-b770-4338-9b8d-5f8dfb0680e1.png"
            alt="Fatima cook logo"
            className="w-40 h-40 rounded-full border-4 border-craft-orange object-cover bg-white"
          />
          <div>
            <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">Fatima cook</h1>
            <p className="text-clay-brown mb-1 font-arabic">المتجر الرسمي - سطيف</p>
            <div className="flex items-center gap-2 mb-2">
              {Array.from({length: 5}).map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className={
                    "cursor-pointer " +
                    ((hoverRating !== null ? i < hoverRating : i < rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300")
                  }
                  onMouseEnter={() => setHoverRating(i+1)}
                  onMouseLeave={() => setHoverRating(null)}
                  onClick={() => setRating(i+1)}
                  aria-label={`التقييم بـ ${i+1} نجوم`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground font-arabic">(تقييمك: {rating})</span>
            </div>
            <Badge variant="secondary" className="font-arabic">حرف غذائية</Badge>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 font-arabic text-craft-orange">منتجات Fatima cook</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map(product => (
            <Card key={product.id} className="h-full">
              <CardContent className="p-4 flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-xl font-arabic font-bold text-heritage-brown mb-1">
                  {product.name}
                </h3>
                <p className="mb-1 text-sm text-muted-foreground font-arabic">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-craft-orange font-bold text-lg">
                    {product.price} دج / {product.unit}
                  </span>
                  {product.available ? (
                    <Badge className="bg-green-500 text-white text-xs">متوفر</Badge>
                  ) : (
                    <Badge variant="destructive" className="text-xs">غير متوفر</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold font-arabic text-craft-orange mb-4">التعليقات</h2>
          <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
            <input
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="اكتب تعليقك هنا..."
              className="flex-grow px-4 py-2 rounded border border-input font-arabic"
            />
            <button
              type="submit"
              className="bg-craft-orange text-white px-5 py-2 rounded font-arabic hover:bg-craft-orange/90"
            >
              إرسال
            </button>
          </form>
          <div className="space-y-3">
            {comments.length === 0 && (
              <div className="text-center text-muted-foreground font-arabic">لا توجد تعليقات بعد.</div>
            )}
            {comments.map((c, idx) => (
              <div key={idx} className="bg-white p-3 rounded shadow-sm border font-arabic">
                <div className="font-semibold text-heritage-brown mb-1">{c.user}</div>
                <div>{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FatimaCookShop;
