import AllProducts from "../components/pages/products/all-products";
import ProductAside from "../components/pages/products/products-aside";

const Products = () => {
  return (
    <div className="flex">
      <ProductAside />
      <div className=" px-2 mt-4 space-y-2">
        <h1 className=" basic-title">All Products</h1>
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
