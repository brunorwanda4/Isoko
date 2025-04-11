import { PiShoppingCart } from "react-icons/pi";
import { IoBagAddOutline } from "react-icons/io5";
import { cn } from "../../utils/utils";
import { productProps } from "../../data/products";

interface props {
  className?: string;
  noDescription?: boolean;
  isSmallBtn?: boolean;
  product: productProps;
  noAddToCard?: boolean;
}

const ProductCard = ({
  className,
  noAddToCard,
  product,
  isSmallBtn,
  noDescription,
}: props) => {
  return (
    <div className={cn("card bg-base-100 w-96 shadow-sm", className)}>
      <figure>
        <img src={product.image} alt="Shoes" className=" max-h-54" />
      </figure>
      <div className="card-body">
        <div>
          <div className=" justify-between flex">
            <h2 className="card-title">{product.name}</h2>
            <div className=" flex">
              <span className=" card-title">{product.rating}</span>
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
            <h3 className="basic-title">{product.amount} RWF</h3>
            <h4 className=" link-hover">{product.Category}</h4>
          </div>
        </div>
        {!noDescription && <p>{product.description}</p>}
        <div className="card-actions">
          <div className=" flex space-x-2 justify-end w-full">
            <button className={cn("btn bg-indigo-500", isSmallBtn && "btn-sm" , noAddToCard && "w-full")}>
              <IoBagAddOutline size={24} /> Buy Now
            </button>
            {!noAddToCard && (
              <button className={cn("btn", isSmallBtn && "btn-sm")}>
                <PiShoppingCart size={24} /> Add to card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
