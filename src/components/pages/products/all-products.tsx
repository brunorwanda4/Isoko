import { faceProducts } from "../../../data/products";
import ProductCard from "../../cards/product-card";

const AllProducts = () => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {faceProducts.map((item, index) => {
        return (
          <ProductCard
            product={item}
            isSmallBtn
            noDescription
            className=" w-72"
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
