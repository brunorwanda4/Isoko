import ProductCard from "../../cards/product-card";

const AllProducts = () => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {[...Array(12)].map((_, index) => {
        return <ProductCard isSmallBtn noDescription className=" w-72" key={index} />;
      })}
    </div>
  );
};

export default AllProducts;
