import { PiShoppingCart } from "react-icons/pi";
import { Image9 } from "../../assets/images";
import { IoBagAddOutline } from "react-icons/io5";
import { cn } from "../../utils/utils";

interface props {
  className?: string;
  noDescription?: boolean;
  isSmallBtn ?: boolean
}

const ProductCard = ({ className, isSmallBtn, noDescription }: props) => {
  return (
    <div className={cn("card bg-base-100 w-96 shadow-sm", className)}>
      <figure>
        <img src={Image9} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <div className=" justify-between flex">
            <h2 className="card-title">Product name</h2>
            <div className=" flex">
              <span className=" card-title">4.5</span>
              <div className="rating">
                <div
                  className="mask mask-star bg-orange-400"
                  aria-label="1 star"
                  aria-current="true"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="basic-title">1200 RWF</h3>
            <h4 className=" link-hover">Electronics</h4>
          </div>
        </div>
        {!noDescription && (
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        )}
        <div className="card-actions">
          <div className=" flex space-x-2 justify-end w-full">
            <button className={cn("btn bg-indigo-500" , isSmallBtn && "btn-sm")}>
              <IoBagAddOutline size={24} /> Buy Now
            </button>
            <button className={cn("btn" , isSmallBtn && "btn-sm")}>
              <PiShoppingCart size={24} /> Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
