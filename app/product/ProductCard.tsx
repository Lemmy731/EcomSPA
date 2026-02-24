"use client";

import { Product } from '../types/product'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import { useState } from 'react'
import shoeone from '../../public/new-pair-white-sneakers-isolated-white.jpg'
import shoetwo from '../../public/Nike Dunk Low SP White _ Red.jpg'
import shoethree from '../../public/Burgundy and white Naplak leather loafers.jpg'
import shoefour from '../../public/download (2).jpg'
import shoefive from '../../public/download (1).jpg'
import shoesix from '../../public/new-pair-white-sneakers-isolated-white.jpg'
import shoeseven from '../../public/loaferwhite.jpg'
import shoeeight from  '../../public/Jason 2 (Low Top) - White _ 13.jpg'

type Props = {
  product: Product;
  index: number;
};
export default function ProductCard({ product, index }: Props) {
  const images = [
  shoeone,
  shoetwo,
  shoethree,
  shoefour,
  shoefive,
  shoesix,
  shoeseven,
  shoeeight
];
   const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const item = cart.find((p) => p.id === product.id);

  const imageSrc = images[index % images.length];

  return (
    <div className="border p-4 rounded">
      <Image
        src={imageSrc}
        alt={product.name}
        className="h-60 w-full object-cover"
        width={300}
        height={200}
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