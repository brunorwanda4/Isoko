import React from "react";
import ProductCard, { Product } from "./ProductCard";


type ProductGridProps = {
    products: Product[];
    onAddToCart: (product: Product) => void;
  };
  
  const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
    return (
      <div className="grid gap-5 grid-cols-6 sm:grid-cols-3 lg:grid-cols-3">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  };
  
  export default ProductGrid;