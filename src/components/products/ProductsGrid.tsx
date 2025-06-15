
import ProductCard from './ProductCard';
import { products } from '@/data/products';

interface ProductsGridProps {
  category?: string;
  limit?: number;
}

const ProductsGrid = ({ category, limit }: ProductsGridProps) => {
  let filteredProducts = products;
  
  console.log('All products:', products);
  console.log('Filtering by category:', category);
  
  if (category) {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  console.log('Filtered products:', filteredProducts);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
