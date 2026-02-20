"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cart } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex justify-between p-4 shadow">
      <Link href="/product">Home</Link>

      <Link href="/cart">
        Cart ({count})
      </Link>
    </div>
  );
}