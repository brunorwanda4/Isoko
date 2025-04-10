import { Link } from "react-router-dom";
import ProductCard from "../../cards/product-card";
import { IoIosArrowRoundForward } from "react-icons/io";
import { faceProducts } from "../../../data/products";

const PopularProducts = () => {
  return (
    <div className=" space-y-2">
      <div className=" flex justify-between w-full items-center">
        <h2 className="basic-title">Today's big deals</h2>
        <div className=" ">
          <Link
            to={"/products"}
            className=" link hover:text-indigo-500 flex space-x-1"
          >
            All Products <IoIosArrowRoundForward size={24} />
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4">
        {faceProducts.slice(0, 6).map((item, index) => {
          return (
            <ProductCard product={item} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
