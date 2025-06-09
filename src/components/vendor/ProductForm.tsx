
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Upload, Plus } from 'lucide-react';

interface ProductFormProps {
  product?: any;
  onSave: (product: any) => void;
  onCancel: () => void;
}

const ProductForm = ({ product, onSave, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    nameAr: product?.nameAr || '',
    nameFr: product?.nameFr || '',
    description: product?.description || '',
    descriptionAr: product?.descriptionAr || '',
    descriptionFr: product?.descriptionFr || '',
    price: product?.price || '',
    originalPrice: product?.originalPrice || '',
    stock: product?.stock || '',
    category: product?.category || '',
    subcategory: product?.subcategory || '',
    tags: product?.tags || [],
    images: product?.images || [],
    weight: product?.weight || '',
    dimensions: product?.dimensions || { length: '', width: '', height: '' },
    materials: product?.materials || [],
    craftingTime: product?.craftingTime || '',
    customizable: product?.customizable || false,
    handmade: product?.handmade || true,
    shippingInfo: product?.shippingInfo || ''
  });

  const [newTag, setNewTag] = useState('');
  const [newMaterial, setNewMaterial] = useState('');

  const categories = [
    'الخزف والفخار',
    'النسيج والتطريز',
    'الخشب والنحت',
    'المعادن والنحاس',
    'الجلد والحقائب',
    'المجوهرات التقليدية',
    'الحرف الغذائية',
    'مستحضرات طبيعية'
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // In a real app, you would upload to cloud storage
    const newImages = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const addMaterial = () => {
    if (newMaterial.trim() && !formData.materials.includes(newMaterial.trim())) {
      setFormData(prev => ({
        ...prev,
        materials: [...prev.materials, newMaterial.trim()]
      }));
      setNewMaterial('');
    }
  };

  const removeMaterial = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.filter(m => m !== material)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: product?.id || Date.now(),
      createdAt: product?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: product?.status || 'draft'
    });
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="font-arabic text-heritage-brown">
          {product ? 'تعديل المنتج' : 'إضافة منتج جديد'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="font-arabic">اسم المنتج (عربي)</Label>
              <Input
                value={formData.nameAr}
                onChange={(e) => setFormData(prev => ({ ...prev, nameAr: e.target.value }))}
                placeholder="أدخل اسم المنتج بالعربية"
                required
              />
            </div>
            <div>
              <Label>Nom du produit (Français)</Label>
              <Input
                value={formData.nameFr}
                onChange={(e) => setFormData(prev => ({ ...prev, nameFr: e.target.value }))}
                placeholder="Nom du produit en français"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label className="font-arabic">الوصف</Label>
            <Textarea
              value={formData.descriptionAr}
              onChange={(e) => setFormData(prev => ({ ...prev, descriptionAr: e.target.value }))}
              placeholder="وصف تفصيلي للمنتج..."
              rows={4}
              required
            />
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label className="font-arabic">السعر (دج)</Label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                placeholder="0"
                required
              />
            </div>
            <div>
              <Label className="font-arabic">السعر الأصلي (دج)</Label>
              <Input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                placeholder="0"
              />
            </div>
            <div>
              <Label className="font-arabic">المخزون</Label>
              <Input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="font-arabic">الفئة</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat} className="font-arabic">{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="font-arabic">الفئة الفرعية</Label>
              <Input
                value={formData.subcategory}
                onChange={(e) => setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                placeholder="الفئة الفرعية"
              />
            </div>
          </div>

          {/* Images */}
          <div>
            <Label className="font-arabic">صور المنتج</Label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-2">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 p-0"
                    onClick={() => removeImage(index)}
                  >
                    <X size={12} />
                  </Button>
                </div>
              ))}
              <label className="flex flex-col items-center justify-center h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload size={20} className="text-gray-400" />
                <span className="text-xs text-gray-500 font-arabic">إضافة صورة</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label className="font-arabic">الكلمات المفتاحية</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {formData.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="font-arabic">
                  {tag}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => removeTag(tag)}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="أضف كلمة مفتاحية"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" variant="outline" onClick={addTag}>
                <Plus size={16} />
              </Button>
            </div>
          </div>

          {/* Materials */}
          <div>
            <Label className="font-arabic">المواد المستخدمة</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {formData.materials.map(material => (
                <Badge key={material} variant="outline" className="font-arabic">
                  {material}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => removeMaterial(material)}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newMaterial}
                onChange={(e) => setNewMaterial(e.target.value)}
                placeholder="أضف مادة"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addMaterial())}
              />
              <Button type="button" variant="outline" onClick={addMaterial}>
                <Plus size={16} />
              </Button>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="font-arabic">الوزن (كغ)</Label>
              <Input
                type="number"
                step="0.1"
                value={formData.weight}
                onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                placeholder="0.0"
              />
            </div>
            <div>
              <Label className="font-arabic">وقت الصناعة (أيام)</Label>
              <Input
                type="number"
                value={formData.craftingTime}
                onChange={(e) => setFormData(prev => ({ ...prev, craftingTime: e.target.value }))}
                placeholder="0"
              />
            </div>
          </div>

          {/* Dimensions */}
          <div>
            <Label className="font-arabic">الأبعاد (سم)</Label>
            <div className="grid grid-cols-3 gap-2 mt-1">
              <Input
                type="number"
                value={formData.dimensions.length}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  dimensions: { ...prev.dimensions, length: e.target.value }
                }))}
                placeholder="الطول"
              />
              <Input
                type="number"
                value={formData.dimensions.width}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  dimensions: { ...prev.dimensions, width: e.target.value }
                }))}
                placeholder="العرض"
              />
              <Input
                type="number"
                value={formData.dimensions.height}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  dimensions: { ...prev.dimensions, height: e.target.value }
                }))}
                placeholder="الارتفاع"
              />
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <Label className="font-arabic">معلومات الشحن</Label>
            <Textarea
              value={formData.shippingInfo}
              onChange={(e) => setFormData(prev => ({ ...prev, shippingInfo: e.target.value }))}
              placeholder="معلومات إضافية حول الشحن والتوصيل..."
              rows={2}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-6">
            <Button type="button" variant="outline" onClick={onCancel}>
              إلغاء
            </Button>
            <Button type="submit" className="bg-craft-orange hover:bg-craft-orange/90 text-white font-arabic">
              {product ? 'تحديث المنتج' : 'إضافة المنتج'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
