import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/cards/product-card";
import ProductAside from "../components/pages/products/products-aside";
import { fakeProducts } from "../data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <div className="flex">
      <ProductAside />
      <div className=" px-2 mt-4 space-y-2">
        <h1 className=" basic-title">{selectedCategory ? selectedCategory :"All Products"}</h1>
        <div className=" grid grid-cols-3 gap-4">
            {selectedCategory
            ? fakeProducts
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <ProductCard
                product={item}
                isSmallBtn
                noDescription
                className=" w-72"
                key={index}
                />
              ))
            : fakeProducts.map((item, index) => (
              <ProductCard
                product={item}
                isSmallBtn
                noDescription
                className=" w-72"
                key={index}
              />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
