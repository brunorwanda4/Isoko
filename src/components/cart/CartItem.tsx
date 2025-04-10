import React from "react";
import { FaTrashAlt } from "react-icons/fa";

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gradient-to-r from-gray-200 to-gray-400">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg mr-4 transition-transform duration-300 hover:scale-110"
        />
        <div>
          <h5 className="font-bold text-gray-800">{item.name}</h5>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onDecrease(item.id)}
          className="px-2 text-2xl text-gray-700 hover:text-gray-900 transition-colors"
        >
          –
        </button>
        <span className="px-4 font-semibold">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="px-2 text-2xl text-gray-700 hover:text-gray-900 transition-colors"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="px-4 hover:text-red-600 transition-colors"
        >
          <FaTrashAlt />
        </button>
      </div>
      <div className="font-bold text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
