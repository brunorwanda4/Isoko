import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Image path from public folder (e.g., "/picture/product1.jpg")
  category: string;
  rating: number;
  description?: string;
}

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  // Helper function for star icons with animation
  const renderStars = (rating: number) => {
    const stars = [];
    const roundedRating = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`transition-transform duration-300 ${
            i < roundedRating ? "text-yellow-400" : "text-gray-300"
          } hover:scale-125`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
      data-testid="product-card"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Overlaid gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-extrabold text-2xl text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-green-600 mb-2">${product.price}</p>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex items-center mb-3">
          {renderStars(product.rating)}
          <span className="ml-2 text-sm text-gray-500">{product.rating}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-4 rounded-full font-semibold transition-all duration-300 shadow-md inline-flex items-center"
        >
          <FaCartPlus className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
