"use client";

import { Product } from '../types/product'
import { useCart } from '../context/CartContext'
import bed from '../../public/icon_bed.png'
import Image from 'next/image'

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const item = cart.find((p) => p.id === product.id);

  return (
    <div className="border p-4 rounded">
      <Image
        src={bed}
        alt={product.name}
        className="h-60 w-full object-cover"

      />

      <h3 className="font-bold mt-2">{product.name}</h3>
      <p>{product.description}</p>

      <p>Color: {product.color}</p>
      <p>Size: {product.size}</p>

      <p className="font-bold mt-2">₦{product.price}</p>

      {!item ? (
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white w-full py-2 mt-2"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex justify-center gap-4 mt-2">
          <button onClick={() => decreaseQty(product.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(product.id)}>+</button>
        </div>
      )}
    </div>
  );
}