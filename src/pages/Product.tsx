import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, ChevronRight } from 'lucide-react';

const Product = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'قفطان تقليدي مطرز بالذهب',
    name_fr: 'Qaftan Traditionnel Brodé Or',
    price: 25000,
    originalPrice: 30000,
    rating: 4.9,
    reviews: 23,
    description: 'قفطان تقليدي من الحرير الطبيعي مطرز بخيوط الذهب الأصيلة. صناعة يدوية بالكامل وفقاً للتقاليد التلمسانية العريقة. مناسب للمناسبات الخاصة والأعراس.',
    description_fr: 'Qaftan traditionnel en soie naturelle brodé avec des fils d\'or authentiques. Entièrement fait à la main selon les traditions de Tlemcen.',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=600&h=600&fit=crop'
    ],
    vendor: {
      id: 'shop-1',
      name: 'ورشة فاطمة للقفطان',
      name_fr: 'Atelier Fatima Qaftan',
      rating: 4.8,
      region: 'تلمسان'
    },
    category: 'نسيج وتطريز',
    specifications: {
      material: 'حرير طبيعي',
      size: 'قابل للتعديل',
      color: 'ذهبي وأحمر',
      weight: '800 جرام',
      origin: 'تلمسان، الجزائر'
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['ذهبي', 'فضي', 'أحمر', 'أزرق'],
    inStock: true,
    stockCount: 5,
    shippingTime: '3-5 أيام عمل',
    features: [
      'صناعة يدوية 100%',
      'خيوط ذهبية أصيلة',
      'حرير طبيعي',
      'تصميم تقليدي أصيل',
      'قابل للغسيل الجاف'
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'قفطان عصري مطرز',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=200&fit=crop',
      rating: 4.7
    },
    {
      id: 3,
      name: 'قفطان الزفاف الفاخر',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=200&h=200&fit=crop',
      rating: 5.0
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-DZ').format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-sand-beige py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-craft-orange">الرئيسية</Link>
            <ChevronRight size={16} />
            <Link to="/categories" className="hover:text-craft-orange">الأصناف</Link>
            <ChevronRight size={16} />
            <Link to="/categories/textiles" className="hover:text-craft-orange font-arabic">{product.category}</Link>
            <ChevronRight size={16} />
            <span className="text-heritage-brown font-arabic">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border">
              <img 
                src={product.images[selectedImage]}
                alt={product.name_fr}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-craft-orange' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name_fr} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold font-arabic text-heritage-brown mb-2">
                {product.name}
              </h1>
              <h2 className="text-xl text-clay-brown mb-4">
                {product.name_fr}
              </h2>
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} تقييم)</span>
                </div>
                <Badge variant="secondary" className="font-arabic">
                  {product.category}
                </Badge>
                {product.inStock && (
                  <Badge className="bg-green-500 text-white font-arabic">
                    متوفر ({product.stockCount})
                  </Badge>
                )}
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="text-3xl font-bold text-heritage-brown">
                  {formatPrice(product.price)} دج
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)} دج
                  </div>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Vendor Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Link to={`/shop/${product.vendor.id}`} className="flex items-center space-x-3 hover:text-craft-orange transition-colors">
                    <div className="w-12 h-12 bg-craft-orange rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">ف</span>
                    </div>
                    <div>
                      <h3 className="font-bold font-arabic">{product.vendor.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span>{product.vendor.rating}</span>
                        <span>•</span>
                        <span className="font-arabic">{product.vendor.region}</span>
                      </div>
                    </div>
                  </Link>
                  <Button variant="outline" size="sm" className="font-arabic">
                    زيارة الورشة
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Options */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold font-arabic mb-2">المقاس:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm" className="w-12 h-12">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold font-arabic mb-2">اللون:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button key={color} variant="outline" size="sm" className="font-arabic">
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold font-arabic mb-2">الكمية:</h3>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
                <ShoppingCart className="mr-2" size={20} />
                إضافة إلى السلة - {formatPrice(product.price * quantity)} دج
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="font-arabic">
                  <Heart className="mr-2" size={16} />
                  إضافة للمفضلة
                </Button>
                <Button variant="outline" className="font-arabic">
                  <Share2 className="mr-2" size={16} />
                  مشاركة
                </Button>
              </div>
            </div>

            {/* Shipping & Services */}
            <div className="space-y-3 p-4 bg-sand-beige rounded-lg">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Truck className="text-craft-orange" size={20} />
                <span className="font-arabic">توصيل خلال {product.shippingTime}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Shield className="text-craft-orange" size={20} />
                <span className="font-arabic">ضمان الجودة لمدة شهر</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <RotateCcw className="text-craft-orange" size={20} />
                <span className="font-arabic">إمكانية الاستبدال خلال 7 أيام</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                  وصف المنتج
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-arabic leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description_fr}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold font-arabic mb-3">المميزات:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="w-2 h-2 bg-craft-orange rounded-full"></span>
                          <span className="font-arabic">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-arabic text-heritage-brown mb-4">
                  المواصفات
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-arabic">المادة:</span>
                    <span className="font-arabic">{product.specifications.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-arabic">المقاس:</span>
                    <span className="font-arabic">{product.specifications.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-arabic">اللون:</span>
                    <span className="font-arabic">{product.specifications.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-arabic">الوزن:</span>
                    <span className="font-arabic">{product.specifications.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-arabic">المنشأ:</span>
                    <span className="font-arabic">{product.specifications.origin}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-bold font-arabic text-heritage-brown mb-6">
            منتجات مشابهة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h4 className="font-bold font-arabic text-heritage-brown text-sm mb-2">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={12} />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                      <div className="text-craft-orange font-bold">
                        {formatPrice(product.price)} دج
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
