
export interface Product {
  id: string;
  name_ar: string;
  name_fr: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  description_ar: string;
  description_fr: string;
  available: boolean;
  ingredients?: string[];
  origin?: string;
  artisan?: {
    name: string;
    location: string;
    rating: number;
    reviews: number;
    specialty: string;
    products_count: number;
    followers: number;
    established: string;
    description: string;
  };
}

export const products: Product[] = [
  {
    id: 'kahlouchi-001',
    name_ar: 'كحلوشي',
    name_fr: 'Kahlouchi',
    price: 1200,
    unit: 'كيلو',
    image: '/lovable-uploads/63029d83-c877-4813-a969-ff921d862a76.png',
    category: 'الحلويات التقليدية',
    description_ar: 'حلوى تقليدية جزائرية شهيرة، مصنوعة من أجود المكونات الطبيعية حسب الوصفات التراثية الأصيلة',
    description_fr: 'Pâtisserie traditionnelle algérienne célèbre, fabriquée avec les meilleurs ingrédients naturels selon les recettes ancestrales authentiques',
    available: true,
    ingredients: ['التمر', 'اللوز', 'السمسم', 'العسل', 'جوز الهند'],
    origin: 'الجزائر العاصمة',
    artisan: {
      name: 'الحرف الغذائية التقليدية - Artisanat Alimentaire Traditionnel',
      location: 'الجزائر - Alger',
      rating: 4.9,
      reviews: 89,
      specialty: 'حرف غذائية',
      products_count: 15,
      followers: 456,
      established: '2020',
      description: 'متخصص في إعداد المأكولات الجزائرية التقليدية والمعجنات الأصيلة بالطرق التراثية'
    }
  },
  {
    id: 'maqrout-001',
    name_ar: 'المقروط',
    name_fr: 'Maqrout',
    price: 1500,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
    category: 'الحلويات التقليدية',
    description_ar: 'حلوى تقليدية جزائرية مميزة محشوة بالتمر والمكسرات، مصنوعة بالطريقة التراثية الأصيلة',
    description_fr: 'Pâtisserie traditionnelle algérienne distinctive farcie de dattes et de noix, préparée selon la méthode ancestrale authentique',
    available: true,
    ingredients: ['السميد', 'التمر', 'اللوز', 'العسل', 'ماء الزهر'],
    origin: 'الجزائر العاصمة',
    artisan: {
      name: 'الحرف الغذائية التقليدية - Artisanat Alimentaire Traditionnel',
      location: 'الجزائر - Alger',
      rating: 4.9,
      reviews: 89,
      specialty: 'حرف غذائية',
      products_count: 15,
      followers: 456,
      established: '2020',
      description: 'متخصص في إعداد المأكولات الجزائرية التقليدية والمعجنات الأصيلة بالطرق التراثية'
    }
  },
  {
    id: 'baklawa-001',
    name_ar: 'البقلاوة',
    name_fr: 'Baklawa',
    price: 1800,
    unit: 'كيلو',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&crop=center',
    category: 'الحلويات التقليدية',
    description_ar: 'حلوى شرقية فاخرة مصنوعة من طبقات رقيقة من العجين محشوة بالمكسرات والمحلاة بالعسل',
    description_fr: 'Pâtisserie orientale luxueuse faite de fines couches de pâte farcies de noix et sucrées au miel',
    available: true,
    ingredients: ['عجينة الفيلو', 'الجوز', 'اللوز', 'الفستق', 'العسل', 'القطر'],
    origin: 'الجزائر العاصمة',
    artisan: {
      name: 'الحرف الغذائية التقليدية - Artisanat Alimentaire Traditionnel',
      location: 'الجزائر - Alger',
      rating: 4.9,
      reviews: 89,
      specialty: 'حرف غذائية',
      products_count: 15,
      followers: 456,
      established: '2020',
      description: 'متخصص في إعداد المأكولات الجزائرية التقليدية والمعجنات الأصيلة بالطرق التراثية'
    }
  }
];
