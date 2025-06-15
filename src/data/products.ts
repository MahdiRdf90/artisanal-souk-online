
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
}

export const products: Product[] = [
  {
    id: 'kahlouchi-001',
    name_ar: 'كحلوشي',
    name_fr: 'Kahlouchi',
    price: 1200,
    unit: 'كيلو',
    image: '/lovable-uploads/f63f5a74-b21f-4527-9797-ee63ccef0ab6.png',
    category: 'الصناعات الغذائية التقليدية',
    description_ar: 'حلوى تقليدية جزائرية شهيرة، مصنوعة من أجود المكونات الطبيعية حسب الوصفات التراثية الأصيلة',
    description_fr: 'Pâtisserie traditionnelle algérienne célèbre, fabriquée avec les meilleurs ingrédients naturels selon les recettes ancestrales authentiques',
    available: true,
    ingredients: ['التمر', 'اللوز', 'السمسم', 'العسل', 'جوز الهند'],
    origin: 'الجزائر العاصمة'
  }
];
