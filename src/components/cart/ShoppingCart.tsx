import React from "react";
import CartItem from "./CartItem";

type CartItemType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type ShoppingCartProps = {
  cartItems: CartItemType[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 transition-shadow duration-300 hover:shadow-2xl">
      <h2 className="font-extrabold text-2xl text-gray-800 mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
          <div className="flex justify-between mt-6 font-bold text-xl text-gray-800">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 rounded-full transition-colors duration-300 shadow">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
