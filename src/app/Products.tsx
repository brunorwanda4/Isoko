import { useSearchParams } from "react-router-dom";
import AllProducts from "../components/pages/products/all-products";
import ProductAside from "../components/pages/products/products-aside";

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  return (
    <div className="flex">
      <ProductAside />
      <div className=" px-2 mt-4 space-y-2">
        <h1 className=" basic-title">{selectedCategory ? selectedCategory : "All Products"}</h1>
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
