// src/components/HeroCard.tsx
import { useEffect, useState } from "react";
import { Image6 } from "../../../assets/images";
import { fakeProducts, productProps } from "../../../data/products";

const HeroCard = () => {
  const [cartProducts, setCartProducts] = useState<productProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const cartIds = JSON.parse(localStorage.getItem("cart") || "[]");
      const filteredProducts = fakeProducts.filter((product) =>
        cartIds.includes(product.id)
      );
      setCartProducts(filteredProducts);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const lastProduct = cartProducts[0];

  return (
    <div>
      {lastProduct ? (
        <div className="card w-full hover:shadow-lg duration-200">
          <div className="avatar">
            <div className="w-full rounded-2xl">
              <img src={lastProduct.image} alt={lastProduct.name} />
            </div>
          </div>
          <div className="card-body absolute bg-gradient-to-b bottom-0 from-transparent to-black text-white rounded-b-2xl w-full">
            <h2 className="card-title">
              {lastProduct.name} ID: {lastProduct.id}
            </h2>
            <p>{lastProduct.description}</p>
            <button className="card-title text-indigo-500 btn btn-ghost w-fit">
              Shop Now
            </button>
          </div>
        </div>
      ) : (
        <div className="card w-full hover:shadow-lg duration-200">
          <figure>
            <img src={Image6} alt="Default product" />
          </figure>
          <div className="card-body absolute bg-gradient-to-b bottom-0 from-transparent to-black text-white rounded-b-2xl">
            <h2 className="card-title">
              Hurry! Some products are gone — add more to your cart!
            </h2>
            <button className="card-title text-indigo-500 btn btn-ghost w-fit">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCard;
