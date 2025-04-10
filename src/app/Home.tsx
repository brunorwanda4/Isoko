import React, { useState, useEffect, useContext } from "react";
import ProductGrid from "../components/product/ProductGrid";
import FilterPanel from "../components/filter/FilterPanel";
import ShoppingCart from "../components/cart/ShoppingCart";
import CartContext from "../context/CartContext";
import productsData from "../data/products.json";
import { Product } from "../components/product/ProductCard";

const HomePage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [minRating, setMinRating] = useState<number>(0);

  const { state, dispatch } = useContext(CartContext);

  const categories: string[] = Array.from(new Set(productsData.map((p) => p.category)));

  const handleAddToCart = (product: Product) => {
    console.debug("Adding product to cart: ", product);
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  useEffect(() => {
    const filtered = productsData.filter((p) => {
      const inCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const inPriceRange = p.price >= priceRange[0] && p.price <= priceRange[1];
      const meetsRating = p.rating >= minRating;
      return inCategory && inPriceRange && meetsRating;
    });
    setFilteredProducts(filtered);
  }, [selectedCategories, priceRange, minRating]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Filters */}
        <div className="lg:col-span-1">
          <FilterPanel
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={(cat: string) =>
              setSelectedCategories((prev) =>
                prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
              )
            }
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            minRating={minRating}
            onRatingChange={setMinRating}
            onClearFilters={() => {
              setSelectedCategories([]);
              setPriceRange([0, 1000]);
              setMinRating(0);
            }}
          />
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-2">
          <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
        </div>

        {/* Shopping Cart */}
        <div className="lg:col-span-1">
          <ShoppingCart
            cartItems={state.items}
            onIncrease={(id: number) => dispatch({ type: "INCREASE_QUANTITY", payload: id })}
            onDecrease={(id: number) => dispatch({ type: "DECREASE_QUANTITY", payload: id })}
            onRemove={(id: number) => dispatch({ type: "REMOVE_ITEM", payload: id })}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
