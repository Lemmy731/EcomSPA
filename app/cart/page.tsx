"use client";

import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeItem, increaseQty, decreaseQty } = useCart();

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-3">
          <h3>{item.name}</h3>
          <p>₦{item.price}</p>

          <div className="flex gap-3 items-center">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 mt-2"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}