
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, History, Sparkles } from 'lucide-react';
import { getProductHistory } from '@/services/aiService';

interface ProductHistoryProps {
  productName: string;
}

interface HistoryData {
  history: string;
  traditions: string;
  cultural_significance: string;
  preparation_methods: string;
}

const ProductHistory = ({ productName }: ProductHistoryProps) => {
  const [historyData, setHistoryData] = useState<HistoryData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getProductHistory(productName);
      setHistoryData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-arabic text-heritage-brown">
          <History size={24} />
          تاريخ وتراث المنتج
          <Badge variant="secondary" className="bg-craft-orange/10 text-craft-orange">
            <Sparkles size={14} className="mr-1" />
            مدعوم بالذكاء الاصطناعي
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!historyData && !loading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4 font-arabic">
              اكتشف التاريخ العريق والتقاليد الأصيلة لهذا المنتج التراثي
            </p>
            <Button 
              onClick={fetchHistory}
              className="bg-craft-orange hover:bg-craft-orange/90"
            >
              <Sparkles size={16} className="mr-2" />
              استكشف التاريخ
            </Button>
          </div>
        )}

        {loading && (
          <div className="text-center py-8">
            <Loader2 className="animate-spin mx-auto mb-4 text-craft-orange" size={32} />
            <p className="text-muted-foreground font-arabic">
              جاري جمع المعلومات التاريخية...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 mb-4 font-arabic">{error}</p>
            <Button 
              onClick={fetchHistory}
              variant="outline"
            >
              حاول مرة أخرى
            </Button>
          </div>
        )}

        {historyData && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-sand-beige/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-arabic text-heritage-brown">
                    التاريخ والأصول
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed font-arabic text-gray-700">
                    {historyData.history}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-sand-beige/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-arabic text-heritage-brown">
                    التقاليد والمناسبات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed font-arabic text-gray-700">
                    {historyData.traditions}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-sand-beige/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-arabic text-heritage-brown">
                    الأهمية الثقافية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed font-arabic text-gray-700">
                    {historyData.cultural_significance}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-sand-beige/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-arabic text-heritage-brown">
                    طرق التحضير التقليدية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed font-arabic text-gray-700">
                    {historyData.preparation_methods}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground font-arabic">
                المعلومات مُولدة بواسطة الذكاء الاصطناعي • قد تختلف التفاصيل حسب المصادر التاريخية
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductHistory;
