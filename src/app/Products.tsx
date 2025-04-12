import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import ProductCard from "../components/cards/product-card";
import ProductAside from "../components/pages/products/products-aside";
import { fakeProducts, productProps } from "../data/products";

export const ShuffleArray = (arr: productProps[]) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const mixedProducts = useMemo(() => {
    const filtered = selectedCategory
      ? fakeProducts.filter((item) => item.category === selectedCategory)
      : fakeProducts;
    return ShuffleArray(filtered);
  }, [selectedCategory]);

  return (
    <div className="flex">
      <ProductAside />
      <div className=" px-2 mt-4 space-y-2">
        <h1 className=" basic-title">
          {selectedCategory ? selectedCategory : "All Products"}
        </h1>
        <div className=" grid grid-cols-3 gap-4">
          {mixedProducts.map((item, index) => (
            <ProductCard
              product={item}
              isSmallBtn
              noDescription
              className=" w-[21.5rem]"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
