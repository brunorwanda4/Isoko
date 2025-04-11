import { PiShoppingCart } from "react-icons/pi";
import ProductCard from "../cards/product-card";
import { faceProducts } from "../../data/products";

const NavCard = () => {
  return (
    <div className=" ">
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        <PiShoppingCart size={24} />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl max-h-11/12">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className=" basic-title">Your fluorite products 🥰</h3>
          <div className="  overflow-y-auto mt-4 space-y-2">
            {/* hello */}
            {faceProducts.slice(1,6).map((item, index) => {
              return (
                <ProductCard noAddToCard  product={item} key={index}/>
              );
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NavCard;
