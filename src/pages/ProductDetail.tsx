
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import ProductDetails from '@/components/products/ProductDetails';
// import RelatedProducts from '@/components/products/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* The ProductDetails and RelatedProducts components were imported but do not exist.
            Please create them if needed, or replace this section with the appropriate product detail content. */}
        {/* <ProductDetails productId={id || ''} />
        <RelatedProducts category="example" /> */}
        <div className="text-center py-24 text-muted-foreground">
          لم يتم العثور على تفاصيل المنتج. يرجى مراجعة إعدادات الصفحة أو إضافة مكوّن التفاصيل المناسب.
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

