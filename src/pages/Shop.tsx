
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Package, Users, MessageCircle, Heart, Share2, ShoppingCart } from 'lucide-react';

const Shop = () => {
  const { shopId } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock shop data
  const shop = {
    id: 'shop-1',
    name: 'ورشة فاطمة للقفطان',
    name_fr: 'Atelier Fatima Qaftan',
    owner: 'فاطمة بن علي',
    owner_fr: 'Fatima Ben Ali',
    region: 'تلمسان',
    region_fr: 'Tlemcen',
    category: 'نسيج وتطريز',
    rating: 4.8,
    reviews: 156,
    products: 24,
    followers: 890,
    coverImage: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=1200&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b412?w=150&h=150&fit=crop&crop=face',
    description: 'متخصصة في صناعة القفطان التقليدي والتطريز اليدوي بخيوط الذهب والفضة منذ أكثر من 15 سنة. نستخدم الأقمشة الطبيعية والحرير الأصيل في جميع منتجاتنا.',
    description_fr: 'Spécialisée dans la confection de qaftans traditionnels et broderie à la main avec des fils d\'or et d\'argent depuis plus de 15 ans.',
    established: '2018',
    badges: ['مميز', 'توصيل سريع', 'ضمان الجودة'],
    workingHours: 'الأحد - الخميس: 9:00 - 18:00',
    phone: '+213 555 123 456',
    email: 'fatima.qaftan@email.com',
    socialMedia: {
      facebook: 'FatimaQaftanAtelier',
      instagram: '@fatima_qaftan'
    }
  };

  const products = [
    {
      id: 1,
      name: 'قفطان تقليدي مطرز بالذهب',
      name_fr: 'Qaftan Traditionnel Brodé Or',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 23,
      isNew: true
    },
    {
      id: 2,
      name: 'قفطان عصري بالتطريز الفضي',
      name_fr: 'Qaftan Moderne Broderie Argent',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 18,
      isNew: false
    },
    {
      id: 3,
      name: 'قفطان الزفاف التقليدي',
      name_fr: 'Qaftan de Mariage Traditionnel',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=300&h=300&fit=crop',
      rating: 5.0,
      reviews: 12,
      isNew: true
    }
  ];

  const reviews = [
    {
      id: 1,
      customer: 'سارة أحمد',
      rating: 5,
      comment: 'قفطان رائع وجودة عالية. التطريز محترف جداً والقماش ممتاز.',
      date: '2025-01-15',
      product: 'قفطان تقليدي مطرز بالذهب'
    },
    {
      id: 2,
      customer: 'نادية محمد',
      rating: 4,
      comment: 'خدمة ممتازة وتوصيل سريع. أنصح بالتعامل مع هذه الورشة.',
      date: '2025-01-10',
      product: 'قفطان عصري بالتطريز الفضي'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={3} />
      
      {/* Shop Cover */}
      <div className="relative h-64 md:h-80">
        <img 
          src={shop.coverImage}
          alt={shop.name_fr}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex items-end space-x-6 rtl:space-x-reverse">
              <img 
                src={shop.avatar}
                alt={shop.owner_fr}
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div className="text-white">
                <h1 className="text-3xl font-bold font-arabic mb-2">{shop.name}</h1>
                <h2 className="text-xl mb-2">{shop.name_fr}</h2>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="font-semibold">{shop.rating}</span>
                    <span className="text-white/80">({shop.reviews} تقييم)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span className="font-arabic">{shop.region}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Actions */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button
                onClick={() => setIsFollowing(!isFollowing)}
                variant={isFollowing ? "default" : "outline"}
                className={isFollowing ? "bg-craft-orange hover:bg-craft-orange/90" : "border-craft-orange text-craft-orange hover:bg-craft-orange hover:text-white"}
              >
                <Users size={16} className="mr-2" />
                {isFollowing ? 'متابع' : 'متابعة'}
              </Button>
              <Button variant="outline" className="border-heritage-brown text-heritage-brown hover:bg-heritage-brown hover:text-white">
                <MessageCircle size={16} className="mr-2" />
                مراسلة
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Heart size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 size={16} />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-semibold text-heritage-brown">{shop.products}</div>
                <div className="font-arabic">منتج</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-heritage-brown">{shop.followers}</div>
                <div className="font-arabic">متابع</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-heritage-brown">{shop.reviews}</div>
                <div className="font-arabic">تقييم</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products" className="font-arabic">المنتجات</TabsTrigger>
            <TabsTrigger value="about" className="font-arabic">حول الورشة</TabsTrigger>
            <TabsTrigger value="reviews" className="font-arabic">التقييمات</TabsTrigger>
            <TabsTrigger value="contact" className="font-arabic">التواصل</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-md hover:-translate-y-1 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={product.image}
                        alt={product.name_fr}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-3 left-3 bg-craft-orange text-white font-arabic">
                          جديد
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-heritage-brown hover:bg-craft-orange hover:text-white"
                      >
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold font-arabic text-heritage-brown text-sm mb-1">
                            {product.name}
                          </h3>
                          <p className="text-xs text-clay-brown">
                            {product.name_fr}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400 fill-current" size={12} />
                            <span className="text-xs font-semibold">{product.rating}</span>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-heritage-brown font-arabic">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-xs text-muted-foreground mr-1 font-arabic">
                              دج
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                    نبذة عن الورشة
                  </h3>
                  <p className="text-muted-foreground font-arabic leading-relaxed mb-6">
                    {shop.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {shop.description_fr}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">تأسست سنة {shop.established}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {shop.badges.map((badge, index) => (
                        <Badge key={index} className="bg-craft-orange text-white font-arabic">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                    معلومات إضافية
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">ساعات العمل</h4>
                      <p className="text-muted-foreground font-arabic">{shop.workingHours}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">التخصص</h4>
                      <Badge variant="secondary" className="font-arabic">{shop.category}</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">المنطقة</h4>
                      <p className="text-muted-foreground">
                        <span className="font-arabic">{shop.region}</span> - {shop.region_fr}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              <div className="bg-sand-beige p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-heritage-brown">{shop.rating}</div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      {shop.reviews} تقييم
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-craft-orange">98%</div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      نسبة الرضا
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-clay-brown">95%</div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      يوصون بالورشة
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold font-arabic">{review.customer}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              {[1,2,3,4,5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                                  size={14} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-arabic mb-2">{review.comment}</p>
                      <p className="text-sm text-muted-foreground">
                        المنتج: <span className="font-arabic">{review.product}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
                    معلومات التواصل
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">رقم الهاتف</h4>
                      <p className="text-muted-foreground">{shop.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">البريد الإلكتروني</h4>
                      <p className="text-muted-foreground">{shop.email}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-arabic mb-2">وسائل التواصل الاجتماعي</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          فيسبوك: {shop.socialMedia.facebook}
                        </p>
                        <p className="text-muted-foreground">
                          إنستغرام: {shop.socialMedia.instagram}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-6">
                    إرسال رسالة
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium font-arabic mb-2">الاسم</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-arabic mb-2">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-arabic mb-2">الرسالة</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        placeholder="اكتب رسالتك هنا..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
